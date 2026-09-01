import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import ClientHome from "./pages/ClientHome/ClientHome.jsx";
import LawyerSearch from "./pages/LawyerSearch/LawyerSearch.jsx";
import LawyerDetails from "./pages/LawyerDetails/LawyerDetails.jsx";
import LegalGuides from "./pages/LegalGuides/LegalGuides.jsx";
import Login from "./pages/Login/Login.jsx";
import About from "./pages/About/About.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<ClientHome />} />
          <Route path="/search" element={<LawyerSearch />} />
          <Route path="/lawyer/:lawyerId" element={<LawyerDetails />} />
          <Route path="/guides" element={<LegalGuides />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
