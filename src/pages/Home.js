import AboutSection from "../components/Home/About/AboutSection";
import Event from "../components/Home/Event/Event";
import Navbar from "../components/Shared/Navbar/Navbar";
import HeroSection from "../components/Home/Hero/HeroSection";
import Regions from "../components/Home/Regions/Regions";
import WorkshopCard from "../components/Home/Event/workshop/WorkshopCard";
import WorkshopPage from "../components/Home/Event/workshop/WorkshopPage";
import Hackathon from "../components/Home/Event/hackathon/Hackathon";
import JobStartup from "../components/Home/Event/job&startup/JobStartup";
import Footer from "../components/Footer/Footer";
import Sponsorsection from "../components/Home/Sponsorsection/Sponsorsection";

const Home = () => {
  return (
    <div className="homewrapper">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <hr />
      <Regions />
      <Hackathon />
      <WorkshopPage />
      <JobStartup />
      <Sponsorsection />
      <Footer />
    </div>
  );
};
export default Home;