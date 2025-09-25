import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const serviceCategories = [
    { title: "Mantralaya & Revenue Department", path: "/services/mantralaya" },
    { title: "Business Licensing & Compliance", path: "/services/business-licensing" },
    { title: "BMC/Municipal Corporation", path: "/services/municipal" },
    { title: "MHADA & SRA Services", path: "/services/mhada-sra" },
    { title: "Real Estate & Development", path: "/services/real-estate" },
    { title: "Regulatory & Advisory", path: "/services/regulatory" },
    { title: "MIDC & SIDCO Services", path: "/services/midc-sidco" },
  ];

  return (
    <footer className="bg-section-gradient border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center text-white font-bold text-lg">
                I
              </div>
              <div>
                <div className="font-bold text-lg">Ideas of India Reality</div>
                <div className="text-sm text-muted-foreground">Professional Services</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              We provide comprehensive government services and regulatory compliance solutions 
              with unwavering commitment to quality and trust.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@ideasofindiaReality.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span>{category.title}</span>
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/privacy" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Ideas of India Reality. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              We don't believe in shortcuts - Quality is our commitment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;