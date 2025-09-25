import ServiceTemplate from "./ServiceTemplate";
import { Landmark } from "lucide-react";

const MantralayaServices = () => {
  const services = [
    {
      title: "Revenue Documentation",
      description: "Complete revenue-related document processing and certification",
      items: [
        "Property cards and revenue records",
        "Survey settlement records",
        "Mutation entries and corrections",
        "Revenue court case documents",
        "Village revenue records",
        "Tehsildar office documentation"
      ]
    },
    {
      title: "State Government Approvals",
      description: "High-level state government clearances and permissions",
      items: [
        "Secretariat level approvals",
        "Chief Minister's office clearances",
        "Cabinet committee permissions",
        "Inter-departmental approvals",
        "Policy-level clearances",
        "State board permissions"
      ]
    },
    {
      title: "NOCs and Clearances",
      description: "No Objection Certificates from various state departments",
      items: [
        "Environmental clearances",
        "Forest department NOCs",
        "Water resources clearances",
        "Police department NOCs",
        "Fire safety clearances",
        "Archaeological department approvals"
      ]
    },
    {
      title: "Land and Revenue Services",
      description: "Comprehensive land and revenue-related services",
      items: [
        "Land acquisition procedures",
        "Compensation claim processing",
        "Revenue recovery matters",
        "Land use change applications",
        "Revenue survey corrections",
        "Boundary dispute resolutions"
      ]
    }
  ];

  const benefits = [
    "Direct access to Mantralaya officials",
    "Expert knowledge of state procedures",
    "Faster processing through proper channels",
    "Complete documentation compliance",
    "Regular status updates and tracking",
    "Professional representation at hearings"
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Detailed discussion of your requirements and assessment of documentation needs"
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Comprehensive preparation of all required documents with proper attestations"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Strategic submission through appropriate channels with follow-up protocols"
    },
    {
      step: 4,
      title: "Processing and Follow-up",
      description: "Regular monitoring and liaison with concerned departments for timely approvals"
    },
    {
      step: 5,
      title: "Completion and Delivery",
      description: "Final approval collection and delivery with complete documentation"
    }
  ];

  return (
    <ServiceTemplate
      title="Mantralaya & Revenue Department Services"
      description="Navigate complex state-level approvals and revenue documentation with our expert assistance. We ensure compliance with all Mantralaya procedures and revenue department requirements."
      icon={Landmark}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default MantralayaServices;