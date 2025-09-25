import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MantralayaServices from "./pages/services/MantralayaServices";
import BusinessLicensing from "./pages/services/BusinessLicensing";
import MunicipalServices from "./pages/services/MunicipalServices";
import MhadaSraServices from "./pages/services/MhadaSraServices";
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
          <Route path="/services/mantralaya" element={<MantralayaServices />} />
          <Route path="/services/business-licensing" element={<BusinessLicensing />} />
          <Route path="/services/municipal" element={<MunicipalServices />} />
          <Route path="/services/mhada-sra" element={<MhadaSraServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
