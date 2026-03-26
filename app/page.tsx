import React from 'react'
import Hero from "../components/hero";
import Review from "../components/review";
import Box from "../components/box";
import Services from "../components/services";
import Process from "../components/ProcessSection";
import Card from '../components/cards'
import Testimonial from "../components/testimonial";
import TechPlatforms from "../components/technology";
import Mind from "../components/mind";

const page = () => {
  return (
    <div>
      <Hero/>
      <Review/>
      <Box/>
      <Services/>
      <Process/>
      <Card/>
      <Testimonial/>
      <TechPlatforms/>
      <Mind/>
    </div>
  )
}

export default page