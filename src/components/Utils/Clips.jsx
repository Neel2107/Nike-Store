import React from 'react'

export const Clips = ({clip, imgsrc}) => {
  return (
    <>
    <div className='relative h-28 w-32 '>
        <img 
        src={imgsrc} 
        alt="img/clips"
        className='inset-0 flex h-full w-full object-cover' />
    </div>
    <video >
        <source 
        type='video/mp4'
        src={clip}
        />
       
    </video>
    
    </>
  )
}
