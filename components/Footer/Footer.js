// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white py-6 text-center">
//     <p>&copy; 2024 Aura Veritas. All Rights Reserved.</p>
//   </footer>
//   )
// }

// export default Footer


"use client";
import { Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";


import FooterHero from "../../public/Images/FooterHero.JPG";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import "primeicons/primeicons.css";

const Footer = () => {
  //   const [email, setEmail] = useState("");
  //   const [subscribed, setSubscribed] = useState(false);
  //   const router = useRouter();

  //   const handleSubscribe = () => {
  //     // Simulate subscription process
  //     if (email) {
  //       // Here, you can integrate your actual subscription logic
  //       toast.success("Thank you for subscribing!");
  //       setEmail("");
  //     } else {
  //       toast.error("Please enter a valid email address.");
  //     }
  //   };

  return (
    <div className="w-full flex flex-col bg-primary-foreground">
     
      <footer
        className="md:py-12 lg:py-12 py-4 z-30 relative flex"
        style={{
          backgroundImage: `url(${FooterHero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="max-w-[1400px]  px-4 mx-auto">
          <div className="overflow-hidden filter bg-gradient-to-b from-slate-100/50 via-white/50 to-slate-200/50 backdrop-blur-md sticky z-10 p-10 shadow-lg border border-zinc-300 rounded-3xl px-4 md:px-6 grid grid-cols-1 lg:px-8 xl:px-12 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl text-gray-700 font-[500]">
                Our Vision
              </h3>
              <p className="text-gray-700  text-sm leading-6  -tracking-tight">
              {`Discover the world with Aura Veritas Engineering – we integrate industry-leading practices, including Hazard Identification (HAZID) Studies, Hazard & Operability (HAZOP) Studies, Safety Integrity Level Assessments, and Quantitative Risk Assessments `}
                <Link className="text-[#36a39e] hover:text-[#0b8d7c]" href="/aboutus">
                  More
                </Link>{" "}
              </p>
            </div>

            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
              <h3 className="text-lg md:text-xl text-gray-700 font-[500] ">
                Quick Link
              </h3>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                <Link
                  className="hover:text-primary-main text-sm max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/aboutus"
                >
                       About Us
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/blogs"
                >
                  Blogs
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/Services"
                >
                  Services
                </Link>
              
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/Contactus"
                >
                  Contact Us
                </Link>
                
              </div>
            </div>
            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
              <h3 className="text-lg md:text-xl text-gray-700 font-[500] __className_1fc36d">
                Our Services
              </h3>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-1 ">
                <Link
                  className="hover:text-primary flex gap-1 -mt-1 items-center  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/HazardIdentification"
                > Hazard Identification Study 
                
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/HazardandOperability"
                >
                 Hazard & Operability Study
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/SILAssessment"
                >
                 Safety Integrity Level Assessment
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/QuantitativeRiskAssessment"
                >
                 Quantitative Risk Assessment
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/FERA-Assessment"
                >
                Fire and Explosion Risk Assessment
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/Esg-services"
                >
               ESG & Climate Change Services
                </Link>
                <Link
                  className="hover:text-primary  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/EERA-Assessment"
                >
              Escape, Evacuation & Rescue Assessment
                </Link>
              </div>
            </div>
            <div className="space-y-4 text-sm md:pl-8 md:border-l-2 border-white/30">
              <div>
                <h3 className="text-lg md:text-xl text-gray-700 font-[500]">
                  Contact Us
                </h3>
                <p className="text-gray-700  mt-2">
                  Email :<span>ceo@auraveritas.in</span>
                </p>
                <p className="text-gray-700  ">
                  Phone : +91-9150547979 | +91-8939204319
                </p>
                <p className="text-gray-700 ">
                  Website :<span> www.Info.com</span>
                </p>
                <p className="text-gray-700 ">
                  Office :<span> Plot No: 46G, Bel Nagar, Manapakkam Chennai - 600125</span>
                </p>
                <div className="flex justify-center items-center w-full rounded-lg h-24  mt-20">
                  <div className="flex justify-around gap-2 items-center">
                    <Link
                      href={
                        "/"
                      }
                    >
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaInstagram
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>
                    <Link href={"/"}> <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                      <SlSocialFacebook
                        size={24}
                        className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                      />
                    </div> </Link>
                   
                    <Link href={"/"}>
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaWhatsapp
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="md:m-10 m-4 flex items-center justify-center  relative ">
        {/* <Image
          className="w-full object-fill h-80 rounded-lg "
          src={Conatctus}
          alt="Conatctus"
        /> */}

        <div className="text-center p-4">
          <h3 className="font-bold text-2xl md:text-4xl text-white">
         {` Aura Veritas Engineering & Consultancy Private Limited
          `}</h3>
          <p className="text-xs md:text-base text-white mt-2">
          {`Plot No: 46G, Bel Nagar, Manapakkam Chennai - 600125`}

          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-white gap-2 md:gap-10 mt-5">
            <p className="flex items-center">
              <i className="pi pi-envelope mr-1"></i>
              ceo@auraveritas.in
            </p>
            <p className="flex items-center">
              <i className="pi pi-phone mr-1"></i>
              +91-9150547979 | +91-8939204319
            </p>
            <p className="flex items-center">
              <i className="pi pi-globe mr-1"></i>
              <Link href="https://www.vakratundtours.com/">
                www.auraveritas.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    

      <div className="w-11/12 mx-auto z-10 bg-white md:mb-0 lg:mb-0 mb-8 ">
        <Divider orientation="horizontal" />
      </div>

      <p className="text-center mt-2 text-white mb-3 font-sans md:text-xs lg:text-xs text-tiny px-1 uppercase w-full">
        {` 2024 Aura Veritas Engineering & Consultancy Pvt LTD - All rights reserved.`}
      </p>

      
    </div>
  );
};

export default Footer;
