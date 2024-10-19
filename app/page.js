"use client"


import AboutUs from "@/components/AboutUs/AboutUS";
// import Chatbot from "@/components/Chatbot/Chatbot";
import ContactFormMain from "@/components/Contactuscomponents/ContactFormMain";
import Hero from "@/components/Herocomponenets/Hero";
import Nav from "@/components/Navbarcomponents/Nav";
import OurServices from "@/components/OurServices/OurServices";
import Image from "next/image";

import windmill from "../public/Images/windmill.png"

import React, { useState,  } from "react";



export default function Home() {

  const [videoError, setVideoError] = useState(false); // State to track video load error


  return (
    <div className="relative">
    {/* Background video fixed to the homepage */}
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] -z-10">
      {videoError ? (
        <Image
          src={windmill}
          alt="Fallback image"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      ) : (
        <video
          muted
          loop
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          src="https://res.cloudinary.com/df0vnykyr/video/upload/v1729354959/acjizn8r2xqs1tuofpei.mov"
          onError={() => setVideoError(true)}
        />
      )}
    </div>
  
    {/* Components that will appear over the video */}
    <Hero />
    <OurServices />
    {/* <AboutUs /> */}
    <ContactFormMain />
    {/* <Chatbot /> */}
  </div>
  
  );
}
