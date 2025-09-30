import { useRef } from "react";
import { useScroll, useTransform, LazyMotion, domAnimation, m } from "framer-motion";

export interface ImageGridItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  size: 'small' | 'medium' | 'large';
  position: {
    top: string;
    left: string;
  };
}

interface ImageGridHeroProps {
  items: ImageGridItem[];
}

const ImageGridHero = ({ items }: ImageGridHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <section ref={containerRef} className="relative h-[300vh] bg-white">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background curved lines */}
          <div className="absolute inset-0 z-0">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path d="M0,100 Q300,50 600,150 T1200,100" stroke="#e5e7eb" strokeWidth="2" fill="none" />
              <path d="M0,700 Q300,650 600,750 T1200,700" stroke="#e5e7eb" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Central content that shrinks */}
          <m.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0]),
              opacity: useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [1, 0.7, 0.3, 0])
            }}
          >
            <div className="text-center max-w-4xl mx-auto px-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Government Services & Regulatory Solutions
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Comprehensive administrative support for Mantralaya clearances, business licensing, real estate approvals, and regulatory compliance across Maharashtra.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Get Started
                </button>
                <button className="px-8 py-4 text-gray-700 font-semibold hover:text-gray-900 transition-colors duration-300">
                  Learn About Us
                </button>
              </div>
            </div>
          </m.div>

          {/* Images that grow and form grid */}
          <div className="absolute inset-0 z-20">
            <div className="relative w-full h-full max-w-7xl mx-auto">
              {items.map((item, index) => {
                // Calculate scroll-based transforms for each image to form a proper grid
                const getImageTransforms = (index: number) => {
                  const transforms = [
                    // Image 1 - Top left, grows enormous
                    {
                      scale: useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 0.5, 0.8, 6.5]),
                      x: useTransform(scrollYProgress, [0, 1], [0, -200]),
                      y: useTransform(scrollYProgress, [0, 1], [0, -160]),
                    },
                    // Image 2 - Top right, grows enormous
                    {
                      scale: useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 0.5, 0.8, 6.0]),
                      x: useTransform(scrollYProgress, [0, 1], [0, 250]),
                      y: useTransform(scrollYProgress, [0, 1], [0, -140]),
                    },
                    // Image 3 - Bottom left, grows enormous
                    {
                      scale: useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 0.5, 0.8, 5.5]),
                      x: useTransform(scrollYProgress, [0, 1], [0, -250]),
                      y: useTransform(scrollYProgress, [0, 1], [0, 200]),
                    },
                    // Image 4 - Center, grows gigantic (main focus)
                    {
                      scale: useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 0.5, 0.8, 8.0]),
                      x: useTransform(scrollYProgress, [0, 1], [0, 0]),
                      y: useTransform(scrollYProgress, [0, 1], [0, 0]),
                    },
                    // Image 5 - Bottom center, grows enormous
                    {
                      scale: useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 0.5, 0.8, 5.5]),
                      x: useTransform(scrollYProgress, [0, 1], [0, 140]),
                      y: useTransform(scrollYProgress, [0, 1], [0, 250]),
                    },
                    // Image 6 - Bottom right, grows enormous
                    {
                      scale: useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.3, 0.5, 0.8, 6.0]),
                      x: useTransform(scrollYProgress, [0, 1], [0, 280]),
                      y: useTransform(scrollYProgress, [0, 1], [0, 200]),
                    }
                  ];
                  return transforms[index] || transforms[0];
                };

                const transforms = getImageTransforms(index);

                return (
                  <m.div
                    key={item.id}
                    className="absolute"
                    style={{
                      top: item.position.top,
                      left: item.position.left,
                      width: '192px',
                      height: '144px',
                      scale: transforms.scale,
                      x: transforms.x,
                      y: transforms.y,
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.1, 0.9, 1],
                        [0.6, 0.8, 1, 1]
                      ),
                      zIndex: index + 1
                    }}
                  >
                    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl w-full h-full">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${item.imageUrl})`,
                        }}
                      />
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>

          {/* Scroll indicator */}
          <m.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
            }}
          >
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-sm mb-2">Scroll to explore</span>
              <m.div
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
              </m.div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default ImageGridHero;
