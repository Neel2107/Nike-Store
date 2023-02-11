import React from "react";

const Hero = ({heroapi :{title, subtitle, btntext, img, sociallinks, videos}}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-0 z-10'></div>
        <div  className=" relative opacity-100 z-20 grid items-center justify-items-center nike-container" >
          <div className="grid items-center justify-items-center mt-28">
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            <button className="w-[10vh] h-[8vh] opacity-50">{btntext}</button>
            {/* <div></div>
            <div></div> */}
            </div>
            <div className="">
            <img src={img}
            className="w-[55vh]"
            alt="hero-img" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
