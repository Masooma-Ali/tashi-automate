import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, Shield, Workflow, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Multi-Agent Systems",
    description: "Intelligent autonomous agents that work together to solve complex business challenges.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description: "Streamline operations with n8n, Zapier, and Make.com integrations.",
  },
  {
    icon: Shield,
    title: "Secure AI Systems",
    description: "Enterprise-grade authentication, access control, and comprehensive audit logs.",
  },
  {
    icon: Database,
    title: "RAG & SaaS Solutions",
    description: "Custom retrieval-augmented generation systems and scalable SaaS products.",
  },
  {
    icon: Cpu,
    title: "ML/DL & Data Solutions",
    description: "Advanced machine learning models and intelligent data processing pipelines.",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Seamless connectivity with webhooks, APIs, and database synchronization.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Secure Deployments" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="section-container text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Powering the Future of Automation
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 max-w-4xl mx-auto">
              Intelligent Automation &{" "}
              <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(210,100%,45%)] bg-clip-text text-transparent">
                AI-Driven Solutions
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Transform your enterprise with cutting-edge AI agents, secure automation
              workflows, and scalable integration solutions designed for the digital age.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/book-meeting">
                <Button variant="heroOutline" size="lg">
                  Book a Meeting
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Floating accent elements */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI and automation solutions tailored for modern enterprises
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={600} className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Floating Pill Design */}
      <section className="py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto bg-[hsl(220,15%,10%)] text-white rounded-[3rem] px-8 md:px-16 py-16 relative overflow-hidden">
            <AnimatedSection animation="fade-up" className="text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and automation solutions can drive efficiency,
                security, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-foreground hover:bg-white/90 rounded-full"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-white text-foreground hover:bg-white/90 rounded-full"
                  >
                    Learn More About Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-6 left-6 w-32 h-32 border border-white/30 rounded-full" />
              <div className="absolute bottom-6 right-6 w-48 h-48 border border-white/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
