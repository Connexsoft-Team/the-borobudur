import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sectiontwoimg from "./assets/sectiontwoimg.png"

export default function SectionCoba() {
  useEffect(() => {
    AOS.init({
      offset: 200, // Atur offset sesuai kebutuhan
      duration: 800, // Durasi animasi
      easing: "ease-in-sine", // Easing animasi
      once: false // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <>
      <div className="max-w-[1024px] p-4 text-white w-full mx-auto my-0" data-aos="fade-">
        hello world
      </div> 
    </>
);
}