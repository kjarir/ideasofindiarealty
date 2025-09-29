import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import { LazyMotion, domAnimation, m } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <LazyMotion features={domAnimation} strict>
        <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <HeroSection />
          <AboutSection />
          <ServicesOverview />
        </m.main>
      </LazyMotion>
    </Layout>
  );
};

export default Index;
