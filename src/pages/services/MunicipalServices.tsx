import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Building } from "lucide-react";
import municipalImage from "@/assets/municipal-services.jpg";

const MunicipalServices = () => {
  const serviceData = {
    title: "BMC / Municipal Corporation Services",
    description: "While others chase volume, we focus on quality, building long-term trust with clients and earning respect from departments.",
    icon: Building,
    image: municipalImage,
    services: [
      {
        category: "🏗️ BMC Building & Property Approvals",
        items: [
          "BMC Building Proposal Approval",
          "IOD (Intimation of Disapproval) / CC (Commencement Certificate)",
          "OC (Occupation Certificate) & Completion Certificate",
          "Property Tax Mutation & Assessment"
        ]
      },
      {
        category: "🧾 BMC Licensing & Permits",
        items: [
          "Shops & Establishment License",
          "Health License / Food License",
          "Factory License",
          "Trade License Renewals & Modifications"
        ]
      },
      {
        category: "🧱 Property & Development",
        items: [
          "DP Remarks & Zone Certificates",
          "Property Demarcation & Subdivision",
          "Change of Land Use (CLU)",
          "Drainage / Sewerage NOCs"
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

export default MunicipalServices;