import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl text-white/90 animate-slide-up">
              Ready to get started? Let's discuss your requirements and create a solution that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name" 
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Required</Label>
                  <Input 
                    id="service" 
                    placeholder="e.g., Business License, MHADA Approval, etc." 
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your requirements in detail..."
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button size="lg" className="w-full hover-lift">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                We're here to help you navigate complex government processes with ease and confidence.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="shadow-card border-0 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 12345 67890</p>
                        <p className="text-sm text-muted-foreground">Mon-Sat, 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@ideasofindiaReality.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office</h3>
                        <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                        <p className="text-sm text-muted-foreground">Visit by appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Saturday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Emergency Contact */}
              <Card className="bg-primary-light border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Urgent Assistance</CardTitle>
                  <CardDescription>
                    For time-sensitive matters requiring immediate attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">Emergency Hotline</p>
                  <p className="text-lg font-bold text-primary">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available 24/7 for urgent government filing deadlines
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 text-left">
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How long does the approval process take?</h3>
                  <p className="text-muted-foreground">
                    Timeline varies by service type and government department. We provide realistic 
                    timelines during consultation and keep you updated throughout the process.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you guarantee approval?</h3>
                  <p className="text-muted-foreground">
                    While we cannot guarantee government approvals, we ensure 100% compliance with 
                    all requirements, significantly increasing your chances of success.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What documents do I need to provide?</h3>
                  <p className="text-muted-foreground">
                    Document requirements vary by service. We provide a detailed checklist during 
                    consultation and guide you through the preparation process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;