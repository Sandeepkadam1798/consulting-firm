"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Client1 from "../../public/Images/Client1.jpeg"
import Client2 from "../../public/Images/Client2.jpeg"
import Client3 from "../../public/Images/Client3.jpeg"
import Client4 from "../../public/Images/Client4.jpeg"
import Client5 from "../../public/Images/Client5.jpeg"
import Client6 from "../../public/Images/Client6.jpeg"
import Client7 from "../../public/Images/Client7.jpeg"
import Client8 from "../../public/Images/Client8.jpeg"
import Client9 from "../../public/Images/Client9.jpeg"
import Client10 from "../../public/Images/Client10.jpeg"
import { motion } from "framer-motion";
import Link from "next/link";
import ShineBorder from "@/components/magicui/shine-border";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

// Array of services with title, description, icon, and link

const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: Client1,
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: Client2,
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client3,
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client4,
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client5,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client6,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client7,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client8,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client9,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: Client10,
    },
  ];
 
  
const services = [
  {
    id: 1,
    title: "Hazard Identification (HAZID) Study",
    description:
      "Comprehensive hazard identification to proactively manage risks.",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/HazardIdentification", // Link to specific page
  },
  {
    id: 2,
    title: "Hazard & Operability (HAZOP) Study",
    description:
      "In-depth analysis of potential hazards and operability issues.",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/HazardandOperability",
  },
  {
    id: 3,
    title: "Safety Integrity Level Assessment",
    description:
      "Determine the required Safety Integrity Level for your systems.",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/SILAssessment",
  },
  {
    id: 4,
    title: "Quantitative Risk Assessment",
    description: "Comprehensive analysis of risks and their potential impacts.",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/QuantitativeRiskAssessment",
  },
  {
    id: 5,
    title: "Fire and Explosion Risk Assessment",
    description:
      "Industry experience shows that fires or explosions in Oil & Gas",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/FERA-Assessment ",
  },

  {
    id: 6,
    title: "ESG & Climate Change Services",
    description:
      "Helping organizations achieve their environmental, social, and governance goals.",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/Esg-services",
  },
  {
    id: 7,
    title: "Escape, Evacuation & Rescue Assessment",
    description:
      "Industry experience shows that fires or explosions in Oil & Gas",
    icon: <HazeIcon className="w-12 h-12 text-primary" />,
    link: "/EERA-Assessment ",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);



const ReviewCard = ({ img, name, username, body }) => {
    return (
      <figure
        className={cn(
          "relative lg:h-48 md:h-36 md:w-36 lg:w-40  h-12 p-2 w-12   cursor-pointer overflow-hidden rounded-xl border  flex flex-row items-center justify-center",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center justify-center ">
          <Image
            className=" h-28 object-contain"
            height={100}
            width={100}
            alt={`${name}'s profile picture`}
            src={img}
          />
          
        </div>
        {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
      </figure>
    );
  };

const AboutUs = () => {
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
             About Us
              <span className="lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
              </span>
            </h2>
            <p className="max-w-[1100px] text-muted-foreground md:text-lg lg:text-lg text-sm leading-7 text-gray-500">
              {`Aura Veritas Engineering and Consulting firm registered in Chennai, India specialized in the field of Engineering Consulting Services , Environment Compliance Services, Safety & Risk Management Consulting Services , Sustainability Consulting Services, Auditing and Inspection Services, Asset Integrity Management, Training, Cyber Security, Technical Resourcing for all leading Energy, Infra, Logistics, Health Care and Manufacturing Industries`}
            </p>
            {/* <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-lg text-sm leading-7 text-gray-500">
              {`We believe in challenging ourselves and adding value to the rapidly changing energy industry. We believe in an individual approach as we understand each client has different needs. Together with you, we will find an optimal process to identify your needs and determine the best solutions.`}
            </p> */}
          </div>
        </motion.div>

        </div>
        <section className="flex flex-wrap justify-center mb-12 mt-8">
          {[
            { title: 'Sustainability Services', text: 'We help implement sustainable practices for long-term success.' },
            { title: 'Risk Assessment', text: 'We provide risk assessments for smooth business operations.' },
            { title: 'ESG Goals', text: 'Our team helps with ESG objectives for a responsible future.' }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full md:w-1/3 px-4 mb-8"
            >

<ShineBorder
            
             color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
           >
              <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
              </ShineBorder>
            </motion.div>
          ))}
        </section>

        {/* Mission Section with Scale Animation */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg  p-8  text-center"
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our mission is to guide organizations toward a sustainable and socially responsible future, ensuring that they thrive in an evolving market. We aim to create lasting positive impacts for both our clients and the planet.
          </p>
        </motion.section>

        {/* Team Members Section with Fade-in Animation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-12"
        >
         

          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our client</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
         
        </motion.section>


    

    </section>
  );
};

export default AboutUs;

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

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
