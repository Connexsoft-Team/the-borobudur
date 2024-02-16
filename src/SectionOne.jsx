import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import SectionTwo from "./SectionTwo";
import SectionSix from "./SectionSix";
import SectionLevelBorobudur from './components/SectionBorobudurLevels'

function SectionOne() {
  return (
    <div className="container mx-auto w-full h-full">
      <Parallax pages={1} style={{ top: "0", left: "0" }} className="">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="artcrop"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div className="flex justify-center items-center h-screen">
            <div>
              <p className="font-bold text-9xl mx-auto title-color transition">
                BOROBUDUR
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25} style={{}}>
          <div className="flex justify-center items-center h-screen">
            <SectionTwo></SectionTwo>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25} style={{}}>
          <SectionLevelBorobudur></SectionLevelBorobudur>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25} style={{}}>
          <SectionSix />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default SectionOne;
