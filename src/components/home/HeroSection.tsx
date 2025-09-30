import ImageCarousel from "@/components/home/ImageCarousel";

const HeroSection = () => {
  const heroItems = [
    {
      id: 1,
      title: "Mantralaya & Revenue Department",
      subtitle: "Government Services",
      description: "State-level approvals, revenue documents, and governmental clearances with expert guidance",
      imageUrl: "/src/assets/mantralaya-services.jpg",
      link: "/services/mantralaya"
    },
    {
      id: 2,
      title: "Business Licensing & Compliance",
      subtitle: "Business Solutions", 
      description: "Complete business registration, licensing, and ongoing compliance management",
      imageUrl: "/src/assets/business-licensing.jpg",
      link: "/services/business-licensing"
    },
    {
      id: 3,
      title: "BMC/Municipal Corporation",
      subtitle: "Municipal Services",
      description: "Municipal approvals, building permissions, and local body clearances",
      imageUrl: "/src/assets/municipal-services.jpg",
      link: "/services/municipal"
    },
    {
      id: 4,
      title: "MHADA & SRA Services",
      subtitle: "Housing Solutions",
      description: "Housing authority approvals, SRA clearances, and redevelopment services",
      imageUrl: "/src/assets/mhada-sra-services.jpg",
      link: "/services/mhada-sra"
    },
    {
      id: 5,
      title: "Real Estate & Development",
      subtitle: "Real Estate Services",
      description: "Comprehensive real estate approvals and development project clearances",
      imageUrl: "/src/assets/real-estate-services.jpg",
      link: "/services/real-estate"
    }
  ];

  return (
    <ImageCarousel items={heroItems} />
  );
};

export default HeroSection;