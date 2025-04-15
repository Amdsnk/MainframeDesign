import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import Dashboard from "@/pages/Dashboard";
import Affiliate from "@/pages/Affiliate";
import BuyNFT from "@/pages/BuyNFT";
import Earning from "@/pages/Earning";
import Rewards from "@/pages/Rewards";
import Collections from "@/pages/Collections";
import DividendShare from "@/pages/DividendShare";
import Profile from "@/pages/Profile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/affiliate" component={Affiliate} />
      <Route path="/buy-nft" component={BuyNFT} />
      <Route path="/earning" component={Earning} />
      <Route path="/rewards" component={Rewards} />
      <Route path="/collections" component={Collections} />
      <Route path="/dividend-share" component={DividendShare} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
