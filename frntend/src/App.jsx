import { Page1 } from "./pages/moviereview/page1";
import { Page2 } from "./pages/moviereview/page2";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


// Separate component for routes with animation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/moviepg1" element={<Page1 />} />
        <Route path="/moviepg2" element={<Page2 />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
