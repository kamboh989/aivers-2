import React from 'react'
import Hero from "./hero";
import Faq from "./faq";
import Image from "./iamges";
import Services from "./services";


const page = () => {
  return (
    <div>
        <Hero/>
        <Faq/>
        <Image/>
        <Services/>
        
    </div>
  )
}

export default page