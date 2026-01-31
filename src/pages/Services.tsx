import { Link } from "react-router-dom";
import {
  Bot,
  Cpu,
  Shield,
  Workflow,
  Zap,
  Database,
  Cloud,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Multi-Agent Systems",
    description:
      "Build intelligent autonomous agents that collaborate to solve complex business challenges. Our multi-agent orchestration enables sophisticated reasoning and decision-making.",
    features: [
      "Custom AI agent development",
      "Multi-agent collaboration frameworks",
      "Reasoning-driven decision systems",
      "Natural language interfaces",
    ],
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Streamline your operations with powerful automation workflows using industry-leading platforms like n8n, Zapier, and Make.com.",
    features: [
      "Workflow design & optimization",
      "n8n, Zapier, Make.com integration",
      "Event-driven automation",
      "Business process automation",
    ],
  },
  {
    icon: Shield,
    title: "Secure & Verifiable AI",
    description:
      "Enterprise-grade security for your AI systems with comprehensive authentication, role-based access control, and detailed audit logging.",
    features: [
      "Authentication & authorization",
      "Role-based access control (RBAC)",
      "Comprehensive audit logs",
      "Compliance-ready systems",
    ],
  },
  {
    icon: Database,
    title: "RAG Systems & Knowledge Bases",
    description:
      "Retrieval-augmented generation systems that leverage your organization's knowledge to provide accurate, contextual responses.",
    features: [
      "Custom RAG implementations",
      "Vector database integration",
      "Document processing pipelines",
      "Semantic search capabilities",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description:
      "End-to-end development of scalable SaaS products built on modern architectures with AI capabilities at their core.",
    features: [
      "Full-stack SaaS development",
      "Multi-tenant architectures",
      "Subscription & billing systems",
      "Analytics & reporting dashboards",
    ],
  },
  {
    icon: Cpu,
    title: "ML/DL & Data Solutions",
    description:
      "Advanced machine learning and deep learning solutions for predictive analytics, classification, and intelligent data processing.",
    features: [
      "Custom ML model development",
      "Deep learning implementations",
      "Data pipeline engineering",
      "Model deployment & monitoring",
    ],
  },
  {
    icon: Zap,
    title: "API Integrations",
    description:
      "Seamless connectivity between your systems with robust API design, webhooks, and database synchronization.",
    features: [
      "RESTful API development",
      "Webhook implementation",
      "Third-party integrations",
      "Real-time data sync",
    ],
  },
  {
    icon: Lock,
    title: "Hybrid & Edge Deployments",
    description:
      "Deploy AI solutions on-premises, in the cloud, or at the edge based on your security, latency, and compliance requirements.",
    features: [
      "On-premises deployment",
      "Cloud architecture design",
      "Edge computing solutions",
      "Hybrid infrastructure",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(210,100%,45%)] bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive AI and automation solutions designed to transform your
              enterprise operations, enhance security, and drive innovation.
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 75}>
                <ServiceCard {...service} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="section-container">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to deliver maximum value
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and challenges" },
              { step: "02", title: "Design", desc: "Architecting the optimal solution" },
              { step: "03", title: "Develop", desc: "Building with quality and precision" },
              { step: "04", title: "Deploy", desc: "Seamless delivery and ongoing support" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} animation="fade-up" delay={index * 100}>
                <div className="relative text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection animation="scale">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how our services can address your specific challenges
                and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/book-meeting">
                  <Button variant="hero" size="lg">
                    Book a Meeting
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
