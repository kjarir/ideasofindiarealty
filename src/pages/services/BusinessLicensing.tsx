import ServiceTemplate from "./ServiceTemplate";
import { FileText } from "lucide-react";

const BusinessLicensing = () => {
  const services = [
    {
      title: "Business & Trade Licenses",
      description: "Complete business licensing and establishment permits",
      items: [
        "Shop & Establishment License",
        "Trade License / Eating House License",
        "Health Trade License",
        "Factory License",
        "Food & Drug License (FDA)",
        "FSSAI License"
      ]
    },
    {
      title: "Business Registrations",
      description: "Comprehensive business registration and recognition services",
      items: [
        "MSME / Udyam Registration",
        "Startup India / DPIIT Recognition",
        "Professional Tax (PTEC / PTRC) Registration",
        "Labour Welfare Fund Compliance"
      ]
    },
    {
      title: "Company & GST Setup",
      description: "Complete company formation and tax compliance setup",
      items: [
        "Company / LLP / Partnership Registration",
        "GST Registration & Filing Support",
        "Import Export Code (IEC) Registration",
        "Barcode / BIS / ISI Licensing"
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
      description="Comprehensive business registration, licensing, and compliance management. While others chase volume, we focus on quality — building long-term trust with clients and earning respect from departments."
      icon={FileText}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default BusinessLicensing;