import React from 'react'
import { hightlightsSlides } from '../utils/constants'
import { highlightFirstVideo } from '../utils'
const VideoCarosel = () => {
  return (
    <div className='flex h-full w-full  flex-nowrap '>
        {hightlightsSlides.map((item,id)=>(
            <div className='relative w-[80vw] h-[70vh] rounded-3xl mr-10 m-5 flex-shrink-0  bg-black' key={item.id}>
            <video className='pointer-events-none w-full ' autoPlay={true} playsInline={true} muted >
                <source type='video/mp4' src={item.video}  />
                </video>
            
            <div className='absolute top-10 left-[10%]'>
                <p>{item.textLists[0]}</p>
                <p>{item.textLists[1]}</p>
                <p>{item.textLists[2]}</p>


            </div>
                </div>
            
        )
        )}
        
    </div>
  )
}

export default VideoCarosel