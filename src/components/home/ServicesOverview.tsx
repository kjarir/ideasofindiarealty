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
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";
import DragCloseDrawer from "@/components/common/DragCloseDrawer";
import { BentoSeasonalCards, BentoSeasonalCardProps } from "@/components/common/BentoSeasonalCards";

const ServicesOverview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<BentoSeasonalCardProps | null>(null);

  const services: (BentoSeasonalCardProps & { 
    detailedDescription: string; 
    features: string[]; 
    processSteps: string[];
    timeline: string;
    documents: string[];
  })[] = [
    {
      title: "Mantralaya & Revenue Department",
      subtitle: "Government Services",
      description: "State-level approvals, revenue documents, and governmental clearances with expert guidance",
      imageSrc: "/mantralaya-services.jpg",
      detailedDescription: "Navigate the complex world of state-level government approvals with our specialized Mantralaya services. We handle everything from revenue document processing to high-level governmental clearances, ensuring your applications meet all regulatory requirements and are processed efficiently.",
      features: [
        "Revenue Document Processing",
        "State Government Clearances", 
        "Mantralaya Liaison Services",
        "Document Verification & Authentication",
        "Appeal & Review Processes"
      ],
      processSteps: [
        "Initial consultation and document review",
        "Application preparation and submission",
        "Follow-up with relevant departments",
        "Status tracking and updates",
        "Final approval and document collection"
      ],
      timeline: "15-45 days (varies by service type)",
      documents: [
        "Identity and Address Proof",
        "Property Documents (if applicable)",
        "Previous Correspondence",
        "Relevant Certificates",
        "Power of Attorney (if required)"
      ]
    },
    {
      title: "Business Licensing & Compliance",
      subtitle: "Business Solutions", 
      description: "Complete business registration, licensing, and ongoing compliance management",
      imageSrc: "/business-licensing.jpg",
      detailedDescription: "Streamline your business setup and compliance with our comprehensive licensing services. From initial registration to ongoing compliance management, we ensure your business operates within all legal frameworks while maximizing efficiency and minimizing regulatory risks.",
      features: [
        "Business Registration & Incorporation",
        "Trade License Applications",
        "GST Registration & Compliance",
        "Professional Tax Registration",
        "Annual Compliance Management"
      ],
      processSteps: [
        "Business structure consultation",
        "Documentation preparation",
        "License applications submission",
        "Compliance setup and training",
        "Ongoing support and renewals"
      ],
      timeline: "7-21 days for most licenses",
      documents: [
        "PAN Card & Aadhaar",
        "Address Proof (Business & Residential)",
        "Bank Account Details",
        "Partnership Deed/MOA (if applicable)",
        "NOC from Property Owner"
      ]
    },
    {
      title: "BMC/Municipal Corporation",
      subtitle: "Municipal Services",
      description: "Municipal approvals, building permissions, and local body clearances",
      imageSrc: "/municipal-services.jpg",
      detailedDescription: "Simplify your interactions with municipal corporations through our specialized services. We handle building permissions, trade licenses, property-related approvals, and all municipal compliance requirements with expertise and efficiency.",
      features: [
        "Building Plan Approvals",
        "Trade License Processing",
        "Property Tax Assessments",
        "NOC Applications",
        "Municipal Compliance Audits"
      ],
      processSteps: [
        "Site inspection and assessment",
        "Application preparation with drawings",
        "Municipal submission and liaison",
        "Approval tracking and follow-up",
        "Certificate collection and handover"
      ],
      timeline: "30-90 days (depends on complexity)",
      documents: [
        "Property Documents & Survey Records",
        "Architectural Drawings & Plans",
        "Structural Engineer Certificates",
        "Environmental Clearances",
        "Ownership Proofs"
      ]
    },
    {
      title: "MHADA & SRA Services",
      subtitle: "Housing Solutions",
      description: "Housing authority approvals, SRA clearances, and redevelopment services",
      imageSrc: "/mhada-sra-services.jpg",
      detailedDescription: "Navigate the complexities of housing authority regulations and slum rehabilitation projects with our specialized MHADA and SRA services. We provide end-to-end support for housing approvals, redevelopment projects, and compliance requirements.",
      features: [
        "MHADA Approvals & Clearances",
        "SRA Project Management",
        "Redevelopment Consultancy",
        "Housing Scheme Applications",
        "Compliance & Documentation"
      ],
      processSteps: [
        "Project feasibility assessment",
        "Documentation and application preparation",
        "Authority submissions and presentations",
        "Approval tracking and liaison",
        "Implementation support and compliance"
      ],
      timeline: "3-12 months (project dependent)",
      documents: [
        "Society Registration Documents",
        "Member Consent Letters",
        "Property Survey Records",
        "Development Proposals",
        "Financial Statements"
      ]
    },
    {
      title: "Real Estate & Development",
      subtitle: "Real Estate Services",
      description: "Comprehensive real estate approvals and development project clearances",
      imageSrc: "/real-estate-services.jpg",
      detailedDescription: "Accelerate your real estate projects with our comprehensive development services. From initial approvals to final clearances, we manage all regulatory aspects of real estate development, ensuring compliance and timely project completion.",
      features: [
        "RERA Registration & Compliance",
        "Development Permission Processing",
        "Environmental Clearances",
        "Occupancy Certificate Processing",
        "Project Marketing Approvals"
      ],
      processSteps: [
        "Project planning and regulatory mapping",
        "Multi-agency application coordination",
        "Clearance tracking and management",
        "Compliance monitoring throughout development",
        "Final approvals and handover documentation"
      ],
      timeline: "6-18 months (varies by project size)",
      documents: [
        "Land Title Documents",
        "Development Plans & Layouts",
        "Environmental Impact Assessments",
        "Financial Capability Certificates",
        "Technical Feasibility Reports"
      ]
    },
    {
      title: "Regulatory & Advisory",
      subtitle: "Expert Consultation",
      description: "Expert consultation and regulatory guidance for complex compliance requirements",
      imageSrc: "/regulatory-services.jpg",
      detailedDescription: "Access expert regulatory guidance and strategic advisory services for complex compliance challenges. Our experienced consultants provide tailored solutions, risk assessments, and ongoing support to ensure your business stays compliant and competitive.",
      features: [
        "Regulatory Risk Assessment",
        "Compliance Strategy Development",
        "Legal Documentation Review",
        "Policy Impact Analysis",
        "Ongoing Advisory Support"
      ],
      processSteps: [
        "Comprehensive business analysis",
        "Regulatory landscape mapping",
        "Risk assessment and strategy formulation",
        "Implementation planning and support",
        "Continuous monitoring and updates"
      ],
      timeline: "Ongoing relationship-based service",
      documents: [
        "Business Operations Overview",
        "Current Compliance Status",
        "Regulatory Correspondence",
        "Financial Statements",
        "Strategic Business Plans"
      ]
    },
    {
      title: "MIDC & SIDCO Services",
      subtitle: "Industrial Development",
      description: "Industrial development approvals and SIDCO-related clearances",
      imageSrc: "/midc-sidco-services.jpg",
      detailedDescription: "Facilitate your industrial development projects with our specialized MIDC and SIDCO services. We handle industrial plot allocations, development permissions, and all compliance requirements for industrial establishments in Maharashtra.",
      features: [
        "Industrial Plot Allocation",
        "MIDC Approvals & Clearances",
        "SIDCO Registration Services",
        "Industrial License Processing",
        "Compliance & Renewal Management"
      ],
      processSteps: [
        "Industrial project assessment",
        "Application preparation and submission",
        "Multi-department coordination",
        "Approval tracking and follow-up",
        "Setup support and ongoing compliance"
      ],
      timeline: "2-8 months (depends on project type)",
      documents: [
        "Project Proposal & Business Plan",
        "Financial Capability Certificates",
        "Technical Specifications",
        "Environmental Compliance Documents",
        "Partnership/Company Registration"
      ]
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setModalOpen(true);
  };

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
            <BentoSeasonalCards 
              cards={services} 
              onCardClick={handleServiceClick}
            />
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

      {/* Service Details Modal */}
      <DragCloseDrawer open={modalOpen} setOpen={setModalOpen}>
        {selectedService && (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center border-b border-gray-200 pb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {selectedService.title}
              </h2>
              <p className="text-lg text-primary font-medium">
                {selectedService.subtitle}
              </p>
            </div>

            {/* Service Summary */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Do</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedService.detailedDescription}
              </p>
            </div>

            {/* Key Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Key Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Services Included
                </h3>
                <ul className="space-y-2">
                  {selectedService.features?.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Overview */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  How It Works
                </h3>
                <ol className="space-y-2">
                  {selectedService.processSteps?.map((step, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {selectedService.timeline}
                </div>
                <div className="text-sm text-gray-600 font-medium">Expected Timeline</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {selectedService.documents?.length || 0}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Documents Required</div>
              </div>
            </div>

            {/* Essential Documents */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="w-5 h-5 text-primary mr-2" />
                Essential Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.documents?.slice(0, 6).map((doc, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700 bg-gray-50 rounded px-3 py-2">
                    <FileText className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
                {selectedService.documents && selectedService.documents.length > 6 && (
                  <div className="flex items-center text-sm text-primary font-medium bg-primary/10 rounded px-3 py-2">
                    <span>+{selectedService.documents.length - 6} more required</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Get Started?
              </h4>
              <p className="text-gray-700 mb-4">
                Get expert assistance with your {selectedService.title.toLowerCase()} needs. Free consultation available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="hover-lift">
                  <Link to="/contact" className="flex items-center">
                    Get Free Consultation
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
        )}
      </DragCloseDrawer>
    </section>
  );
};

export default ServicesOverview;