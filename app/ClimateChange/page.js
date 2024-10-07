"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

// Array of services with title, description, icon, and link
const services = [
  {
    id: 1,
    title: "	Carbon Footprint ",
    // description: 'Comprehensive hazard identification to proactively manage risks.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/ClimateChange/CarbonFootprint", // Link to specific page
  },
  {
    id: 2,
    title: "		Quantitative and Qualitative Climate Risk Assessment ",
    // description: 'Comprehensive hazard identification to proactively manage risks.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/ClimateChange/QuantitativeandQualitativeClimateRiskAssessment", // Link to specific page
  },
  {
    id: 3,
    title: "		Task Force on Climate -Related Financial Disclosures ",
    // description: 'Comprehensive hazard identification to proactively manage risks.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/ClimateChange/TaskForceonClimate", // Link to specific page
  },
  {
    id: 4,
    title: "	Life Cycle Assessment of Products and Services ",
    // description: 'Comprehensive hazard identification to proactively manage risks.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/ClimateChange/LifeCycleAssessment", // Link to specific page
  },
  {
    id: 4,
    title: "	Renewable Energy Strategies ",
    // description: 'Comprehensive hazard identification to proactively manage risks.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/ClimateChange/RenewableEnergyStrategies", // Link to specific page
  },
];

const page = () => {
  return (
    <section id="services" className="bg-slate-50 py-12 md:py-24 lg:py-10">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="animate-fade-up flex flex-col justify-center items-center">
            <p className="text-2xl lg:text-3xl md:text-3xl font-semibold leading-7 -tracking-tight">
              Climate Change Services
              <span className="lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
              </span>
            </p>

            {/* <p className=" text-muted-foreground md:text-lg lg:text-lg text-sm leading-7 text-gray-500">
              {`We provide a broad array of sustainability and risk assessment solutions designed to support organizations in reaching their objectives.`}
            </p> */}
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 py-4"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            {services.map((service) => (
              <card
                key={service.id}
                className="hover:bg-primary-foreground hover:text-white transform rounded-xl border-1 hover:border-2 border-primary duration-300 hover:scale-105 p-8 flex flex-col justify-between h-[300px] w-full bg-white shadow-lg transition"
              >
                <div className="flex flex-col items-center gap-4 ">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 text-center ">
                    {service.title}
                  </h3>

                  <Link
                    href={service.link}
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark group transition-all duration-700 hover:border hover:border-primary justify-center items-center hover:bg-white hover:text-[#36a39e]"
                    rel="noopener noreferrer"
                  >
                    <p className="transition-all duration-700 group-hover:text-[#36a39e]">
                      Read More
                    </p>
                  </Link>
                  {/* <p className="mt-4 ">{service.description}</p> */}
                </div>
              </card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default page;

function HazeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5.2 6.2 1.4 1.4" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
      <path d="m17.4 7.6 1.4-1.4" />
      <path d="M22 17H2" />
      <path d="M22 21H2" />
      <path d="M16 13a4 4 0 0 0-8 0" />
      <path d="M12 5V2.5" />
    </svg>
  );
}
