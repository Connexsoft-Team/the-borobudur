import React, { useEffect } from "react";
import croppedborobudur from "./assets/croppedborobudur.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NyobaParallaxJir() {
  useEffect(() => {

    gsap.to("#text-borobudur", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".parallax",
        scrub: true,
        markers: true,
        start: "top center",
        end: "bottom",
      },
    });
  }, []);

  return (
    <div className="parallax-outer bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${croppedborobudur})` }}>
      <div className="parallax">
        <span id="text-borobudur" className="text-animate text-white text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity:0 }}>BOROBUDUR</span>
      </div>
    </div>
  );
}
