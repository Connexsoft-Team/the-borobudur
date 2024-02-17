/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import sectiontwoimg from "../assets/sectiontwoimg.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function SectionTwo() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#image-cover", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power1.inOut",
      delay: 1,
      scrollTrigger: {
        trigger: "#image-cover",
        markers: true,
        start: "top center",
        end: "bottom center",
        scrub: true
      },
    });

  }, []);

  return (
    <div className="container mx-auto  w-full h-screen py-32">
      <div className="flex lg:flex-row flex-col px-[2rem] lg:px-[4rem] gap-8 items-center justify-between w-full">
        <div className="flex w-full h-full items-center justify-center">
          <div className="image-cover w-full h-[400px] lg:w-[515px] lg:h-[660px] object-cover rounded-[16px] overflow-hidden">
            <img
              src={sectiontwoimg}
              alt="none"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span id="secondary" className="text-[48px] md:text-[60px] lg:text-[96px] leading-normal lg:leading-[96px] font-bold text-[#E4E1D4]">
            World Heritage
          </span>
          <span id="text-animate" className="text-white/60 text-[16px] mt-[1rem] lg:mt-[2rem] font-semibold secondary">
            Between 780-840 AD, during the reign oaf the Sailendra dynasty, the grandest Buddhist relic ever known to mankind was erected. Serving both as a sanctuary for Buddhist devotion and a sacred pilgrimage site, this monumental structure held within its walls teachings guiding individuals to transcend worldly desires and embrace the path to enlightenment and wisdom as elucidated by the Buddha. In 1814, under the command of Sir Thomas Stanford Raffles, British troops stumbled upon this marvel, lost to time until then. It wasn't until 1835 that efforts were made to meticulously cleanse and restore the temple grounds to their former glory.
          </span>
        </div>
      </div>
    </div>
  );
}