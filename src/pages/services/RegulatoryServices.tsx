import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Shield } from "lucide-react";

const RegulatoryServices = () => {
  const serviceData = {
    title: "Regulatory & Advisory",
    description: "Expert consultation and regulatory guidance for complex compliance requirements across multiple industries and government departments.",
    icon: Shield,
    services: [
      {
        category: "Legal Consultation",
        items: [
          "Regulatory Compliance Advisory",
          "Legal Risk Assessment",
          "Policy Interpretation Services",
          "Regulatory Framework Analysis",
          "Compliance Gap Analysis",
          "Legal Documentation Review"
        ]
      },
      {
        category: "Regulatory Guidance",
        items: [
          "Government Policy Navigation",
          "Regulatory Change Management",
          "Compliance Strategy Development",
          "Regulatory Filing Assistance",
          "Government Liaison Services",
          "Policy Impact Assessment"
        ]
      },
      {
        category: "Compliance Strategy",
        items: [
          "Multi-Jurisdictional Compliance",
          "Regulatory Roadmap Development",
          "Compliance Monitoring Systems",
          "Risk Mitigation Strategies",
          "Regulatory Training Programs",
          "Compliance Audit Support"
        ]
      },
      {
        category: "Industry-Specific Advisory",
        items: [
          "Real Estate Regulatory Compliance",
          "Manufacturing Industry Guidelines",
          "Service Sector Regulations",
          "Import-Export Compliance",
          "Environmental Regulatory Advisory",
          "Labor Law Compliance"
        ]
      },
      {
        category: "Government Relations",
        items: [
          "Government Stakeholder Management",
          "Policy Advocacy Support",
          "Regulatory Representation",
          "Government Communication Strategy",
          "Public Affairs Management",
          "Regulatory Intelligence Services"
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

export default RegulatoryServices;