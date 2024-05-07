import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ActivityScreen from "./pages/ActivityScreen.jsx";
import DietScreen from "./pages/DietScreen.jsx";
import FundsScreen from "./pages/FundsScreen.jsx";
import SocialNetworkScreen from "./pages/SocialNetworkScreen.jsx";
import IntegrationScreen from "./pages/IntegrationScreen.jsx";
import RewardsScreen from "./pages/RewardsScreen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/activities" element={<ActivityScreen />} />
        <Route path="/diet" element={<DietScreen />} />
        <Route path="/funds" element={<FundsScreen />} />
        <Route path="/social-network" element={<SocialNetworkScreen />} />
        <Route path="/integrations" element={<IntegrationScreen />} />
        <Route path="/rewards" element={<RewardsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
