import { useEffect } from 'react';
import './App.css';
import ArtCrop from './assets/croppedborobudur.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SectionHeader() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.parallax', {
      y: -50,
      duration: 20, // Adjust the duration to control the speed of the parallax effect
      ease: "power2.inOut", // Use a smooth easing function
      scrollTrigger: {
        trigger: ".parallaxTrigger",
        scrub: true,
        start: "top top",
        end: "bottom center",
      }
    });

    gsap.to('.sub-text', {
      opacity: 0,
      duration: 20,
      ease: "power2.inOut",
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
          <div className='h-[100vh] w-full  flex justify-between items-center z-10 fixed gradient-background flex-col '>
            <div>
            </div>
            <div>
              <h2 className="text-5xl lg:text-9xl font-bold z-10 text-[#E4E1D4]">BOROBUDUR</h2>
            </div>
            <div className='flex justify-between w-full px-16'>
              <h2 className="text-[#E4E1D4] font-medium text-sm z-10 opacity-55 sub-text">-7.607355, 110.203804</h2>
              <div className='flex flex-col gap-4 items-center '>
                <h2 className="text-[#E4E1D4] font-medium text-sm z-10 opacity-55 sub-text">Scroll Down</h2>
                <div className='h-12 w-[0.5px] bg-[#E4E1D4] opacity-30 sub-text'></div>
              </div>
              <h2 className="text-[#E4E1D4] font-medium text-sm z-10 opacity-55 sub-text">Magelang, Indonesia</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
