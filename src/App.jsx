import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/about" replace />} />

        <Route path="/about" element={<About />} />

        <Route path="/how-it-works" element={<HowItWorks />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;