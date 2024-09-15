"use client";
import React from 'react';
import { ard } from '../ui/card';
import Link from 'next/link';
import { motion } from "framer-motion";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


// Array of services with title, description, icon, and link
const services = [
  {
    id: 1,
    title: 'Hazard Identification (HAZID) Study',
    description: 'Comprehensive hazard identification to proactively manage risks.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/HazardIdentification', // Link to specific page
  },
  {
    id: 2,
    title: 'Hazard & Operability (HAZOP) Study',
    description: 'In-depth analysis of potential hazards and operability issues.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/HazardandOperability',
  },
  {
    id: 3,
    title: 'Safety Integrity Level Assessment',
    description: 'Determine the required Safety Integrity Level for your systems.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/SILAssessment',
  },
  {
    id: 4,
    title: 'Quantitative Risk Assessment',
    description: 'Comprehensive analysis of risks and their potential impacts.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/QuantitativeRiskAssessment',
  },
  {
    id: 5,
    title: 'Fire and Explosion Risk Assessment',
    description: 'Industry experience shows that fires or explosions in Oil & Gas',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/FERA-Assessment ',
  },
  
  {
    id: 6,
    title: 'ESG & Climate Change Services',
    description: 'Helping organizations achieve their environmental, social, and governance goals.',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/Esg-services',
  },
  {
    id: 7,
    title: 'Escape, Evacuation & Rescue Assessment',
    description: 'Industry experience shows that fires or explosions in Oil & Gas',
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: '/EERA-Assessment ',
  },
];

const OurServices = () => {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <section id="services" className="bg-slate-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div data-aos="fade-up" data-aos-duration="1500" className="animate-fade-up">
            <p className="text-xl lg:text-3xl md:text-3xl font-semibold leading-7 -tracking-tight">
              Our Services
              <span className='lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span>
            </p>

            <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-lg text-sm leading-7 text-gray-500">
              {`We offer a wide range of sustainability and risk assessment services to help organizations achieve their goals.`}
            </p>
          </div>
          <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5"
          
          initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}>
            
            {services.map(service => (
              <card 
                key={service.id} 
                
                className="p-4 flex flex-col justify-between h-[300px] w-full bg-white shadow-lg  transition"
              >

{/* hover:bg-slate-50 */}
{/*    hover:shadow-lg transition-shadow duration-300 */}
                <div className="flex flex-col items-center   ">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  <p className="text-muted-foreground mt-4">{service.description}</p>
                </div>
                <div className="mt-auto text-center">
                  <Link 
                    href={service.link} 
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                    rel="noopener noreferrer"
                  >
                    <div className="">
                    </div>
                    <p className='text-white transition-all duration-700 group-hover:text-[#36a39e]'>
                    Read More
                    </p>
                    
                  </Link>
{/* 
                  <Link href={"https://wa.link/f5qsnc"}>
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaWhatsapp
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link> */}

                </div>
              </card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

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
