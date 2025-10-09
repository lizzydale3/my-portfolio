import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import ProjectDetail from "@/pages/project-detail";
import TravelMap from "@/pages/travel-map";
import WHOIExperience from "@/pages/whoi-experience";
import Academics from "@/pages/academics";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/scroll-to-top";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:slug" component={ProjectDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/travel-map" component={TravelMap} />
      <Route path="/whoi-experience" component={WHOIExperience} />
      <Route path="/academics" component={Academics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="dark">
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>
              <ScrollToTop />
              <Router />
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
