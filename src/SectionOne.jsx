import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'
import SectionTwo from './SectionTwo'

function SectionOne() {

  return (
    <div className='container mx-auto w-full h-full'>
      <Parallax pages={10} style={{ top: '0', left: '0' }} className="">

          <ParallaxLayer offset={0} speed={0.25}>
            {/* <img src={borobudur} className='h-screen w-full object-cover' /> */}
            <div className="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="artcrop"></div>
            {/* <img src={cropBorobudur} className='h-screen w-full object-cover' /> */}
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className='flex justify-center items-center h-screen'>
              <div>
                <p className="font-bold text-9xl mx-auto title-color transition">BOROBUDUR</p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25} style={{ }}>
            <div className='flex justify-center items-center h-screen'>
              <SectionTwo></SectionTwo>
            </div>
          </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default SectionOne
