"use client";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Card } from "@/components/ui/card"

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Connecting People.",
      "Creating Memories.",
      "Creating Stories.",
      "Fulfilling Adventure.",
      "Spreading Happiness.",
    ],
    loop: false,
  });

  return (
    <div className="h-[24rem] md:h-[30rem]  relative w-full overflow-hidden">
      {/* Background video */}
      <video
        muted
        loop
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4 text-center">
        {/* Main heading */}
        <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl leading-tight md:leading-snug lg:leading-snug xl:leading-tight w-4/5 md:w-full lg:w-4/5">
          Consulting Firm
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
        <div className="flex  sm:flex-row gap-4 sm:gap-4 mt-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm md:text-base font-medium text-primary transition-colors hover:bg-primary/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground px-6 py-3 text-sm md:text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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


