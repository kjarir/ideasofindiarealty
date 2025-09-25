import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building, 
  FileText, 
  Landmark, 
  Home, 
  MapPin, 
  Shield, 
  Factory,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesOverview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Mantralaya & Revenue Department",
      description: "State-level approvals, revenue documents, and governmental clearances",
      icon: Landmark,
      path: "/services/mantralaya",
      highlights: ["Revenue Documents", "State Approvals", "NOCs & Clearances"]
    },
    {
      title: "Business Licensing & Compliance",
      description: "Complete business registration, licensing, and ongoing compliance management",
      icon: FileText,
      path: "/services/business-licensing",
      highlights: ["Business Registration", "Trade Licenses", "Compliance Management"]
    },
    {
      title: "BMC/Municipal Corporation",
      description: "Municipal approvals, building permissions, and local body clearances",
      icon: Building,
      path: "/services/municipal",
      highlights: ["Building Permissions", "Municipal NOCs", "Local Approvals"]
    },
    {
      title: "MHADA & SRA Services",
      description: "Housing authority approvals, SRA clearances, and redevelopment services",
      icon: Home,
      path: "/services/mhada-sra",
      highlights: ["MHADA Approvals", "SRA Clearances", "Redevelopment"]
    },
    {
      title: "Real Estate & Development",
      description: "Comprehensive real estate approvals and development project clearances",
      icon: MapPin,
      path: "/services/real-estate",
      highlights: ["RERA Registration", "Development Approvals", "Project Clearances"]
    },
    {
      title: "Regulatory & Advisory",
      description: "Expert consultation and regulatory guidance for complex compliance requirements",
      icon: Shield,
      path: "/services/regulatory",
      highlights: ["Legal Consultation", "Regulatory Guidance", "Compliance Strategy"]
    },
    {
      title: "MIDC & SIDCO Services",
      description: "Industrial development approvals and SIDCO-related clearances",
      icon: Factory,
      path: "/services/midc-sidco",
      highlights: ["Industrial Approvals", "SIDCO Clearances", "Development Services"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            From government approvals to regulatory compliance, we handle every aspect 
            of your administrative and legal requirements with precision and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`hover-lift shadow-card border-0 transition-all duration-300 ${
                  hoveredCard === index ? "shadow-elegant scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 mb-4">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={service.path}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-8 shadow-card border max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every business is unique. Let's discuss your specific requirements 
              and create a tailored approach that ensures complete compliance and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/contact" className="flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;