

"use client";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import windmill from "../../public/Images/windmill.png";
import React, { useState, useEffect } from "react";

import GradualSpacing from "@/components/magicui/gradual-spacing";

const Hero = () => {
  // const [videoError, setVideoError] = useState(false); // State to track video load error

  const [text] = useTypewriter({
    words: [
      "Connecting People.",
      "Ensuring Safety at Every Step.",
      "Identifying Potential Risks.",
      "Mitigating Hazards for a Safer Future.",
      "Achieving ESG & Sustainability Goals.",
    ],
    loop: false,
  });


  
  return (
    <div className="h-screen  relative w-full overflow-hidden">
      {/* Background video or fallback image */}
      {/* {videoError ? (
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
          src="https://res.cloudinary.com/diifdlgwr/video/upload/v1727889444/jyh1jj0bj45qbvk3iss6.mov"
          onError={() => setVideoError(true)} // Set videoError to true if video fails to load
        />
      )} */}

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4 text-center">
        {/* Main heading */}
        <h1  data-aos="fade-down" className="text-white font-bold text-2xl capitalize sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight md:leading-snug lg:leading-snug xl:leading-tight w-4/5 md:w-full lg:w-4/5">
          Aura Veritas Engineering & Consultancy Private Limited
        </h1>

        {/* Subheading */}
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-xs xl:text-2xl max-w-4xl">
          Empowering organizations to navigate the complexities of sustainability, risk assessment, and beyond.
        </p>

        {/* Typewriter effect */}
        <h2 className="text-[#fee60b] text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-medium">
          {text} <Cursor cursorColor="white" />
        </h2>

        {/* Buttons */}
        <div className="flex sm:flex-row gap-4 sm:gap-4 mt-4">
          <Link
            href="/Contactus"
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-primary/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Contact Us
          </Link>
          <Link
            href="/aboutus"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground px-6 py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-primary-foreground hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
