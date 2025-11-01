import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import MedicalTourism from "@/pages/MedicalTourism";
import RomanticSolo from "@/pages/RomanticSolo";
import CaribbeanImmersion from "@/pages/CaribbeanImmersion";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/medical-tourism" component={MedicalTourism} />
        <Route path="/romantic-solo" component={RomanticSolo} />
        <Route path="/caribbean-immersion" component={CaribbeanImmersion} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
