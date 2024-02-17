/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import ukiran from "./assets/ukiran.png";
import borobudur from "./assets/borobudur.png";
import komang from "./assets/komang.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionThree() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".wrapper-1", {
      x: "60%",
      scrollTrigger: {
        trigger: ".wrapper-trigger",
        start: "top center",
        end: "bottom center",
        scrub: 0.3,
      },
    });

    gsap.to(".wrapper-2", {
      x: "-60%",
      scrollTrigger: {
        trigger: ".wrapper-trigger",
        start: "top center",
        end: "bottom center",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="w-screen relative overflow-hidden h-full">
      <div className="wrapper-trigger flex flex-col max-w-screen mt-[10rem] mb-[64px] gap-[16px]">
        <div className="wrapper-1 inline-flex flex-row-reverse flex-nowrap max-w-screen items-center gap-[32px]">
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">CULTURES</p>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">ART</p>
        </div>
        <div className="wrapper-2 inline-flex flex-nowrap max-w-screen items-center gap-[32px] lg:-ml-0 -ml-[220px]">
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">ART</p>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover"
          />
          <p className="stroke-text">ARCHITECTURE</p>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <p className="text-white text-[96px] font-bold">CULTURES</p>
        </div>
      </div>
    </div>
  );
}
