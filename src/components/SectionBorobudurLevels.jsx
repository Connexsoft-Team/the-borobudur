import React, { useEffect } from 'react';
import khamadatu from '../assets/kamadhatu.png'
import rupadhatu from '../assets/rupadhatu.png'
import arupadhatu from '../assets/arupadhatu.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import ScrollToPlugin

function SectionLevelBorobudur() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        // Set up smooth scrolling
        gsap.defaults({ ease: "power2.out" });
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length ? window.scrollTo({ top: value, behavior: 'smooth' }) : window.pageYOffset || document.documentElement.scrollTop;
            },
        });

        // Animation for the title
        gsap.to(".title", {
            opacity: 1,
            y: 0,
            duration: 3, // Adjust the duration to make it slower
            scrollTrigger: {
                trigger: ".titletrigger",
                scrub: true,
                start: "top center",
                end: "bottom center",
            }
        });

        // Animation for Kamadhatu
        gsap.to(".kamadhatu", {
            opacity: 1,
            x: 0,
            duration: 20, // Adjust the duration to make it slower
            scrollTrigger: {
                trigger: ".kamatrigger",
                scrub: true,
                start: "top center",
                end: "bottom+50",
            }
        });

        // Animation for Rupadhatu
        gsap.to(".rupadhatu", {
            opacity: 1,
            x: 0,
            duration: 20, // Adjust the duration to make it slower
            scrollTrigger: {
                trigger: ".rupatrigger",
                scrub: true,
                start: "top center",
                end: "bottom+50", // Change the end position
            }
        });

        // Animation for Arupadhatu
        gsap.to(".arupadhatu", {
            opacity: 1,
            x: 0,
            duration: 20, // Adjust the duration to make it slower
            scrollTrigger: {
                trigger: ".arupatrigger",
                scrub: true,
                start: "top center",
                end: "bottom+50",
            }
        });

    }, []);

    return (
        <div className='flex flex-col justify-center items-center titletrigger py-32'>
            <div className='py-8 pt-16 '>
                <h1 className='title text-5xl lg:text-7xl title-color font-bold text-center opacity-0 transition-all duration-300 '>THE BOROBUDUR LEVEL</h1>
            </div>
            <div className='p-16 py-32 flex md:gap-0 gap-16 flex-col transition-all duration-500'>
                <div className=' kamatrigger relative h-screen gap-4 md:gap-0 flex justify-center items-center '>
                    <div className='kamadhatu flex md:flex-row flex-col w-full justify-center opacity-0 -translate-x-96'>
                        <img src={khamadatu} className='rounded-lg' />
                        <div className='flex gap-4 flex-col px-16 justify-center text-center md:text-start'>
                            <h1 className='text-6xl title-color font-bold'>Kamadhatu</h1>
                            <p className='text-white/70 text-base'>Kamadhatu is the lowest level of Buddhist cosmology which is found on the 2nd floor at the foot of Borobudur Temple or the level above the terrace. In Buddhist cosmology, Kamadhatu symbolizes the lower realm which describes human behavior that is still bound by worldly desires. In simple terms, Kamadhatu is a natural symbol of the human world as seen today.
                                In the Kamadhatu section there are 160 reliefs explaining the Karmawibhangga Sutra, namely the law of cause and effect. The relief is a depiction of human nature and desires, such as robbing, killing, raping, torture and slander.</p>
                        </div>
                    </div>
                </div>
                <div className=' rupatrigger relative  h-screen flex justify-center items-center '>
                    <div className='rupadhatu flex md:flex-row flex-col-reverse w-full justify-center opacity-0 translate-x-96 '>
                        <div className='flex gap-4 flex-col px-16  justify-center text-center md:text-start  '>
                            <h1 className='text-6xl title-color font-bold'>Rupadhatu</h1>
                            <p className='text-white/70 text-base'>Rupadhatu is the central part of Buddhist cosmology which is found on floors 3 to 7 in the body of Borobudur Temple. In Buddhist cosmology, Rupadhatu symbolizes the realm between, where humans have begun to abandon worldly desires, but are still bound by the real world. In the Rupadhatu ajan section you can find several temple ornaments including, kala makara gate, statue niche, Buddha statue, jaladwara, ghana, keben, small stupas, and story reliefs. In this section there are also 1,212 symbolic decorative reliefs and 1,300 story reliefs. The story reliefs in the Rupadhatu section are the Lalitavistara, Jataka Avadana, and Gandawyuha reliefs.</p>
                        </div>
                        <img src={rupadhatu} className='rounded-lg' />
                    </div>
                </div>
                <div className=' arupatrigger relative h-screen flex justify-center items-center '>
                    <div className='arupadhatu flex md:flex-row flex-col w-full justify-center opacity-0 -translate-x-96'>
                        <img src={arupadhatu} className='rounded-lg' />
                        <div className='flex gap-4 flex-col px-16  justify-center text-center md:text-start'>
                            <h1 className='text-6xl title-color font-bold'>Arupadhatu</h1>
                            <p className='text-white/70 text-base'>Arupadhatu is the peak part of Buddhist cosmology which is found on the 8th to 10th floors at the top of Borobudur Temple. In Buddhist cosmology, Arupadhatu is a symbol of the upper world, the highest place inhabited by the gods. Arupadhatu is also a depiction of intangible elements and a sign that the highest purity has been achieved by abandoning worldly desires. In this section you will find 72 circular stupas with holes, inverted bells, containing Buddha statues that lead to the outside of the temple. The largest stupa is at the top of Borobudur Temple with a diameter of 9.9 meters and a height of 42 m above the ground.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionLevelBorobudur;
