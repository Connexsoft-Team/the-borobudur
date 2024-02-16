import React, { useEffect, useRef } from "react";
import visitthetemple from "./assets/visitthetemple.png";
import compas from "./assets/compas.png";
import telephone from "./assets/telephone.png";
import time from "./assets/time.png";
import envelope from "./assets/envelope.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

export default function SectionSix() {

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text-loc", {
      opacity: 1,
      // ease: "bounce",
      scrollTrigger: {
        trigger: ".gambar-b",
        scrub: true,
        markers: true,
        start: "top center",
        end:"bottom center",
      }
    });
  }, []);

  return (
    <div className="container-1 h-[200vh] mx-auto max-w-full w-full ">
      <div className="flex flex-col justify-center items-center">
        <img
          src={visitthetemple}
          alt="none"
          className="w-[400px] h-[300px] object-cover"
        />
        <span id="text1" className="text-[48px] text-white font-bold mt-[32px]">
          Visit The Temple
        </span>
        <span className="text-[16px] text-[#E4E1D4] mb-[32px]" id="mulai">
          Begin your journey to Borobudur by following a few simple steps.
        </span>
        <div className="flex w-full gap-[32px] px-[64px]">
          <div className="flex flex-col bg-[#302E2D] p-[32px] rounded-[16px] w-full items-center">
            <img
              src={compas}
              alt="none"
              className="gambar-b w-[67px] h-[67px] object-cover"
            />
            <span className="text-loc text-[48px] text-white font-bold my-[16px] opacity-0">
              Location
            </span>
            <span className="text-[16px] text-[#E4E1D4] text-center opacity-70">
              The closest major cities to Borobudur, with international flights,
              are Semarang and Yogyakarta. These two cities accommodate flight
              routes from Kuala Lumpur and Singapore, but Yogyakarta (with a
              distance of 40 km from Borobudur) is closer than Semarang (with a
              distance of 90 km).
            </span>
            <span className="text-[16px] text-[#E4E1D4] text-center mt-[16px] opacity-70">
              The other closest city to Borobudur is Magelang with a distance of
              17 km, which has a direct bus route to Borobudur.
            </span>
          </div>
          <div className="flex flex-col bg-[#302E2D] p-[32px] rounded-[16px] w-full items-center">
            <img
              src={time}
              alt="none"
              className="w-[51px] h-[71px] object-cover"
            />
            <span className="text-[48px] text-white font-bold my-[16px]">
              Hours
            </span>
            <span className="text-[16px] text-[#E4E1D4] text-center opacity-70">
              Every Tuesday-Sunday, visitors can visit Zone 1 of Borobudur
              Temple (temple grounds/yard) at 08.30 - 15.30 WIB. It is not
              permitted to enter the room / climb the temple building. Every
              Monday, zone 1 (temple courtyard / courtyard) is closed for
              visits.
            </span>
          </div>
          <div className="flex flex-col bg-[#302E2D] p-[32px] rounded-[16px] w-full items-center">
            <img
              src={telephone}
              alt="none"
              className="w-[63px] h-[64px] object-cover"
            />
            <span className="text-[48px] text-white font-bold my-[16px]">
              Contact
            </span>
            <span className="text-[16px] text-[#E4E1D4] text-center opacity-70">
              Step into a realm where ancient whispers echo through time, where
              each stone tells a story of a bygone era — welcome to the
              enigmatic world of Borobudur.
            </span>
            <div className="flex flex-col gap-[16px] mt-[16px] items-center">
              <span className="text-[16px] text-[#E4E1D4] font-bold">
                +62 811-2688-000
              </span>
              <img
                src={envelope}
                alt="none"
                className="w-[22px] h-[18px] object-cover"
              />
              <span className="text-[16px] text-[#E4E1D4] font-bold">
                marketing@borobudurpark.co.id
              </span>
              <span className="text-[16px] text-[#E4E1D4] font-bold">
                info@borobudurpark.co.id
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
