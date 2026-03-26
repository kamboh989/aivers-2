import React from 'react'
import Hero from "./hero";
import Faq from "./faq";
import Images from "./images";
import Services from "./services";


const page = () => {
  return (
    <div>
        <Hero/>
        <Faq/>
        <Images/>
        <Services/>
      
    </div>
  )
}

export default page