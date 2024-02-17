import { useEffect } from 'react';
import './App.css';
import ArtCrop from './assets/croppedborobudur.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SectionHeader() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.parallax', {
      y: -120, // Adjust the value for the desired parallax effect
      duration: 20, // Adjust the duration to control the speed of the parallax effect
      ease: "power2.inOut", // Use a smooth easing function
      scrollTrigger: {
        trigger: ".parallaxTrigger",
        scrub: true,
        start: "top top",
        end: "bottom center",
      }
    });

  }, []);

  return (
    <div className='h-[100vh] w-screen parallaxTrigger'>
      <div className='' id='artback'>
        <div className='parallax relative'>
          <img src={ArtCrop} className='w-screen h-[100vh] object-cover object-top fixed' />
          <div className='h-[100vh] w-full flex justify-center items-center z-10 fixed gradient-background'>
            <h2 className="text-white text-5xl lg:text-9xl font-bold z-10">BOROBUDUR</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
