import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Home } from "lucide-react";
import mhadaImage from "@/assets/mhada-sra-services.jpg";

const MhadaSraServices = () => {
  const serviceData = {
    title: "MHADA & SRA (Housing Authorities)",
    description: "So when others say 'not possible,' we say, 'consider it done — the right way.'",
    icon: Home,
    image: mhadaImage,
    services: [
      {
        category: "🏘️ MHADA Project Services",
        items: [
          "MHADA Land Allotment & Approvals",
          "MHADA NOC for Redevelopment",
          "Consent & Documentation Handling",
          "Coordination with MHADA Officers"
        ]
      },
      {
        category: "🏚️ Slum Rehabilitation Authority (SRA)",
        items: [
          "Slum Survey Coordination",
          "Annexure-II Certification",
          "SRA Project Proposal Filing",
          "Tenant Consent & Verification",
          "Follow-ups with SRA Authority"
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

export default MhadaSraServices;