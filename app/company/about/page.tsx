import React from 'react'
import Hero from "./hero";
import About from "./aboutsec";
import Mission from "./mission";
import Vision from "./vision";

const page = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Mission/>
        <Vision/>
    </div>
  )
}

export default page