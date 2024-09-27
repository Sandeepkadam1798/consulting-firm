
// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Image from "next/image";
// import windmill from "../../public/Images/windmill.png";
// import GradualSpacing from "@/components/magicui/gradual-spacing";
// import 'primeicons/primeicons.css';
// import ShineBorder from "@/components/magicui/shine-border";
// import { useTheme } from "next-themes";

// const Hero = () => {
//   const theme = useTheme();
//   const [videoError, setVideoError] = useState(false); // State to track video load error

//   const [text] = useTypewriter({
//     words: [
//       "Connecting People.",
//       "Ensuring Safety at Every Step.",
//       "Identifying Potential Risks.",
//       "Mitigating Hazards for a Safer Future.",
//       "Achieving ESG & Sustainability Goals.",
//     ],
//     loop: false,
//   });

//   // Services array with corresponding links
  // const services = [
  //   { name: "Safety & Risk Assessment", link: "/SafetyRiskAssessment" },
  //   { name: "ESG Decarbonisation", link: "/services/esg-decarbonisation" },
  //   { name: "Climate Change Services", link: "/services/climate-change" },
  //   { name: "Service 4", link: "/services/service-4" },
  //   { name: "Service 5", link: "/services/service-5" },
  //   { name: "Service 6", link: "/services/service-6" },
  // ];

//   return (
//     <div className="h-screen relative w-full overflow-hidden">
//       {/* Background video or fallback image */}
//       {videoError ? (
//         <Image
//           src={windmill}
//           alt="Fallback image"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//       ) : (
//         <video
//           muted
//           loop
//           autoPlay
//           className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
//           src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
//           onError={() => setVideoError(true)}
//         />
//       )}

//       {/* Overlay content */}
//       <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center gap-4">
//         {/* Company Name */}
//         {/* <h1
//           data-aos="fade-down"
//           className="text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-3xl capitalize leading-tight"
//         >
//           Aura Veritas Engineering & Consultancy Pvt. Ltd.
//         </h1> */}

//         <GradualSpacing
//       className="text-white font-bold text-xl sm:text-4xl whitespace-wrap md:text-5xl lg:text-4xl capitalize leading-tight"
//       text=" Aura Veritas Engineering & Consultancy Pvt. Ltd."
//     />

//         {/* Typewriter effect for tagline */}
//         <h2 className="text-[#fee60b] text-lg sm:text-xl md:text-2xl lg:text-xl font-medium">
//           {text} <Cursor cursorColor="white" />
//         </h2>

//         {/* Services with links */}
        // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 mt-8 max-w-5xl">
        //   {services.map((service, index) => (
             
        //     <Link
        //       key={index}
        //       href={service.link}
        //       className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-white text-small sm:text-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out"
        //     >
        //       <ShineBorder
        //      className=" capitalize flex whitespace-nowrap justify-between"
        //      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        //    > 
        //      {service.name}
        //      <span className="pi pi-arrow-right ml-2 text-sm"></span>
        //    </ShineBorder>
            
        //     </Link>
           
        //   ))}
        // </div> 

//         {/* Call to action buttons */}
//         <div className="flex sm:flex-row gap-4 sm:gap-6 mt-6">
//           <Link
//             href="/Contactus"
//             className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-primary/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//             prefetch={false}
//           >
//             Contact Us
//           </Link>
//           <Link
//             href="/aboutus"
//             className="inline-flex items-center justify-center rounded-md border border-primary-foreground px-6 py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-primary-foreground hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
//             prefetch={false}
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import windmill from "../../public/Images/windmill.png";
import GradualSpacing from "@/components/magicui/gradual-spacing";

const Hero = () => {
  const [videoError, setVideoError] = useState(false); // State to track video load error

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
    <div className="h-screen relative w-full overflow-hidden">
      {/* Background video or fallback image */}
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
          src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
          onError={() => setVideoError(true)} // Set videoError to true if video fails to load
        />
      )}

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
