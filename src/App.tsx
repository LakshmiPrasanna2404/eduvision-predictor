
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import PredictionForm from "./components/PredictionForm";

const queryClient = new QueryClient();

const DashboardPage = () => (
  <div className="min-h-screen bg-slate-50">
    <NavBar />
    <main className="pt-20">
      <Dashboard />
    </main>
  </div>
);

const PredictionPage = () => (
  <div className="min-h-screen bg-slate-50">
    <NavBar />
    <main className="pt-20">
      <PredictionForm />
    </main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
