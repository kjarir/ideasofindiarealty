import ServiceTemplate from "./ServiceTemplate";
import { Building } from "lucide-react";

const MunicipalServices = () => {
  const services = [
    {
      title: "BMC Building & Property Approvals",
      description: "Complete BMC building approvals and property compliance services",
      items: [
        "BMC Building Proposal Approval",
        "IOD (Intimation of Disapproval) / CC (Commencement Certificate)",
        "OC (Occupation Certificate) & Completion Certificate",
        "Property Tax Mutation & Assessment"
      ]
    },
    {
      title: "BMC Licensing & Permits",
      description: "Essential BMC licenses and permits for business operations",
      items: [
        "Shops & Establishment License",
        "Health License / Food License",
        "Factory License",
        "Trade License Renewals & Modifications"
      ]
    },
    {
      title: "Property & Development",
      description: "BMC property development and zoning services",
      items: [
        "DP Remarks & Zone Certificates",
        "Property Demarcation & Subdivision",
        "Change of Land Use (CLU)",
        "Drainage / Sewerage NOCs"
      ]
    }
  ];

  const benefits = [
    "Direct liaison with municipal officials",
    "Expert knowledge of local bylaws",
    "Faster approval through proper channels",
    "Complete documentation compliance",
    "Regular status tracking and updates",
    "Professional representation at hearings"
  ];

  const process = [
    {
      step: 1,
      title: "Site Assessment",
      description: "Detailed site visit and assessment of municipal requirements and compliance needs"
    },
    {
      step: 2,
      title: "Documentation Preparation",
      description: "Comprehensive preparation of architectural plans and supporting documents"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Strategic submission to appropriate municipal departments with proper follow-up"
    },
    {
      step: 4,
      title: "Approval Processing",
      description: "Regular monitoring and coordination with municipal officials for timely approvals"
    },
    {
      step: 5,
      title: "Certificate Collection",
      description: "Final approval and certificate collection with complete documentation handover"
    }
  ];

  return (
    <ServiceTemplate
      title="BMC/Municipal Corporation Services"
      description="Navigate BMC/Municipal approvals with deep knowledge and clear process. Trust isn't something we claim — it's something we've earned by quietly delivering results, again and again."
      icon={Building}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default MunicipalServices;