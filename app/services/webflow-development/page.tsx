import React from 'react'
import Hero from "./hero";
import Faq from "./faq";
import Imges from "./images";
import Services from "./services";
import Button from "./cta button";
const page = () => {
  return (
    <div>
        <Hero/>
        <Faq/>
        <Imges/>
        <Services/>
        <Button/>
    </div>
  )
}

export default page