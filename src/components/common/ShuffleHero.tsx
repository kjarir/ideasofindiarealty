import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-purple-600 font-medium">
          Professional Services
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Professional Government Services & Regulatory Solutions
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Comprehensive administrative support for Mantralaya clearances, business licensing, real estate approvals, and regulatory compliance across Maharashtra.
        </p>
        <button className="bg-purple-600 text-white font-medium py-2 px-4 rounded transition-all hover:bg-purple-700 active:scale-95">
          Get Started
        </button>
      </div>
      <ShuffleGrid />
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
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
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
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
