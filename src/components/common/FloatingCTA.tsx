import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence>
        {isVisible && (
          <m.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Main CTA Button */}
            <m.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="rounded-full h-14 w-14 shadow-2xl bg-primary hover:bg-primary-hover"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <m.div
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isExpanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
                </m.div>
              </Button>

              {/* Pulse Animation */}
              <m.div
                className="absolute inset-0 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </m.div>

            {/* Expanded Options */}
            <AnimatePresence>
              {isExpanded && (
                <m.div
                  className="absolute bottom-16 right-0 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, staggerChildren: 0.1 }}
                >
                  {/* WhatsApp */}
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Button
                      asChild
                      className="rounded-full h-12 w-12 bg-green-500 hover:bg-green-600 shadow-lg"
                      size="sm"
                    >
                      <a
                        href="https://wa.me/919876543210?text=Hello, I need help with government services"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </Button>
                  </m.div>

                  {/* Call */}
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      asChild
                      className="rounded-full h-12 w-12 bg-blue-500 hover:bg-blue-600 shadow-lg"
                      size="sm"
                    >
                      <a href="tel:+919876543210">
                        <Phone className="w-5 h-5" />
                      </a>
                    </Button>
                  </m.div>

                  {/* Contact Form */}
                  <m.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      asChild
                      className="rounded-full h-12 px-6 bg-purple-500 hover:bg-purple-600 shadow-lg text-xs"
                      size="sm"
                    >
                      <Link to="/contact">
                        Contact
                      </Link>
                    </Button>
                  </m.div>
                </m.div>
              )}
            </AnimatePresence>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default FloatingCTA;