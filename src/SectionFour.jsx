/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionFour() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".motion-right", {
      x: "10%",
      scrollTrigger: {
        trigger: ".title-text",
        start: "-=400px",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".motion-left-1", {
      x: "-10%",
      scrollTrigger: {
        trigger: ".motion-right-1",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(".motion-right-2", {
      x: "10%",
      scrollTrigger: {
        trigger: ".motion-left-1",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

  }, [])
  
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center gap-[8px] overflow-x-hidden">
        <span className="title-text text-[#E4E1D4] text-[54px] lg:text-[64px] font-bold">
          GALLERY
        </span>
        <div className="motion-right motion-right-1 flex lg:flex-row flex-col gap-[8px]">
          <img
            src={image7}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
        </div>
        <div className="motion-left motion-left-1 flex gap-[8px]">
          <img
            src={image5}
            alt="image 1"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image1}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image2}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
        </div>
        <div className="motion-right motion-right-2 flex gap-[8px]">
          <img
            src={image4}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image3}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
        </div>
      </div>
    </div>
  );
}
