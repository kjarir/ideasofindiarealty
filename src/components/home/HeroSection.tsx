import { ArrowRight, Shield, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-government-services.jpg";
import { LazyMotion, domAnimation, m } from "framer-motion";
import AnimatedText from "@/components/common/AnimatedText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Government services building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <AnimatedText as="span">Professional Government</AnimatedText>
                <br />
                <AnimatedText as="span" className="text-primary-light" delay={0.2}>
                  Services & Compliance
                </AnimatedText>
              </h1>
            </m.div>
          </LazyMotion>

          {/* Subtitle */}
          <LazyMotion features={domAnimation} strict>
            <m.p
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              We provide comprehensive regulatory solutions and government services 
              with unwavering commitment to quality, trust, and reliability.
            </m.p>
          </LazyMotion>

          {/* Philosophy Quote */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-lg italic text-white/95 mb-2">
                "We don't believe in shortcuts..."
              </p>
              <p className="text-white/80">
                Quality, integrity, and client success are the foundation of everything we do.
              </p>
            </m.div>
          </LazyMotion>

          {/* CTA Buttons */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="text-primary font-semibold hover-lift"
            >
              <Link to="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
              <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link to="/services/mantralaya">
                Explore Services
              </Link>
            </Button>
            </m.div>
          </LazyMotion>

          {/* Trust Indicators */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
            >
              <m.div
                className="flex flex-col items-center text-center"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">100% Compliant</h3>
              <p className="text-sm text-white/80">Full regulatory compliance guaranteed</p>
              </m.div>

              <m.div
                className="flex flex-col items-center text-center"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Proven Results</h3>
              <p className="text-sm text-white/80">Thousands of successful applications</p>
              </m.div>

              <m.div
                className="flex flex-col items-center text-center"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Expert Team</h3>
              <p className="text-sm text-white/80">Experienced professionals at your service</p>
              </m.div>
            </m.div>
          </LazyMotion>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;