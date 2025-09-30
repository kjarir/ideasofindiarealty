import ImageGridHero, { ImageGridItem } from "@/components/common/ImageGridHero";

const HeroSection = () => {
  const heroItems: ImageGridItem[] = [
    {
      id: 1,
      title: "Futuristic Tunnel",
      subtitle: "Abstract Art",
      imageUrl: "/src/assets/mantralaya-services.jpg",
      link: "/services/mantralaya",
      size: 'large',
      position: {
        top: '20%',
        left: '15%'
      }
    },
    {
      id: 2,
      title: "Mountain Landscape",
      subtitle: "Nature Photography",
      imageUrl: "/src/assets/business-licensing.jpg",
      link: "/services/business-licensing",
      size: 'medium',
      position: {
        top: '25%',
        left: '65%'
      }
    },
    {
      id: 3,
      title: "Purple Flowers",
      subtitle: "Botanical Art",
      imageUrl: "/src/assets/municipal-services.jpg",
      link: "/services/municipal",
      size: 'medium',
      position: {
        top: '60%',
        left: '18%'
      }
    },
    {
      id: 4,
      title: "Abstract Design",
      subtitle: "Digital Art",
      imageUrl: "/src/assets/mhada-sra-services.jpg",
      link: "/services/mhada-sra",
      size: 'large',
      position: {
        top: '45%',
        left: '45%'
      }
    },
    {
      id: 5,
      title: "Rainy Window",
      subtitle: "Atmospheric",
      imageUrl: "/src/assets/real-estate-services.jpg",
      link: "/services/real-estate",
      size: 'small',
      position: {
        top: '70%',
        left: '45%'
      }
    },
    {
      id: 6,
      title: "Dried Plants",
      subtitle: "Minimalist",
      imageUrl: "/src/assets/midc-sidco-services.jpg",
      link: "/services/midc-sidco",
      size: 'small',
      position: {
        top: '70%',
        left: '75%'
      }
    }
  ];

  return (
    <ImageGridHero items={heroItems} />
  );
};

export default HeroSection;