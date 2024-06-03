import React from 'react'
import { heroVideo } from '../utils'
const Hero = () => {
  return (
    <section className='min-h-dvh flex flex-col items-center justify-center'>
        <div>
            <h1 className='text-2xl font-semibold text-gray-300 '>iPHONE 15 Pro</h1>
        </div>

        <div className='w-9/12 md:w-10/12'>
            <video className='pointer-events-none w-full' autoPlay playsInline={true} muted >
                <source type='video/mp4' src={heroVideo}  />
            </video>
        </div>
    </section>
  )
}

export default Hero