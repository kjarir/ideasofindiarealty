import { useTransform, useScroll, LazyMotion, domAnimation, m } from "framer-motion";
import { useRef } from "react";

export interface HorizontalScrollCarouselItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

interface HorizontalScrollCarouselProps {
  items: HorizontalScrollCarouselItem[];
}

const HorizontalScrollCarousel = ({ items }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  console.log("HorizontalScrollCarousel items:", items);

  return (
    <LazyMotion features={domAnimation} strict>
      <section ref={targetRef} className="relative h-[300vh] bg-white">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <m.div style={{ x }} className="flex gap-8">
            {items && items.length > 0 ? (
              items.map((item) => {
                return <Card item={item} key={item.id} />;
              })
            ) : (
              <div className="text-black text-2xl">No items to display</div>
            )}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

const Card = ({ item }: { item: HorizontalScrollCarouselItem }) => {
  console.log("Card rendering with item:", item);
  
  return (
    <div
      key={item.id}
      className="group relative h-screen w-screen overflow-hidden bg-white flex-shrink-0"
    >
      <div
        style={{
          backgroundImage: `url(${item.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
        <div className="text-center">
          <h3 className="text-6xl font-bold uppercase text-white mb-6">
            {item.title}
          </h3>
          <p className="text-2xl text-white font-medium">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
