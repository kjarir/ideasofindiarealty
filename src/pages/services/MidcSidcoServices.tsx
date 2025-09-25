import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Factory } from "lucide-react";

const MidcSidcoServices = () => {
  const serviceData = {
    title: "MIDC & SIDCO Services",
    description: "Industrial development approvals and SIDCO-related clearances for manufacturing units, industrial parks, and development projects.",
    icon: Factory,
    services: [
      {
        category: "MIDC Industrial Approvals",
        items: [
          "MIDC Plot Allotment Applications",
          "Industrial License Processing",
          "Manufacturing Unit Approvals",
          "Industrial Park Development",
          "MIDC NOC Applications",
          "Infrastructure Development Clearances"
        ]
      },
      {
        category: "SIDCO Clearances",
        items: [
          "SIDCO Project Approvals",
          "Small Scale Industry Registration",
          "Industrial Estate Applications",
          "SIDCO Land Allotment",
          "Technology Transfer Approvals",
          "Export Promotion Clearances"
        ]
      },
      {
        category: "Development Services",
        items: [
          "Industrial Infrastructure Planning",
          "Utility Connection Facilitation",
          "Road & Transport Clearances",
          "Power Connection Approvals",
          "Water Supply Arrangements",
          "Waste Management Clearances"
        ]
      },
      {
        category: "Manufacturing Compliance",
        items: [
          "Factory License Applications",
          "Manufacturing Standards Compliance",
          "Quality Control Certifications",
          "Safety Compliance Management",
          "Environmental Clearance Coordination",
          "Labor Compliance Documentation"
        ]
      },
      {
        category: "Industrial Investment Support",
        items: [
          "Investment Incentive Applications",
          "Subsidy Claim Processing",
          "Industrial Promotion Scheme Benefits",
          "Tax Exemption Applications",
          "Financial Assistance Coordination",
          "Export Promotion Support"
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

export default MidcSidcoServices;