import React from 'react'
import {HeroDemo1} from "./hero";
import Selector from "./selector";
import Video from "./video";
import {CircularTestimonialsDemo} from "./image2";
import Car from "./volc-car";
import Jodan from "./jordan";
import ImageReveal from "./tiles";

const page = () => {
  return (
    <div>
      <HeroDemo1/>
      <Selector/>
      <Video/>
      <CircularTestimonialsDemo/>
      <Car/>
      <Jodan/>
        
      <ImageReveal
          leftImage="/project/key1.png"
          middleImage="/project/key2.png"
          rightImage="/project/key3.png"
      />
    </div>
  )
}

export default page