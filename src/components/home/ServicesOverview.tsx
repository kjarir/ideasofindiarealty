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
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";
import { BentoSeasonalCards, BentoSeasonalCardProps } from "@/components/common/BentoSeasonalCards";

const ServicesOverview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: BentoSeasonalCardProps[] = [
    {
      title: "Mantralaya & Revenue Department",
      subtitle: "Government Services",
      description: "State-level approvals, revenue documents, and governmental clearances with expert guidance",
      imageSrc: "/mantralaya-services.jpg"
    },
    {
      title: "Business Licensing & Compliance",
      subtitle: "Business Solutions",
      description: "Complete business registration, licensing, and ongoing compliance management",
      imageSrc: "/business-licensing.jpg"
    },
    {
      title: "BMC/Municipal Corporation",
      subtitle: "Municipal Services",
      description: "Municipal approvals, building permissions, and local body clearances",
      imageSrc: "/municipal-services.jpg"
    },
    {
      title: "MHADA & SRA Services",
      subtitle: "Housing Solutions",
      description: "Housing authority approvals, SRA clearances, and redevelopment services",
      imageSrc: "/mhada-sra-services.jpg"
    },
    {
      title: "Real Estate & Development",
      subtitle: "Real Estate Services",
      description: "Comprehensive real estate approvals and development project clearances",
      imageSrc: "/real-estate-services.jpg"
    },
    {
      title: "Regulatory & Advisory",
      subtitle: "Expert Consultation",
      description: "Expert consultation and regulatory guidance for complex compliance requirements",
      imageSrc: "/regulatory-services.jpg"
    },
    {
      title: "MIDC & SIDCO Services",
      subtitle: "Industrial Development",
      description: "Industrial development approvals and SIDCO-related clearances",
      imageSrc: "/midc-sidco-services.jpg"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <AnimatedText as="span">Our Comprehensive Services</AnimatedText>
              </h2>
              <m.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              >
                From government approvals to regulatory compliance, we handle every aspect 
                of your administrative and legal requirements with precision and care.
              </m.p>
            </m.div>
          </LazyMotion>
        </div>

        {/* Services Bento Seasonal Cards */}
        <LazyMotion features={domAnimation} strict>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <BentoSeasonalCards cards={services} />
          </m.div>
        </LazyMotion>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="bg-card rounded-lg p-8 shadow-card border max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <AnimatedText as="span">Need a Custom Solution?</AnimatedText>
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
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;