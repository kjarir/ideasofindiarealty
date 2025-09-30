import { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";

// Import all service images
const mantralayaImg = "/mantralaya-services.jpg";
const businessImg = "/business-licensing.jpg";
const municipalImg = "/municipal-services.jpg";
const mhadaImg = "/mhada-sra-services.jpg";
const realEstateImg = "/real-estate-services.jpg";
const regulatoryImg = "/regulatory-services.jpg";
const midcImg = "/midc-sidco-services.jpg";

const ImageCarousel = () => {
  const [api, setApi] = useState<EmblaCarouselType>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselData = [
    {
      image: mantralayaImg,
      title: "Mantralaya & Revenue Services",
      description: "State-level approvals, revenue documents, and governmental clearances with expert handling",
      overlay: "from-slate-900/80 via-slate-900/60 to-transparent"
    },
    {
      image: businessImg,
      title: "Business Licensing & Compliance",
      description: "Complete business registration, licensing, and ongoing compliance management solutions",
      overlay: "from-blue-900/80 via-blue-900/60 to-transparent"
    },
    {
      image: municipalImg,
      title: "Municipal Corporation Services",
      description: "BMC approvals, building permissions, and local body clearances made simple",
      overlay: "from-green-900/80 via-green-900/60 to-transparent"
    },
    {
      image: realEstateImg,
      title: "Real Estate & Development",
      description: "Comprehensive real estate approvals and development project clearances",
      overlay: "from-purple-900/80 via-purple-900/60 to-transparent"
    },
    {
      image: regulatoryImg,
      title: "Expert Regulatory Guidance",
      description: "Professional consultation and regulatory guidance for complex compliance requirements",
      overlay: "from-indigo-900/80 via-indigo-900/60 to-transparent"
    }
  ];

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }, [api, onSelect]);

  // Simple autoplay without external plugin
  useEffect(() => {
    if (!api) return;
    const intervalId = window.setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, [api, isPaused]);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        className="w-full h-full"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-0">
          {carouselData.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative">
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                      <LazyMotion features={domAnimation} strict>
                        <m.div
                          key={`slide-${current}-${index}`}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ 
                            opacity: current === index ? 1 : 0, 
                            y: current === index ? 0 : 50 
                          }}
                          transition={{ 
                            duration: 0.8, 
                            ease: "easeOut",
                            delay: current === index ? 0.2 : 0 
                          }}
                        >
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            <AnimatedText as="span" delay={current === index ? 0.3 : 0}>
                              {slide.title}
                            </AnimatedText>
                          </h1>
                          
                          <m.p
                            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: current === index ? 1 : 0, 
                              y: current === index ? 0 : 20 
                            }}
                            transition={{ 
                              duration: 0.6, 
                              delay: current === index ? 0.5 : 0 
                            }}
                          >
                            {slide.description}
                          </m.p>

                          <m.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                              opacity: current === index ? 1 : 0, 
                              y: current === index ? 0 : 20 
                            }}
                            transition={{ 
                              duration: 0.6, 
                              delay: current === index ? 0.7 : 0 
                            }}
                          >
                            <button className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg">
                              Get Started Today
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                              Learn More
                            </button>
                          </m.div>
                        </m.div>
                      </LazyMotion>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white hover:text-slate-900" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white hover:text-slate-900" />
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;