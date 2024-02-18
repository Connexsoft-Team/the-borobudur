/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import visitthetemple from "./assets/visitthetemple.png";
import compas from "./assets/compas.png";
import telephone from "./assets/telephone.png";
import time from "./assets/time.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function SectionSix() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text-icon", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".text-visit",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    })

    gsap.to(".text-loc-1", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".text-icon",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    });

    gsap.to(".text-desc-1", {
      opacity: 0.7,
      scrollTrigger: {
        trigger: ".text-loc-1",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    });


    gsap.to(".text-loc-2", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".text-icon",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    });

    gsap.to(".text-desc-2", {
      opacity: 0.7,
      scrollTrigger: {
        trigger: ".text-loc-2",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    });

    gsap.to(".text-loc-3", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".text-icon",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    });

    gsap.to(".text-desc-3", {
      opacity: 0.7,
      scrollTrigger: {
        trigger: ".text-loc-1",
        scrub: true,
        start: "top center",
        end: "+=550px",
      }
    });


  }, []);

  return (
    <div className="container mx-auto w-full h-full py-16 ">
      <div className="flex flex-col justify-center items-center px-8">
        <img
          src={visitthetemple}
          alt="none"
          className="image-visit w-[600px] h-[400px] object-cover rounded-lg"
        />
        <span id="text1" className="text-visit text-[40px] lg:text-[48px] text-[#E4E1D4] font-bold mt-[32px]">
          Visit The Temple
        </span>
        <span className="text-visit text-[14px] lg:text-[16px] text-[#bdbbb0] text-center" id="mulai">
          Begin your journey to Borobudur by following a few simple steps.
        </span>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-8 lg:grid-cols-3 w-full gap-[35px] justify-between px-0 lg:px-[52px] h-screen py-16 items-center" >
          <div className="flex flex-col bg-[#302E2D] p-[32px] rounded-[16px] w-full items-center h-full">
            <img
              src={compas}
              alt="none"
              className="text-icon w-[67px] h-[67px] object-cover"
              style={{ opacity: 0 }}
            />
            <span className="text-loc-1 text-[40px] lg:text-[48px] text-[#E4E1D4] font-bold my-[16px]" style={{ opacity: 0 }}>
              Location
            </span>
            <div className=" text-center">
              <span className="text-desc-1 text-[16px] text-[#E4E1D4] text-center" style={{ opacity: 0 }}>
                The closest major cities to Borobudur, with international flights,
                are Semarang and Yogyakarta. These two cities accommodate flight
                routes from Kuala Lumpur and Singapore, but Yogyakarta (with a
                distance of 40 km from Borobudur) is closer than Semarang (with a
                distance of 90 km).
              </span>
              <br />
              <br />
              <span className="text-desc-1 text-[16px] text-[#E4E1D4] text-center mt-[16px]" style={{ opacity: 0 }}>
                The other closest city to Borobudur is Magelang with a distance of
                17 km, which has a direct bus route to Borobudur.
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-[#302E2D] p-[32px] rounded-[16px] w-full items-center h-full">
            <img
              src={time}
              alt="none"
              className="text-icon w-[51px] h-[71px] object-cover"
              style={{ opacity: 0 }}
            />
            <span className="text-loc-2 text-[40px] lg:text-[48px] text-[#E4E1D4] font-bold my-[16px]" style={{ opacity: 0 }}>
              Hours
            </span>
            <span className="text-desc-2 text-[16px] text-[#E4E1D4] text-center" style={{ opacity: 0 }}>
              Every Tuesday-Sunday, visitors can visit Zone 1 of Borobudur
              Temple (temple grounds/yard) at 08.30 - 15.30 WIB. It is not
              permitted to enter the room / climb the temple building. Every
              Monday, zone 1 (temple courtyard / courtyard) is closed for
              visits.
            </span>
          </div>
          <div className="flex flex-col bg-[#302E2D] p-[32px] rounded-[16px] w-full items-center h-full">
            <img
              src={telephone}
              alt="none"
              className="text-icon w-[63px] h-[64px] object-cover"
              style={{ opacity: 0 }}
            />
            <span className="text-loc-3 text-[40px] lg:text-[48px] text-[#E4E1D4] font-bold my-[16px]" style={{ opacity: 0 }}>
              Contact
            </span>
            <span className="text-desc-3 text-[16px] text-[#E4E1D4] text-center" style={{ opacity: 0 }}>
              Step into a realm where ancient whispers echo through time, where
              each stone tells a story of a bygone era — welcome to the
              enigmatic world of Borobudur.
            </span>
            <div className="flex flex-col gap-[16px] mt-[16px] items-center">
              <span className="text-desc-3 text-[16px] text-[#E4E1D4] font-bold" style={{ opacity: 0 }}>
                +62 811-2688-000
              </span>

              <span className="text-desc-3 text-[16px] text-[#E4E1D4] font-bold" style={{ opacity: 0 }}>
                marketing@borobudurpark.co.id
              </span>
              <span className="text-desc-3 text-[16px] text-[#E4E1D4] font-bold" style={{ opacity: 0 }}>
                info@borobudurpark.co.id
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
