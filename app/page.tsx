import React from 'react'
import Hero from "../components/hero";
import Services from "../components/services";
import Process from "../components/ProcessSection";
import Testimonial from "../components/testimonial";
import Technology from "../components/technology";
import Faqs from "../components/faqs";
import Mind from "../components/mind";

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Process/>
      <Testimonial/>
      <Technology/>
      <Faqs/>
      <Mind/>
    </div>
  )
}

export default page