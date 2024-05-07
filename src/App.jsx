import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ActivityScreen from "./pages/ActivityScreen.jsx";
import DietScreen from "./pages/DietScreen.jsx";
import FundsScreen from "./pages/FundsScreen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/activities" element={<ActivityScreen />} />
        <Route path="/diet" element={<DietScreen />} />
        <Route path="/funds" element={<FundsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
