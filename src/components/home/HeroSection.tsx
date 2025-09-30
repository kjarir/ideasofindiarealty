import HeroThreeDCarousel, { HeroThreeDCarouselItem } from "@/components/common/HeroThreeDCarousel";

const HeroSection = () => {
  const heroItems: HeroThreeDCarouselItem[] = [
    {
      id: 1,
      title: "Mantralaya & Revenue Department",
      brand: "Government Services",
      description: "State-level approvals, revenue documents, and governmental clearances with expert guidance",
      tags: ["Revenue Documents", "State Approvals", "NOCs & Clearances"],
      imageUrl: "/src/assets/mantralaya-services.jpg",
      link: "/services/mantralaya"
    },
    {
      id: 2,
      title: "Business Licensing & Compliance",
      brand: "Business Solutions",
      description: "Complete business registration, licensing, and ongoing compliance management",
      tags: ["Business Registration", "Trade Licenses", "Compliance Management"],
      imageUrl: "/src/assets/business-licensing.jpg",
      link: "/services/business-licensing"
    },
    {
      id: 3,
      title: "BMC/Municipal Corporation",
      brand: "Municipal Services",
      description: "Municipal approvals, building permissions, and local body clearances",
      tags: ["Building Permissions", "Municipal NOCs", "Local Approvals"],
      imageUrl: "/src/assets/municipal-services.jpg",
      link: "/services/municipal"
    },
    {
      id: 4,
      title: "MHADA & SRA Services",
      brand: "Housing Solutions",
      description: "Housing authority approvals, SRA clearances, and redevelopment services",
      tags: ["MHADA Approvals", "SRA Clearances", "Redevelopment"],
      imageUrl: "/src/assets/mhada-sra-services.jpg",
      link: "/services/mhada-sra"
    },
    {
      id: 5,
      title: "Real Estate & Development",
      brand: "Real Estate Services",
      description: "Comprehensive real estate approvals and development project clearances",
      tags: ["RERA Registration", "Development Approvals", "Project Clearances"],
      imageUrl: "/src/assets/real-estate-services.jpg",
      link: "/services/real-estate"
    }
  ];

  return (
    <HeroThreeDCarousel 
      items={heroItems}
      autoRotate={true}
      rotateInterval={5000}
      cardHeight={600}
      title="Ideas of India Realty"
      subtitle="Professional Services"
      tagline="Your trusted partner for comprehensive business solutions and regulatory compliance."
    />
  );
};

export default HeroSection;