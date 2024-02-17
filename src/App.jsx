import ParallaxSection from "./parralax"
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import Footer from "./components/Footer";
import SectionLevelBorobudur from "./components/SectionBorobudurLevels";


function App() {
  return (
    <>
      <ParallaxSection />
      <SectionTwo />
      <SectionThree />
      <SectionLevelBorobudur />
      <SectionFour />
      <SectionSix />
      <Footer />
      {/* <SectionOne/> */}
      {/* <SectionSix/> */}
    </>
  );
}

export default App;
