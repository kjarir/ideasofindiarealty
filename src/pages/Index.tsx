import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
      </motion.main>
    </Layout>
  );
};

export default Index;
