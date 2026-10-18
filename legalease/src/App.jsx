import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import ClientHome from "./pages/ClientHome/ClientHome.jsx";
import LawyerSearch from "./pages/LawyerSearch/LawyerSearch.jsx";
import LawyerDetails from "./pages/LawyerDetails/LawyerDetails.jsx";
import RecentlyViewed from "./pages/RecentlyViewed/RecentlyViewed.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
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
          <Route path="/recently-viewed" element={<RecentlyViewed />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;