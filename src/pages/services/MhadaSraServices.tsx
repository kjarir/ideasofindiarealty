import ServiceTemplate from "./ServiceTemplate";
import { Home } from "lucide-react";

const MhadaSraServices = () => {
  const services = [
    {
      title: "MHADA Approvals & Services",
      description: "Complete MHADA-related approvals and housing authority services",
      items: [
        "MHADA layout approvals",
        "Housing society registrations",
        "MHADA loan applications",
        "Affordable housing scheme applications",
        "MHADA property transfers",
        "Housing subsidy claim processing"
      ]
    },
    {
      title: "SRA (Slum Rehabilitation) Services",
      description: "Comprehensive SRA project approvals and rehabilitation services",
      items: [
        "SRA project proposals and approvals",
        "Slum survey and documentation",
        "Rehabilitation scheme applications",
        "SRA building plan approvals",
        "Beneficiary enrollment and verification",
        "Consent collection and documentation"
      ]
    },
    {
      title: "Redevelopment Services",
      description: "Complete redevelopment project management and approvals",
      items: [
        "Redevelopment project planning",
        "Society resolution documentation",
        "Developer agreement facilitation",
        "RERA registration for redevelopment",
        "Municipal approvals for redevelopment",
        "Environmental clearances"
      ]
    },
    {
      title: "Housing Compliance & Documentation",
      description: "Ongoing compliance and documentation services for housing projects",
      items: [
        "Society bylaw amendments",
        "Occupancy certificate processing",
        "Housing society audit compliance",
        "Property title verifications",
        "Housing finance documentation",
        "Legal compliance for housing projects"
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
      description="Expert assistance with MHADA approvals, SRA clearances, and comprehensive redevelopment services for housing projects."
      icon={Home}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default MhadaSraServices;