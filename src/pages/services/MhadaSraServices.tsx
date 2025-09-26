import ServiceTemplate from "./ServiceTemplate";
import { Home } from "lucide-react";

const MhadaSraServices = () => {
  const services = [
    {
      title: "MHADA Project Services",
      description: "Complete MHADA land allotment and project approval services",
      items: [
        "MHADA Land Allotment & Approvals",
        "MHADA NOC for Redevelopment",
        "Consent & Documentation Handling",
        "Coordination with MHADA Officers"
      ]
    },
    {
      title: "Slum Rehabilitation Authority (SRA)",
      description: "Comprehensive SRA project coordination and compliance services",
      items: [
        "Slum Survey Coordination",
        "Annexure-II Certification",
        "SRA Project Proposal Filing",
        "Tenant Consent & Verification",
        "Follow-ups with SRA Authority"
      ]
    }
  ];

  const benefits = [
    "Expert knowledge of MHADA procedures",
    "Specialized SRA project experience",
    "Complete redevelopment project support",
    "Professional society documentation",
    "Faster processing through proper channels",
    "Comprehensive compliance management"
  ];

  const process = [
    {
      step: 1,
      title: "Project Assessment",
      description: "Detailed assessment of housing project requirements and MHADA/SRA eligibility"
    },
    {
      step: 2,
      title: "Documentation & Survey",
      description: "Comprehensive documentation preparation and site survey completion"
    },
    {
      step: 3,
      title: "Application Processing",
      description: "Strategic submission to MHADA/SRA authorities with proper documentation"
    },
    {
      step: 4,
      title: "Approval Coordination",
      description: "Regular follow-up and coordination with housing authorities for approvals"
    },
    {
      step: 5,
      title: "Project Implementation",
      description: "Support during implementation phase with ongoing compliance management"
    }
  ];

  return (
    <ServiceTemplate
      title="MHADA & SRA Services"
      description="Expert MHADA and SRA services with deep knowledge and relentless follow-up. Approvals don't come by chance; they come through understanding the system and building trust with authorities."
      icon={Home}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default MhadaSraServices;