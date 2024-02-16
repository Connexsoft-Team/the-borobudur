import React from 'react';
import khamadatu from '../assets/kamadhatu.png'
import rupadhatu from '../assets/rupadhatu.png'
import arupadhatu from '../assets/arupadhatu.png'


function SectionLevelBorobudur() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='py-8'>
        <h1 className='text-7xl title-color font-bold text-center '>THE BOROBUDUR LEVEL</h1>
      </div>
      <div className='p-16 flex gap-16 flex-col'>
        <div>
          <div className='flex w-full justify-center'>
            <img src={khamadatu} className='rounded-lg' />
            <div className='flex gap-4 flex-col px-16 justify-center'>
              <h1 className='text-6xl title-color font-bold'>Kamadhatu</h1>
              <p className='text-white/70 text-base'>Kamadhatu is the lowest level of Buddhist cosmology which is found on the 2nd floor at the foot of Borobudur Temple or the level above the terrace. In Buddhist cosmology, Kamadhatu symbolizes the lower realm which describes human behavior that is still bound by worldly desires. In simple terms, Kamadhatu is a natural symbol of the human world as seen today.
                In the Kamadhatu section there are 160 reliefs explaining the Karmawibhangga Sutra, namely the law of cause and effect. The relief is a depiction of human nature and desires, such as robbing, killing, raping, torture and slander.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='flex w-full'>
            <div className='flex gap-4 flex-col px-16  justify-center'>
              <h1 className='text-6xl title-color font-bold'>Rupadhatu</h1>
              <p className='text-white/70 text-base'>Rupadhatu is the central part of Buddhist cosmology which is found on floors 3 to 7 in the body of Borobudur Temple. In Buddhist cosmology, Rupadhatu symbolizes the realm between, where humans have begun to abandon worldly desires, but are still bound by the real world. In the Rupadhatu ajan section you can find several temple ornaments including, kala makara gate, statue niche, Buddha statue, jaladwara, ghana, keben, small stupas, and story reliefs. In this section there are also 1,212 symbolic decorative reliefs and 1,300 story reliefs. The story reliefs in the Rupadhatu section are the Lalitavistara, Jataka Avadana, and Gandawyuha reliefs.</p>
            </div>
            <img src={rupadhatu} className='rounded-lg' />
          </div>
        </div>
        <div>
          <div className='flex w-full'>
            <img src={arupadhatu} className='rounded-lg' />
            <div className='flex gap-4 flex-col px-16  justify-center'>
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
