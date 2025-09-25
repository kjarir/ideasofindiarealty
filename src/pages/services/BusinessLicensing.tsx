import ServiceTemplate from "./ServiceTemplate";
import { FileText } from "lucide-react";

const BusinessLicensing = () => {
  const services = [
    {
      title: "Business Registration",
      description: "Complete business entity registration and incorporation services",
      items: [
        "Private Limited Company registration",
        "LLP (Limited Liability Partnership) formation",
        "Partnership firm registration",
        "Sole proprietorship establishment",
        "Section 8 company incorporation",
        "Producer company registration"
      ]
    },
    {
      title: "Trade Licenses & Permits",
      description: "Essential trade licenses and permits for business operations",
      items: [
        "Shop and establishment licenses",
        "Trade licenses from local authorities",
        "Manufacturing licenses",
        "Food business operator licenses",
        "Professional tax registration",
        "Labor law compliance certificates"
      ]
    },
    {
      title: "Tax Registrations",
      description: "Comprehensive tax registration and compliance services",
      items: [
        "GST registration and returns",
        "Income tax registrations",
        "TDS return filing",
        "Professional tax registration",
        "Export-import code (IEC)",
        "MSME registration and benefits"
      ]
    },
    {
      title: "Ongoing Compliance",
      description: "Continuous compliance management and regulatory updates",
      items: [
        "Annual return filing",
        "Board resolution drafting",
        "Compliance calendar management",
        "Regulatory change notifications",
        "Audit and assessment support",
        "Legal notice responses"
      ]
    }
  ];

  const benefits = [
    "Complete business setup in minimal time",
    "Expert guidance on business structure",
    "Comprehensive compliance management",
    "Regular updates on regulatory changes",
    "Professional documentation services",
    "Ongoing support and consultation"
  ];

  const process = [
    {
      step: 1,
      title: "Business Structure Consultation",
      description: "Detailed consultation to determine the most suitable business structure for your needs"
    },
    {
      step: 2,
      title: "Documentation and Filing",
      description: "Preparation and submission of all required documents with government authorities"
    },
    {
      step: 3,
      title: "Registration Processing",
      description: "Monitoring application status and coordinating with various departments"
    },
    {
      step: 4,
      title: "License Acquisition",
      description: "Obtaining all necessary licenses and permits for business operations"
    },
    {
      step: 5,
      title: "Compliance Setup",
      description: "Establishing ongoing compliance systems and providing operational guidance"
    }
  ];

  return (
    <ServiceTemplate
      title="Business Licensing & Compliance"
      description="Comprehensive business registration, licensing, and ongoing compliance management. We handle all aspects of your business setup and regulatory requirements."
      icon={<FileText className="w-10 h-10 text-white" />}
      services={services}
      benefits={benefits}
      process={process}
    />
  );
};

export default BusinessLicensing;