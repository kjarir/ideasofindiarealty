import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <m.div
          className="h-full bg-gradient-to-r from-primary to-primary-hover origin-left"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </m.div>
    </LazyMotion>
  );
};

export default ScrollProgress;