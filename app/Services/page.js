"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Simplified array with image URL and title
const services = [
  {
    id: 1,
    title: "ESG & Decarbonisation",
    image:
      "/Images/ESGVideo.MP4",
    link: "/ESG&Decarbonisation",
  },
  {
    id: 2,
    title: "Climate Change Services",
    image:
      "/Images/ClimateChangeVideo.MP4",
    link: "/ClimateChange",
  },
  {
    id: 3,
    title: "Safety & Risk Assessment",
    image:
      "/Images/SafetyVideo.MP4",
    link: "/SafetyRiskAssessment",
  },
  {
    id: 4,
    title: "Trainings & Auditing",
    image:
      "/Images/TrainingVideo.MP4",
    link: "/Trainings&Auditing",
  },
  {
    id: 5,
    title: "Engineering Services",
    image:
      "/Images/EngineeringVideo.MP4",
    link: "/EngineeringServices",
  },
  
];

const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="bg-white py-12 md:py-24 lg:py-10">
      <div className="container px-4 md:px-6">
      <motion.div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <div className="space-y-2">
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

        {/* Service Cards */}
        <div className="flex flex-col gap-8 mt-8 mx-4 ">
          {services.map((service) => (
            <Link href={service.link} key={service.id} className="  duration-300 hover:scale-105 transform ">
              <motion.div
                // whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden cursor-pointer "
                data-aos="fade-up"
              >
                {/* Image */}
                {/* <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover w-96 h-96"
                /> */}

                <video
                  muted
                  loop
                  autoPlay
                  src={service.image}
                  alt={service.title}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover h-96 object-center "

                  //  data-aos="zoom-in-up"
                  //   data-aos-duration="2000"
                />
                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
