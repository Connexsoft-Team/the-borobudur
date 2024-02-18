/* eslint-disable no-unused-vars */
import ParallaxSection from "./parralax"
import SectionFour from "./SectionFour";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import Footer from "./components/Footer";
import SectionLevelBorobudur from "./components/SectionBorobudurLevels";
import {ReactLenis} from "@studio-freight/react-lenis"

function App() {
  return (
    <ReactLenis root>
      <ParallaxSection />
      <SectionTwo />
      <SectionThree />
      <SectionLevelBorobudur />
      <SectionFour />
      <SectionSix />
      <Footer />
    </ReactLenis>
  );
}

export default App;
