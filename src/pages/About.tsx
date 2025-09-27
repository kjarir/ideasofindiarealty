import Layout from "@/components/layout/Layout";
import { CheckCircle, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "No Shortcuts",
      description: "We believe in doing things right the first time, with meticulous attention to detail and complete regulatory compliance."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We provide personalized service and dedicated support throughout every process."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "With a proven track record of successful applications and satisfied clients, we deliver measurable outcomes."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our team of experts brings years of experience and deep knowledge of regulatory frameworks."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              About Ideas of India Realty
            </h1>
            <p className="text-lg lg:text-xl text-white/90 animate-slide-up">
              Your trusted partner for comprehensive government services and regulatory compliance
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Philosophy</h2>
              <div className="bg-primary-light rounded-lg p-8 shadow-card">
                <blockquote className="text-xl lg:text-2xl font-medium text-primary italic mb-4">
                  "We don't believe in shortcuts..."
                </blockquote>
                <p className="text-lg text-muted-foreground">
                  At Ideas of India Realty, we understand that government processes and regulatory 
                  compliance require precision, patience, and expertise. We don't cut corners or 
                  promise unrealistic timelines. Instead, we focus on delivering quality results 
                  that stand the test of time and regulatory scrutiny.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  To simplify complex government processes and regulatory requirements for our clients, 
                  ensuring 100% compliance while saving time and reducing stress. We bridge the gap 
                  between businesses and government agencies with professional expertise and unwavering integrity.
                </p>
                <p className="text-muted-foreground">
                  Every document we file, every application we submit, and every consultation we provide 
                  is backed by thorough research, careful preparation, and complete transparency.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground mb-4">
                  We are committed to providing honest, transparent, and professional services. 
                  Our clients trust us with their most important business processes, and we honor 
                  that trust with dedicated service and measurable results.
                </p>
                <p className="text-muted-foreground">
                  From the initial consultation to the final approval, we maintain open communication, 
                  provide regular updates, and ensure you understand every step of the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction, every decision, and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover-lift shadow-card border-0">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-lg font-semibold mb-2">Successful Applications</div>
                <div className="text-muted-foreground">Across all service categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-lg font-semibold mb-2">Years of Experience</div>
                <div className="text-muted-foreground">In government and regulatory services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-lg font-semibold mb-2">Compliance Rate</div>
                <div className="text-muted-foreground">Zero rejected applications due to errors</div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              When you work with Ideas of India Realty, you're not just hiring a service provider – 
              you're partnering with a team that genuinely cares about your success and will go the 
              extra mile to ensure your complete satisfaction.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;