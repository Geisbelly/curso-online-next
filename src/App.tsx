
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

// Layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <div className="pt-16"> {/* Space for fixed header */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/cursos/:slug" element={<CourseDetail />} />
                <Route path="/cronograma" element={<Schedule />} />
                <Route path="/patrocinadores" element={<Sponsors />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/inscricao" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
