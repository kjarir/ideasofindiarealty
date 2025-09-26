import ServiceTemplate from "./ServiceTemplate";
import { Landmark } from "lucide-react";

const MantralayaServices = () => {
  const services = [
    {
      title: "Mantralaya Services & File Processing",
      description: "Complete file submission and processing at Mantralaya with secretarial coordination",
      items: [
        "File Submission & Processing at Mantralaya",
        "Services with IAS/IPS/Secretarial Officers",
        "Coordination with Urban Development, Housing, Revenue Departments",
        "Getting GOs (Government Orders) Passed",
        "Representations in CM Cell / Ministerial Offices",
        "Clearance from Town Planning Department",
        "File Follow-up & Speed-up at Secretarial Level",
        "Mantralaya Project Approval Consulting",
        "VIP Office Services for File Movement",
        "All Work from General Administration to Housing",
        "RTI Filing through Mantralaya Departments",
        "Resolving Stuck Files / Delay in Clearance",
        "Work Related to Special Permissions / Regularization"
      ]
    },
    {
      title: "Government Orders, Notifications & Compliance",
      description: "Drafting and processing of government orders with compliance support",
      items: [
        "Drafting & Issuance of Government Orders (GOs)",
        "Objection Filing / Hearing Coordination",
        "Final Notification Coordination",
        "Compliance Filing for Revenue GOs",
        "File Movement in Revenue Secretary's Office"
      ]
    },
    {
      title: "Land & Property Records",
      description: "Comprehensive land record management and property documentation",
      items: [
        "7/12 Extract (Satbara) Corrections & Updates",
        "Mutation Entries (Ferfar) / Property Transfer",
        "Name Change in Land Records",
        "Heirship Certificate Processing",
        "Certified Copies of Land Records",
        "Historical Land Record Retrieval",
        "Khatedar Certificate & Landholder Proofs",
        "Land Ceiling, Holding & Redistribution Matters"
      ]
    },
    {
      title: "Land Conversion, Acquisition & Allotment",
      description: "Complete land conversion and acquisition services with government coordination",
      items: [
        "Land Conversion (Agricultural to Non-Agricultural)",
        "Government Land Lease / Allotment",
        "Land Allotment under Government Schemes",
        "Acquisition Proposal Filing & Follow-up",
        "Sanctioning of Land for Public/Private Use",
        "Encroachment Clearance & Demarcation"
      ]
    },
    {
      title: "Zoning, Legal & Regularization",
      description: "Property zoning and legal regularization services with dispute resolution",
      items: [
        "Zone Certificate & Property Zoning Clearance",
        "Land Regularization Support",
        "Dispute Resolution (Tehsildar / SDO / Collector Office)"
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
      description="Navigate complex state-level approvals and revenue documentation with deep expertise. We don't believe in shortcuts — we earn results through knowledge, process, and relentless follow-up at Mantralaya."
      icon={Landmark}
      services={services.map(service => ({ category: service.title, items: service.items }))}
      benefits={benefits}
      process={process}
    />
  );
};

export default MantralayaServices;