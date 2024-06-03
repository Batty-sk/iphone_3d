import React, { useEffect } from 'react'
import Image from 'next/image'
import { camerImg,watchImg,rightImg } from '../utils'
import { Roboto } from 'next/font/google'
import gsap from "gsap"
import VideoCarosel from './VideoCarosel'




const roboto = Roboto({ subsets: ["greek"],weight:'400'});

const Carousel = () => {

    useEffect(()=>{
        gsap.to('#title',{opacity:1,y:0,duration:2})
        gsap.from('.item',{opacity:0,y:50})

        gsap.to('.item',{opacity:1,y:0,duration:1,stagger:0.5})
    },[])
  return (
<section className='md:h-[800px] h-[500px]  bg-zinc-900 overflow-hidden'>
    <div className='flex flex-col justify-center items-center max-w-full overflow-hidden '>
            <div className='flex md:w-[900px] sm:w-[400px] w-[200px] p-4 justify-center rounded-b-lg bg-black'>
                <Image  src={camerImg} height={40} width={40} alt='camera'  />
            </div>
        
    <div className='flex  md:flex-row flex-col justify-between md:items-center items-start w-full p-4 mt-5'>
        <h1 className={`text-4xl text-gray-400 ${roboto.className} font-bold opacity-0 `} id='title'>Get the highlights.</h1>
        <div className='flex gap-2 md:mt-5 mt-5 items-center'>
            <p className='text-blue-400 flex gap-3 border border-blue-300 p-3 item hover:bg-blue-950 cursor-pointer '>Watch the film
                <Image src={watchImg} height='' width='' alt='watch the film'></Image>
            </p>
            <p className='text-blue-400 flex gap-3 border border-blue-300 p-3 item hover:bg-blue-950 cursor-pointer '>Watch the event
                <Image src={rightImg} height='' width='' alt='watch the event'></Image>
            </p>
        </div>
        
    </div>
        
    </div>

        <VideoCarosel />

</section>  )
}

export default Carousel