import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { MapPin } from "lucide-react";

const RealEstateServices = () => {
  const serviceData = {
    title: "Real Estate & Development",
    description: "Comprehensive real estate approvals and development project clearances for seamless property transactions and development projects.",
    icon: MapPin,
    services: [
      {
        category: "RERA Registration & Compliance",
        items: [
          "RERA Project Registration",
          "RERA Agent Registration", 
          "RERA Compliance Management",
          "RERA Renewal Applications",
          "RERA Form Submissions",
          "Legal Documentation Support"
        ]
      },
      {
        category: "Development Approvals",
        items: [
          "Development Permission Applications",
          "Layout Approval Processes",
          "Construction Clearances",
          "Occupancy Certificate Processing",
          "Building Plan Approvals",
          "Structural Stability Certificates"
        ]
      },
      {
        category: "Project Clearances",
        items: [
          "Environmental Clearance Coordination",
          "Fire NOC Applications",
          "Water Connection Approvals",
          "Electricity Connection Clearances",
          "Sewage Treatment Approvals",
          "Parking Permission Documentation"
        ]
      },
      {
        category: "Real Estate Documentation",
        items: [
          "Title Verification Services",
          "Property Registration Support",
          "Sale Deed Preparation",
          "Property Tax Assessments",
          "Mutation Applications",
          "Property Valuation Coordination"
        ]
      },
      {
        category: "Investment & Advisory",
        items: [
          "Real Estate Investment Guidance",
          "Market Analysis Reports",
          "Due Diligence Services",
          "Legal Risk Assessment",
          "Regulatory Compliance Advisory",
          "Property Portfolio Management"
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

export default RealEstateServices;