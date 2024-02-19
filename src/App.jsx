/* eslint-disable no-unused-vars */
import ParallaxSection from "./parralax"
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import Footer from "./components/Footer";
import SectionLevelBorobudur from "./components/SectionBorobudurLevels";
import { ReactLenis } from "@studio-freight/react-lenis"
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import gsap from "gsap";
import SectionSix from "./SectionSix";

function App() {
  const [loading, setLoading] = useState(false);
  const timeline = gsap.timeline()


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      timeline.from(".app-wrap", {
        opacity: 0,
        duration: 1.5
      })
      setLoading(false)
    }, 2000)

    }, [])

  return (
    <>
      {
        loading ? <Spinner></Spinner> :
        <ReactLenis root>
          <div className={`app-wrap ${loading ? "opacity-0" : ""}`}>
            <ParallaxSection />
            <SectionTwo />
            <SectionThree />
            <SectionLevelBorobudur />
            <SectionFour />
            <SectionSix />
            <Footer />
          </div>
        </ReactLenis>
      }
    </>
  );
}

export default App;
