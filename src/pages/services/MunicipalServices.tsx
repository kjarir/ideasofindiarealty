import ServiceTemplate from "./ServiceTemplate";
import { Building } from "lucide-react";

const MunicipalServices = () => {
  const services = [
    {
      title: "Building Permissions & NOCs",
      description: "Complete building approval and clearance services from municipal corporations",
      items: [
        "Building plan approvals",
        "Construction permits and licenses",
        "Occupancy certificates",
        "Building completion certificates",
        "Structural safety certificates",
        "Fire safety NOCs"
      ]
    },
    {
      title: "Municipal Licenses",
      description: "Various licenses and permits required from local municipal authorities",
      items: [
        "Trade licenses for commercial establishments",
        "Hawking and vending licenses",
        "Advertising and signage permits",
        "Event and celebration permits",
        "Parking space allotments",
        "Public space usage permits"
      ]
    },
    {
      title: "Property & Development Services",
      description: "Municipal services related to property development and approvals",
      items: [
        "Property tax assessments and appeals",
        "Development permission certificates",
        "Layout plan approvals",
        "Road cutting permissions",
        "Drainage connection approvals",
        "Water and sewerage connections"
      ]
    },
    {
      title: "Compliance & Clearances",
      description: "Ongoing compliance and clearance services with municipal authorities",
      items: [
        "Health department clearances",
        "Environmental compliance certificates",
        "Waste management approvals",
        "Public health clearances",
        "Pollution control clearances",
        "Municipal tax compliance"
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
      description="Navigate municipal approvals, building permissions, and local body clearances with our comprehensive municipal services expertise."
      icon={Building}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default MunicipalServices;