import ClientHero from "./components/ClientHero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import PracticeAreas from "./components/PracticeAreas.jsx";
import FeaturedLawyers from "./components/FeaturedLawyers.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import "./ClientHome.css";

// ClientHome just lays out the sections in order.
// It does not hold any state or logic itself.
function ClientHome() {
  return (
    <div>
      <ClientHero />
      <HowItWorks />
      <PracticeAreas />
      <FeaturedLawyers />
      <WhyChooseUs />
    </div>
  );
}

export default ClientHome;
