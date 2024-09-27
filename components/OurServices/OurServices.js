"use client";
import React from "react";
import { ard } from "../ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import ShineBorder from "@/components/magicui/shine-border";

// Array of services with title, description, icon, and link
const services = [
  { name: "Safety & Risk Assessment", link: "/SafetyRiskAssessment" },
  { name: "ESG Decarbonisation", link: "/ESG&Decarbonisation" },
  { name: "Climate Change Services", link: "/ClimateChange" },
  { name: "Service 4", link: "/" },
  { name: "Service 5", link: "/" },

];

const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="bg-white py-12 md:py-24 lg:py-24">
      <div className="container px-4 md:px-6">
        <motion.div  data-aos="fade-down"  className="flex flex-col items-center justify-center space-y-6 text-center" >
          <div className="space-y-2" >
            {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Services</div> */}
            <h2 className="text-xl lg:text-4xl md:text-3xl font-semibold leading-7 -tracking-tight">
              {" "}
              Our Services{" "}
              <span className="lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
              </span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-lg text-sm leading-7 text-gray-500">
              {`We offer a wide range of sustainability and risk assessment services to help organizations achieve their goals.`}
            </p>
          </div>
        </motion.div>
{/*      
        <div className="flex flex-col justify-start items-start gap-4 mt-8 ">
          {services.map((service, index) => (
             
            <Link
              key={index}
              href={service.link}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 text-white text-small sm:text-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-in-out "
            >
              <ShineBorder
             className=" capitalize flex whitespace-nowrap justify-between"
             color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
           > 
             {service.name}
             <span className="pi pi-arrow-right ml-2 text-sm"></span>
           </ShineBorder>
            
            </Link>
           
          ))}
        </div>  */}

<div data-aos="fade-up"  data-aos-duration="3000" className="flex flex-col mt-8 justify-center items-center space-y-2 mx-8">
          {services.map((service, index) => (
            <ShineBorder
            className="w-full  lg:w-[850px] mx-8 "
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          > 
            <Link
              key={index}
              href={service.link}
              className="  backdrop-blur-md rounded-lg p-4 border border-white/20 text-white text-small sm:text-xl font-semibold  hover:scale-105 transition-all duration-300 ease-in-out w-full flex justify-between items-center py-2 my-2 group"
            >
              <span className="text-gray-900  font-bold text-lg group-hover:text-black">
              
                {service.name}
                
              </span>
              <span className="text-gray-500 group-hover:text-black">
                <i className="pi pi-arrow-right"></i>
              </span>
            </Link>

            </ShineBorder>
          ))}
        </div>


      </div>
    </section>
  );
};

export default OurServices;
