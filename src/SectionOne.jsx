import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import SectionTwo from "./SectionTwo";
import SectionSix from "./SectionSix";
import SectionLevelBorobudur from './components/SectionBorobudurLevels'
import SectionThree from "./SectionThree";
import Footer from "./components/Footer";

function SectionOne() {
  return (
    <div className="container mx-auto w-full h-full">
      {/* <Parallax pages={1} style={{ top: "0", left: "0" }} className="">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="artcrop"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className='flex justify-between flex-col items-center h-screen p-8'>
            <div className='w-full flex justify-between'>
              <h1 className="">dsaijdsi</h1>
              <div className="flex gap-4 title-color">
                <p className="text-base font-bold leading-none text-gray-9"> Home </p>
                <p className="text-base font-bold leading-none text-gray-9"> Teams </p>
              </div>
            </div>
            <div>
              <p className="font-bold xl:text-9xl text-7xl   mx-auto title-color transition">BOROBUDUR</p>
            </div>
            <div className='flex justify-between w-full '>
              <div className='flex-1 text-start items-start'>
                <h1 className="title-color">-7.607355, 110.203804</h1>
              </div>
              <div className='flex-1 text-center justify-center items-center '>
                <h1 className="title-color">Scroll Down</h1>
                <div className='w-full justify-center items-center flex pt-1'>
                  <div className="w-[1px] bg-white/50 h-6 "></div>
                </div> </div> <div className='flex-1 text-end'>
                <h1 className="title-color">Indonesia</h1>
              </div>
            </div>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.25} style={{}}>
          <div className="flex justify-center items-center h-screen">
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={2} speed={0.25} style={{}}>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.25} style={{}}>
        </ParallaxLayer>
      </Parallax> */}
      <SectionTwo></SectionTwo>
      <SectionThree />
      <SectionLevelBorobudur></SectionLevelBorobudur>
      <SectionSix />
      <Footer/>
    </div>
  );
}

export default SectionOne;