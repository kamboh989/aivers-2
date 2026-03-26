import React from 'react'
import Hero from "./hero";
import About from "./aboutsec";
import Mission from "./mission";
import Vision from "./vision";
import Meet from "./meetTeam";
import Together from "./together";
import Technology from "./technology";

const page = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Mission/>
        <Vision/>
        <Meet/>
        <Together/>
        <Technology/>
    </div>
  )
}

export default page