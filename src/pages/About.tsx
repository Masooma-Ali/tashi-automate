import { Target, Users, Lightbulb, Award, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const values = [
  {
    icon: Target,
    title: "Automation-First Mindset",
    description:
      "We believe in eliminating repetitive tasks through intelligent automation, freeing your team to focus on what matters most.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Every solution is tailored to your specific needs, ensuring maximum impact and seamless integration with your existing systems.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Core",
    description:
      "We stay at the forefront of AI and automation technologies, continuously exploring new ways to drive value for our clients.",
  },
  {
    icon: Award,
    title: "Enterprise-Grade Quality",
    description:
      "Security, scalability, and reliability are non-negotiable. Every solution meets the highest industry standards.",
  },
];

const capabilities = [
  "AI Agents & Multi-Agent Orchestration",
  "Workflow Automation (n8n, Zapier, Make.com)",
  "Secure Authentication & Access Control",
  "RAG Systems & Knowledge Bases",
  "Custom SaaS Product Development",
  "Machine Learning & Deep Learning",
  "API Design & Integration",
  "Hybrid & Edge Deployments",
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection animation="fade-up" className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(210,100%,45%)] bg-clip-text text-transparent">
                Tashi Technologies
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a forward-thinking technology company specializing in AI-driven
              automation solutions. Our mission is to empower enterprises with
              intelligent systems that transform operations and drive sustainable growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the global leader in intelligent automation, creating a
                  future where businesses operate with unprecedented efficiency,
                  security, and innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where AI and human expertise work in harmony,
                  where complex processes are simplified, and where every organization
                  has access to enterprise-grade automation solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(210,100%,45%)] bg-clip-text text-transparent mb-4">
                      T
                    </div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      Transforming Tomorrow
                    </p>
                  </div>
                </div>
                {/* Floating accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-3xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="flex gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section - Floating Pill Design */}
      <section className="py-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto bg-[hsl(220,15%,10%)] text-white rounded-[3rem] px-8 md:px-16 py-16 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <AnimatedSection animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What We Bring to the Table
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Our team combines deep expertise in AI, automation, and enterprise
                  software development to deliver solutions that make a real difference.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((capability) => (
                    <div key={capability} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">{capability}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-8 right-8 w-24 h-24 border border-white/30 rounded-full" />
              <div className="absolute bottom-8 left-8 w-36 h-36 border border-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
