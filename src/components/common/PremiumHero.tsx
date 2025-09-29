import { ReactNode, useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface PremiumHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: ReactNode;
  overlay?: string;
}

const PremiumHero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  children, 
  overlay = "from-slate-900/70 via-slate-900/50 to-transparent" 
}: PremiumHeroProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Dynamic Background */}
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${overlay}`}></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <LazyMotion features={domAnimation} strict>
          {[...Array(6)].map((_, i) => (
            <m.div
              key={i}
              className="absolute rounded-full border border-white/10"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </LazyMotion>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <AnimatedText as="span">{title}</AnimatedText>
              </h1>
              
              <m.p
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {subtitle}
              </m.p>

              {children && (
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {children}
                </m.div>
              )}
            </m.div>
          </LazyMotion>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <m.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </m.div>
      </div>
    </section>
  );
};

export default PremiumHero;