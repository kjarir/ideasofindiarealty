import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Landmark } from "lucide-react";
import mantralayaImage from "@/assets/mantralaya-services.jpg";

const MantralayaServices = () => {
  const serviceData = {
    title: "Core Mantralaya & Revenue Department Services",
    description: "We don't believe in shortcuts or empty promises. Trust isn't something we claim — it's something we've earned by quietly delivering results, again and again.",
    icon: Landmark,
    image: mantralayaImage,
    services: [
      {
        category: "🏛️ Mantralaya Services & File Processing",
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
        category: "🗂️ Government Orders, Notifications & Compliance",
        items: [
          "Drafting & Issuance of Government Orders (GOs)",
          "Objection Filing / Hearing Coordination",
          "Final Notification Coordination",
          "Compliance Filing for Revenue GOs",
          "File Movement in Revenue Secretary's Office"
        ]
      },
      {
        category: "📋 Land & Property Records",
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
        category: "🧾 Land Conversion, Acquisition & Allotment",
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
        category: "📑 Zoning, Legal & Regularization",
        items: [
          "Zone Certificate & Property Zoning Clearance",
          "Land Regularization Support",
          "Dispute Resolution (Tehsildar / SDO / Collector Office)"
        ]
      }
    ]
  };

  return (
    <Layout>
      <ServiceTemplate {...serviceData} />
    </Layout>
  );
};

export default MantralayaServices;