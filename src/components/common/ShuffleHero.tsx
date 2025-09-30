import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
      <div className="order-2 lg:order-1">
        <span className="block mb-3 sm:mb-4 text-xs sm:text-sm text-purple-600 font-medium">
          Professional Services
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          Professional Government Services & Regulatory Solutions
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 my-4 sm:my-6 leading-relaxed">
          Comprehensive administrative support for Mantralaya clearances, business licensing, real estate approvals, and regulatory compliance across Maharashtra.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-purple-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all hover:bg-purple-700 active:scale-95 text-sm sm:text-base">
            Get Started
          </button>
          <button className="text-gray-700 font-semibold py-3 px-6 sm:px-8 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all active:scale-95 text-sm sm:text-base">
            Learn About Us
          </button>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <ShuffleGrid />
      </div>
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/mantralaya-services.jpg",
  },
  {
    id: 2,
    src: "/business-licensing.jpg",
  },
  {
    id: 3,
    src: "/municipal-services.jpg",
  },
  {
    id: 4,
    src: "/mhada-sra-services.jpg",
  },
  {
    id: 5,
    src: "/real-estate-services.jpg",
  },
  {
    id: 6,
    src: "/regulatory-services.jpg",
  },
  {
    id: 7,
    src: "/midc-sidco-services.jpg",
  },
  {
    id: 8,
    src: "/hero-government-services.jpg",
  },
  {
    id: 9,
    src: "/mantralaya-services.jpg",
  },
  {
    id: 10,
    src: "/business-licensing.jpg",
  },
  {
    id: 11,
    src: "/municipal-services.jpg",
  },
  {
    id: 12,
    src: "/mhada-sra-services.jpg",
  },
  {
    id: 13,
    src: "/real-estate-services.jpg",
  },
  {
    id: 14,
    src: "/regulatory-services.jpg",
  },
  {
    id: 15,
    src: "/midc-sidco-services.jpg",
  },
  {
    id: 16,
    src: "/hero-government-services.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-sm overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] gap-1 sm:gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
