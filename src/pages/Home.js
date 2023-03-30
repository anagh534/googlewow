import AboutSection from "../components/Home/About/AboutSection";
import Event from "../components/Home/Event/Event";
import HeroSection from "../components/Home/Hero/HeroSection";
// import WorkshopCard from "../components/Shared/WorkshopCard";



const Home = () => {
  return (
    <div className="homewrapper">
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <WorkshopCard photo={"/img/metaverse.png"} color={"#E0BAFF"} darkColor={"#470082"}/> */}
      <Event/>
    </div>
  );
};
export default Home;
