import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/logo.jpg" 
                alt="Ideas of India Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground">Ideas of India Realty</div>
              <div className="text-xs text-muted-foreground">Professional Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border border-border shadow-elegant">
                {serviceCategories.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link 
                      to={category.path}
                      className="w-full px-4 py-3 text-sm hover:bg-accent transition-colors"
                    >
                      {category.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/services" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>

            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>

            <Button variant="default" className="hover-lift">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-2 font-medium hover:bg-accent transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-2">
                <div className="font-medium text-muted-foreground mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {serviceCategories.map((category) => (
                    <Link 
                      key={category.path}
                      to={category.path}
                      className="block py-1 text-sm hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/services" 
                className="block px-4 py-2 font-medium hover:bg-accent transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link 
                to="/about" 
                className="block px-4 py-2 font-medium hover:bg-accent transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className="block px-4 py-2 font-medium hover:bg-accent transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 pt-2">
                <Button variant="default" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;