import React from 'react';
import { cn } from "@/lib/utils";

export interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

interface BentoGridProps {
  cards: BentoCardProps[];
  className?: string;
}

const BentoCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
  size = 'medium',
}: BentoCardProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-2 row-span-1",
    large: "col-span-2 row-span-2",
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end p-6 bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:scale-105",
        sizeClasses[size],
        className
      )}
      style={{ minHeight: size === 'large' ? '400px' : '250px' }}
    >
      <img
        src={imageSrc}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt={imageAlt || title}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-500"></div>
      <div className="relative z-10 space-y-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
      <div className="mt-4 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-lg text-white">{description}</p>
      </div>
    </div>
  );
};

export function BentoGrid({ cards, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-4 gap-4 w-full px-4", className)}>
      {cards.map((card, index) => (
        <BentoCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          size={index === 0 ? 'large' : index % 3 === 0 ? 'medium' : 'small'}
        />
      ))}
    </div>
  );
}
