import React from 'react';
import { cn } from "@/lib/utils";

export interface BentoSeasonalCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

interface BentoSeasonalCardsProps {
  cards: BentoSeasonalCardProps[];
  className?: string;
}

const BentoSeasonalCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
  size = 'medium',
}: BentoSeasonalCardProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 row-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2", 
    large: "col-span-2 row-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end p-4 sm:p-6 bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:scale-[1.02]",
        sizeClasses[size],
        className
      )}
      style={{ 
        minHeight: size === 'large' 
          ? 'clamp(300px, 35vw, 400px)' 
          : 'clamp(200px, 25vw, 250px)' 
      }}
    >
      <img
        src={imageSrc}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt={imageAlt || title}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-500"></div>
      <div className="relative z-10 space-y-1 sm:space-y-2">
        <h2 className="text-lg sm:text-xl font-bold text-white leading-tight">{title}</h2>
        <p className="text-xs sm:text-sm text-gray-300">{subtitle}</p>
      </div>
      <div className="mt-2 sm:mt-4 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm sm:text-lg text-white leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export function BentoSeasonalCards({ cards, className }: BentoSeasonalCardsProps) {
  return (
    <div className={cn(
      "grid gap-3 sm:gap-4 w-full", 
      "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4",
      "auto-rows-[clamp(200px,25vw,250px)]",
      className
    )}>
      {cards.map((card, index) => (
        <BentoSeasonalCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          size={
            index === 0 ? 'large' : 
            index === 1 || index === 2 ? 'medium' : 
            'small'
          }
        />
      ))}
    </div>
  );
}
