import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PremiumHero from "@/components/common/PremiumHero";
import InteractiveCard from "@/components/common/InteractiveCard";
import ScrollProgress from "@/components/common/ScrollProgress";
import FloatingCTA from "@/components/common/FloatingCTA";
import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <ScrollProgress />
      <FloatingCTA />
      
      {/* Premium Hero Section */}
      <PremiumHero
        title="Contact Us"
        subtitle="Ready to get started? Let's discuss your requirements and create a solution that works for you."
        backgroundImage="/api/placeholder/1920/1080"
        overlay="from-slate-900/80 via-slate-800/60 to-transparent"
      />

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <LazyMotion features={domAnimation} strict>
              <m.div
                ref={formRef}
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent matters, please call us directly.
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        className="mt-1 transition-all duration-300 focus:scale-[1.02]"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </m.div>
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        className="mt-1 transition-all duration-300 focus:scale-[1.02]"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </m.div>
                  </div>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="mt-1 transition-all duration-300 focus:scale-[1.02]"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </m.div>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="mt-1 transition-all duration-300 focus:scale-[1.02]"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </m.div>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Label htmlFor="service">Service Required</Label>
                    <Input 
                      id="service" 
                      placeholder="e.g., Business License, MHADA Approval, etc." 
                      className="mt-1 transition-all duration-300 focus:scale-[1.02]"
                      value={formData.service}
                      onChange={handleInputChange}
                    />
                  </m.div>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your requirements in detail..."
                      rows={5}
                      className="mt-1 transition-all duration-300 focus:scale-[1.02]"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </m.div>

                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </m.div>
                </form>
              </m.div>
            </LazyMotion>

            {/* Contact Information */}
            <LazyMotion features={domAnimation} strict>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you navigate complex government processes with ease and confidence.
                </p>

                <div className="space-y-6 mb-8">
                  <InteractiveCard
                    title="Phone"
                    icon={<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>}
                  >
                    <p className="text-muted-foreground">+91 12345 67890</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 9:00 AM - 6:00 PM</p>
                  </InteractiveCard>

                  <InteractiveCard
                    title="Email"
                    icon={<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>}
                  >
                    <p className="text-muted-foreground">info@ideasofindiaReality.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </InteractiveCard>

                  <InteractiveCard
                    title="Office"
                    icon={<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>}
                  >
                    <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                    <p className="text-sm text-muted-foreground">Visit by appointment only</p>
                  </InteractiveCard>

                  <InteractiveCard
                    title="Business Hours"
                    icon={<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>}
                  >
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</p>
                  </InteractiveCard>
                </div>

                {/* Emergency Contact */}
                <InteractiveCard
                  title="Urgent Assistance"
                  description="For time-sensitive matters requiring immediate attention"
                  className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20"
                >
                  <p className="font-semibold text-primary mb-2">Emergency Hotline</p>
                  <p className="text-lg font-bold text-primary">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available 24/7 for urgent government filing deadlines
                  </p>
                </InteractiveCard>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <InteractiveCard
              title="How long does the approval process take?"
              className="text-left"
            >
              <p className="text-muted-foreground">
                Timeline varies by service type and government department. We provide realistic 
                timelines during consultation and keep you updated throughout the process.
              </p>
            </InteractiveCard>

            <InteractiveCard
              title="Do you guarantee approval?"
              className="text-left"
            >
              <p className="text-muted-foreground">
                While we cannot guarantee government approvals, we ensure 100% compliance with 
                all requirements, significantly increasing your chances of success.
              </p>
            </InteractiveCard>

            <InteractiveCard
              title="What documents do I need to provide?"
              className="text-left"
            >
              <p className="text-muted-foreground">
                Document requirements vary by service. We provide a detailed checklist during 
                consultation and guide you through the preparation process.
              </p>
            </InteractiveCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;