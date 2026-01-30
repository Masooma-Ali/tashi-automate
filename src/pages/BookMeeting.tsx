import { useState } from "react";
import { Calendar, Clock, User, Mail, Briefcase, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FormInput, FormTextarea } from "@/components/FormInput";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const meetingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company name must be less than 100 characters"),
  role: z.string().trim().max(100, "Role must be less than 100 characters").optional(),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  topic: z.string().trim().min(10, "Please provide more details about the meeting topic").max(1000, "Topic must be less than 1000 characters"),
});

type MeetingFormData = z.infer<typeof meetingSchema>;

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function BookMeeting() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<MeetingFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    date: "",
    time: "",
    topic: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof MeetingFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof MeetingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = meetingSchema.parse(formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Meeting request submitted!",
        description: "You'll receive a calendar invite shortly.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof MeetingFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof MeetingFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book a{" "}
              <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(210,100%,45%)] bg-clip-text text-transparent">
                Meeting
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Schedule a consultation with our team to discuss your automation and
              AI needs. We'll explore how we can help transform your business.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="max-w-2xl mx-auto bg-card rounded-3xl border border-border/50 p-8 md:p-10 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Meeting Scheduled!
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    We've received your meeting request.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    A calendar invite will be sent to <strong>{formData.email}</strong>
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        role: "",
                        date: "",
                        time: "",
                        topic: "",
                      });
                    }}
                  >
                    Schedule Another Meeting
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Your Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        error={errors.name}
                        required
                      />
                      <FormInput
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        error={errors.email}
                        required
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput
                        label="Company *"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        error={errors.company}
                        required
                      />
                      <FormInput
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="CTO, Product Manager, etc."
                        error={errors.role}
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Preferred Date & Time
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                          Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={getMinDate()}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          required
                        />
                        {errors.date && (
                          <p className="text-sm text-destructive">{errors.date}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-foreground">
                          Time Slot *
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          required
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <p className="text-sm text-destructive">{errors.time}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Meeting Topic
                    </h3>
                    <FormTextarea
                      label="What would you like to discuss? *"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      placeholder="Tell us about your project, challenges, or what you'd like to achieve..."
                      error={errors.topic}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Scheduling...
                      </>
                    ) : (
                      <>
                        Schedule Meeting
                        <Calendar className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Meetings are typically 30-60 minutes. We'll confirm the exact
                    time via email.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
