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
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".wrapper-4", {
      x: "-100%",
      ease: "power1.inOut",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".wrapper-trig",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
      },
    });

    gsap.to(".wrapper-5", {
      x: "100%",
      ease: "power1.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".wrapper-trig",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
      },
    });
    gsap.to(".wrapper-6", {
      x: "-120%",
      ease: "power1.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".wrap-t",
        start: "top center",
        end: "bottom center",
        scrub: 0.1,
      },
    });
  }, []);
  return (
    <div className="wrap-t w-screen h-full relative overflow-hidden">
      <div className="wrapper-trig flex flex-col items-center gap-[10px]">
        <span className="text-[#E4E1D4] text-[54px] lg:text-[64px] font-bold">
          GALLERY
        </span>
        <div className="wrapper-4 flex flex-row gap-[10px]">
          <img
            src={image4}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image5}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
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
          <img
            src={image5}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image4}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image2}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image5}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image4}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image5}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image4}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image2}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image4}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image2}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image5}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image4}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image2}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
        </div>
        <div className="wrapper-5 flex flex-row-reverse gap-[10px]">
          <img
            src={image1}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image6}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image4}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image1}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image6}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image4}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image1}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image2}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image7}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
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
            src={image7}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
          <img
            src={image6}
            alt="image 3"
            className="object-cover w-full h-[453px] lg:block hidden"
          />
        </div>
        <div className="wrapper-6 flex flex-row gap-[10px]">
          <img
            src={image3}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image3}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 1"
            className="object-cover w-full h-[453px]"
          />
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
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
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
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image3}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image3}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image6}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
          <img
            src={image7}
            alt="image 2"
            className="object-cover w-full h-[453px]"
          />
        </div>
      </div>
    </div>
  );
}