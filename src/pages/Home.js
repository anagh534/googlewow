import AboutSection from "../components/Home/About/AboutSection";
import HeroSection from "../components/Home/Hero/HeroSection";
import WorkshopCard from "../components/Shared/WorkshopCard";


const Home = () => {
  return (
    <div className="homewrapper">
      {/* <HeroSection /> */}
      <AboutSection />
      {/* <WorkshopCard photo={"/img/metaverse.png"} color={"#E0BAFF"} darkColor={"#470082"}/> */}
    </div>
  );
};
export default Home;
