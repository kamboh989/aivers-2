import React from 'react'
import Hero from "./hero";
import Faq from "./faq";
import Image from "./iamges";
import Services from "./services";
import Button from "./cta button";

const page = () => {
  return (
    <div>
        <Hero/>
        <Faq/>
        <Image/>
        <Services/>
        <Button/>
    </div>
  )
}

export default page