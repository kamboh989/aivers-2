

import React from 'react'
import Squares from "./patter";


const HeroSection = () => {

  

  return (  <>
    <section className="relative w-full  flex flex-col justify-center items-center overflow-hidden" 
             style={{ minHeight: "50vh" }}         >

      {/* Squares background */}
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(209, 213, 219, 0.3)"
        className="absolute inset-0 w-full h-full z-0"
      />



      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
      <h1
  className="font-bold text-4xl md:text-4xl lg:text-6xl text-gray-800"
  
>
  Our Latest Blog Posts
</h1>

      </div>

      

    </section>
    <hr className='text-gray-300'/>

    </>
  )
}

export default HeroSection;
