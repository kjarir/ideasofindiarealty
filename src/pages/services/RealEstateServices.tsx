import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { MapPin } from "lucide-react";

const RealEstateServices = () => {
  const serviceData = {
    title: "Real Estate & Development Approvals",
    description: "Comprehensive real estate development approvals and project clearances. When others say 'not possible,' we say, 'consider it done — the right way.'",
    icon: MapPin,
    services: [
      {
        category: "Development Approvals",
        items: [
          "DP Remarks & Zone Certificate",
          "Building Plan Sanctioning",
          "TDR (Transfer of Development Rights) Support",
          "Premium FSI & Fungible FSI Approvals",
          "ULC Clearance"
        ]
      },
      {
        category: "Project Registration & NOCs",
        items: [
          "RERA Registration Support",
          "Environmental Clearance Coordination",
          "Airport / Defense NOC",
          "Fire NOC",
          "Lift License & NOC"
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