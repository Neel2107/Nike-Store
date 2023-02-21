import React from 'react'

const FlexContent = ({ endpoint : {title, subtitle, text, img, btn,heading, url}}) => {
  return (
    <>
    <div className={` flex items-center justify-between lg:flex-col lg:justify-center nike-container`}>
    <div className='max-w-lg lg:max-w-none w-full md:text-center'>
        <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={url}>
            <button className='' type='button'>{btn}</button>
        </a>
    </div>
    <div className=''>
        <img
        className=''
         src={img}
         alt={`img/${heading}`}
         />
    </div>
    </div>
    </>
  )
}

export default FlexContent