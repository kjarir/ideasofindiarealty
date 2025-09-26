import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Shield } from "lucide-react";
import regulatoryImage from "@/assets/regulatory-services.jpg";

const RegulatoryServices = () => {
  const serviceData = {
    title: "Other Regulatory & Advisory Services",
    description: "Expert legal consultation and regulatory guidance. Trust isn't something we claim — it's something we've earned through deep knowledge and clear processes.",
    icon: Shield,
    image: regulatoryImage,
    services: [
      {
        category: "Legal & Compliance",
        items: [
          "Affidavits & Notarization Support",
          "Drafting of Agreements & Deeds",
          "Title Search & Due Diligence",
          "Revenue Litigation Support"
        ]
      },
      {
        category: "Consultancy & Project Advisory",
        items: [
          "End-to-End Project Consulting",
          "Feasibility Reports & Project Reports",
          "Representation with Govt Bodies",
          "File Monitoring & Fast-Tracking"
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