import AboutSection from "../components/Home/About/AboutSection";
import Navbar from "../components/Shared/Navbar/Navbar";
import HeroSection from "../components/Home/Hero/HeroSection";
import Regions from "../components/Home/Regions/Regions";
import WorkshopCard from "../components/Shared/WorkshopCard";


const Home = () => {
  return (
    <div className="homewrapper">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <hr />
      <Regions />
      <WorkshopCard photo={"/img/metaverse.png"} color={"#E0BAFF"} darkColor={"#470082"}/>
    </div>
  );
};
export default Home;