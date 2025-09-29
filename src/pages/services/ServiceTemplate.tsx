import React, { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceTemplateProps {
  title: string;
  description: string;
  image?: string;
  services: Array<{
    category: string;
    items: string[];
  }>;
  benefits?: string[];
  process?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
}

const ServiceTemplate = ({ title, description, image, services, benefits, process }: ServiceTemplateProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 text-white overflow-hidden">
        {/* Background Image */}
        {image && (
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
          </div>
        )}
        {!image && <div className="absolute inset-0 bg-hero-gradient"></div>}
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 animate-slide-up max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Services</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card border-0 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose Our Services</h2>
            
            {benefits && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center shadow-card border-0 hover-lift">
                    <CardContent className="p-6">
                      <p className="font-medium">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized workflows for quickest possible turnaround times
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold mb-2">100% Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Full adherence to all regulatory requirements and standards
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated professionals guiding you through every step
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {process && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Process</h2>
              
              <div className="space-y-6">
                {process.map((step, index) => (
                  <Card key={index} className="shadow-card border-0 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your specific requirements and create a customized solution 
              that ensures complete compliance and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/contact" className="flex items-center">
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceTemplate;