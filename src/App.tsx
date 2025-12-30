import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Technology from "./pages/Technology";
import Ecosystem from "./pages/Ecosystem";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import DAO from "./pages/DAO";
import Whitepaper from "./pages/Whitepaper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SubmitWork from "./pages/SubmitWork";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/dao" element={<DAO />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submit-work" element={<SubmitWork />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
