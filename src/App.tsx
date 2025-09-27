import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import MantralayaServices from "./pages/services/MantralayaServices";
import BusinessLicensing from "./pages/services/BusinessLicensing";
import MunicipalServices from "./pages/services/MunicipalServices";
import MhadaSraServices from "./pages/services/MhadaSraServices";
import RealEstateServices from "./pages/services/RealEstateServices";
import RegulatoryServices from "./pages/services/RegulatoryServices";
import MidcSidcoServices from "./pages/services/MidcSidcoServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/mantralaya" element={<MantralayaServices />} />
          <Route path="/services/business-licensing" element={<BusinessLicensing />} />
          <Route path="/services/municipal" element={<MunicipalServices />} />
          <Route path="/services/mhada-sra" element={<MhadaSraServices />} />
          <Route path="/services/real-estate" element={<RealEstateServices />} />
          <Route path="/services/regulatory" element={<RegulatoryServices />} />
          <Route path="/services/midc-sidco" element={<MidcSidcoServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
