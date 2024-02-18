/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ukiran from "./assets/ukiran.png";
import borobudur from "./assets/borobudur.png";
import komang from "./assets/komang.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionThree() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".wrapper-1", {
      x: "80%",
      duration: 30,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".wrapper-trigger",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
        repeat: -1,
        repeatRefresh: true,
      },
    });

    gsap.to(".wrapper-2", {
      x: "-80%",
      duration: 30,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".wrapper-trigger",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
        repeat: -1,
        repeatRefresh: true,
      },
    });
  }, []);

  return (
    <div className="w-screen relative overflow-hidden h-full transition-all duration-700">
      <div className="wrapper-trigger flex flex-col max-w-screen mt-[10rem] mb-[64px] gap-[16px]">
        <div className="wrapper-1 inline-flex flex-row-reverse flex-nowrap max-w-screen items-center gap-[32px]">
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
        </div>
        <div className="wrapper-2 inline-flex flex-nowrap max-w-screen items-center gap-[32px] lg:-ml-0 -ml-[220px]">
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
          <img
            src={ukiran}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">ART</span>
          <img
            src={borobudur}
            alt="none"
            className="w-[259px] h-[122px] object-cover border-white border rounded-[16px]"
          />
          <span className="stroke-text">ARCHITECTURE</span>
          <img
            src={komang}
            alt="none"
            className="w-[259px] h-[122px] object-cover rounded-[16px] border-white border"
          />
          <span className="text-white text-[96px] font-bold">CULTURES</span>
        </div>
      </div>
    </div>
  );
}
