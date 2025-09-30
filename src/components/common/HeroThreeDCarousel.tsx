import React, {
  useRef,
  useEffect,
  useState,
  TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";

export interface HeroThreeDCarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

interface HeroThreeDCarouselProps {
  items: HeroThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  title?: string;
  subtitle?: string;
  tagline?: string;
  isMobileSwipe?: boolean;
}

const HeroThreeDCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  title = "Ideas of India Realty",
  subtitle = "Professional Services",
  tagline = "Your trusted partner for comprehensive business solutions and regulatory compliance.",
  isMobileSwipe = true,
}: HeroThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  return (
    <section
      id="HeroThreeDCarousel"
      className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden"
    >

      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* 3D Carousel */}
        <div
          className="relative overflow-hidden h-[700px] w-full"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-4xl transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <Card
                  className={`overflow-hidden bg-white border shadow-2xl flex flex-col`}
                  style={{ height: `${cardHeight}px` }}
                >
                  <div
                    className="relative bg-black p-8 flex items-center justify-center h-96 overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 text-center text-white">
                      <h3 className="text-3xl font-bold mb-3">
                        {item.brand.toUpperCase()}
                      </h3>
                      <div className="w-16 h-1 bg-white mx-auto mb-3" />
                      <p className="text-lg">{item.title}</p>
                    </div>
                  </div>

                  <CardContent className="p-4 flex flex-col">
                    <h3 className="text-lg font-bold mb-1 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium mb-2">
                      {item.brand}
                    </p>

                    <div className="mt-2">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={item.link}
                        className="text-gray-500 flex items-center hover:underline relative group text-sm"
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-1 w-3 h-3 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 z-30 shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl"
            onClick={() =>
              setActive((prev) => (prev - 1 + items.length) % items.length)
            }
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 z-30 shadow-lg border border-gray-200 transition-all hover:scale-105 hover:shadow-xl"
            onClick={() => setActive((prev) => (prev + 1) % items.length)}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === idx
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setActive(idx)}
                aria-label={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroThreeDCarousel;
