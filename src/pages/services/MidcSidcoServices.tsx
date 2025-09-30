import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { Factory } from "lucide-react";
const midcImage = "/midc-sidco-services.jpg";

const MidcSidcoServices = () => {
  const serviceData = {
    title: "MIDC & SIDCO Services",
    description: "Industrial development approvals and SIDCO clearances with expert knowledge. Approvals don't come by chance; they come through deep understanding and relentless follow-up.",
    icon: Factory,
    image: midcImage,
    services: [
      {
        category: "MIDC & SIDCO Support",
        items: [
          "MIDC Plot Allotment Assistance",
          "MIDC Lease Renewal & Conversion",
          "MIDC File Submission & Services",
          "MIDC NOCs for Construction & Usage",
          "SIDCO Land / Plot Support",
          "SIDCO Registration / Transfer Help",
          "Industrial Approval Support through MIDC/SIDCO",
          "Government Scheme Assistance for Industrial Units"
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