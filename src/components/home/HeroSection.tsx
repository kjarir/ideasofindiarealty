import { ArrowRight, Shield, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Professional Government
            <br />
            <span className="text-primary-light">Services & Compliance</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            We provide comprehensive regulatory solutions and government services 
            with unwavering commitment to quality, trust, and reliability.
          </p>

          {/* Philosophy Quote */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20 animate-scale-in">
            <p className="text-lg italic text-white/95 mb-2">
              "We don't believe in shortcuts..."
            </p>
            <p className="text-white/80">
              Quality, integrity, and client success are the foundation of everything we do.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
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
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">100% Compliant</h3>
              <p className="text-sm text-white/80">Full regulatory compliance guaranteed</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Proven Results</h3>
              <p className="text-sm text-white/80">Thousands of successful applications</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Expert Team</h3>
              <p className="text-sm text-white/80">Experienced professionals at your service</p>
            </div>
          </div>
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