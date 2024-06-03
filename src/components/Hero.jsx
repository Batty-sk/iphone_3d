"use client"
import React from 'react'
import { heroVideo,smallHeroVideo } from '../utils'
import { MOBILE_VIEW } from '../utils/constants'
import { useEffect } from 'react'
import { useState } from 'react'
const Hero = () => {

    const [video,setVideo] = useState(heroVideo)
    console.log('video',video)
    const handleResize = () =>{
        console.log('eherherhe')
        const windowWidth = window.innerWidth;
        
        if (windowWidth < MOBILE_VIEW){
            console.log('setting video')
            setVideo(smallHeroVideo)
            return 
        }
        setVideo(heroVideo)
        
    }

    useEffect(()=>{

        if (typeof window == 'undefined') {
            return
        }

        window.addEventListener('resize',handleResize)
        console.log('event registered')
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    
  return (
    <section className='md:min-h-dvh h-[500px] flex flex-col items-center justify-center '>
        <div>
            <h1 className='md:text-3xl text-2xl font-sans font-semibold m-5  text-yellow-50'>iPhone 15 Pro</h1>
        </div>

        <div className='w-9/12 md:w-10/12'>
            <video className='pointer-events-none w-full' autoPlay={true} playsInline={true} muted >
                <source type='video/mp4' src={video}  />
            </video>
        </div>

        <div className='p-3 flex flex-col items-center justify-center'>
                <button className='p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 duration-300 hover:ease-in-out '>Buy Now</button>
            <span className=' p-3 mt-3 text-gray-50'>From 199$ or 299$ /month</span>
        </div>
    </section>
  )
}

export default Hero