import { useState, ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

interface InteractiveCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  hover3D?: boolean;
}

const InteractiveCard = ({ 
  title, 
  description, 
  icon, 
  children, 
  className = "", 
  onClick,
  hover3D = true 
}: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={hover3D ? { 
          y: -8, 
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
        } : { y: -4 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Card 
          className={`
            relative overflow-hidden cursor-pointer transition-all duration-300 border-0
            ${isHovered ? 'shadow-2xl' : 'shadow-lg'} 
            ${className}
          `}
          onClick={onClick}
        >
          {/* Animated Background Gradient */}
          <m.div
            className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Glow Effect */}
          <m.div
            className="absolute inset-0 opacity-0"
            animate={{ 
              opacity: isHovered ? 1 : 0,
              boxShadow: isHovered ? "inset 0 0 20px rgba(59, 130, 246, 0.1)" : "none"
            }}
            transition={{ duration: 0.3 }}
          />

          <CardHeader className="relative z-10">
            {icon && (
              <m.div
                className="mb-4"
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </m.div>
            )}
            <CardTitle className="text-xl font-bold">
              <m.span
                animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </m.span>
            </CardTitle>
            {description && (
              <CardDescription className="mt-2">
                {description}
              </CardDescription>
            )}
          </CardHeader>

          {children && (
            <CardContent className="relative z-10">
              {children}
            </CardContent>
          )}

          {/* Corner Accent */}
          <m.div
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent"
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8 
            }}
            transition={{ duration: 0.3 }}
          />
        </Card>
      </m.div>
    </LazyMotion>
  );
};

export default InteractiveCard;