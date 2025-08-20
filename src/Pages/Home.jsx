import React from 'react'
import Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import Aboutus from '../Components/Aboutus'
import Chooseus from "../Components/Chooseus"
import Testimonials from '../Components/Testimonials'
import GetInTouch from '../Components/Getintouch'
import Bennar from '../Components/Bennar'
import Cate from '../Components/Cate'
import MM from "../Images/MM.png"

import Timeline from "../Components/Timeline"
import ProcessSection from "../Components/ProcessSection"
import WheretoBuy from "../Components/WheretoBuy"
import Blog from "../Components/Blog"



const Home = () => {
  return (
    <div
  className="relative w-full min-h-auto bg-cover bg-center"
>
  {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}
  <div className="relative z-10 flex flex-col min-h-screen">
  <div id='home'>
        <Header />
     {/* <Timeline /> */}
     <Aboutus />
     <Carousel />
     <Bennar />
     <Chooseus />
     <ProcessSection />
     {/* <Cate />
     <Blog /> */}
     {/* <Testimonials /> */}
     {/* <WheretoBuy /> */}
     <GetInTouch />
    </div>
  </div>
</div>

    
  )
}

export default Home