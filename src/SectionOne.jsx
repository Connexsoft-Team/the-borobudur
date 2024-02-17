import "./App.css";
import SectionTwo from "./SectionTwo";
import SectionSix from "./SectionSix";
import SectionLevelBorobudur from './components/SectionBorobudurLevels'
import SectionThree from "./SectionThree";
import Footer from "./components/Footer";

function SectionOne() {
  return (
    <>
      <div className="container mx-auto w-full h-full">
        <SectionTwo></SectionTwo>
        <SectionThree />
        <SectionLevelBorobudur></SectionLevelBorobudur>
        <SectionSix />
      </div>
      <Footer />
    </>


  );
}

export default SectionOne;
