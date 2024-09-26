// "use client";
// import React from 'react';
// import { card } from '../../components/ui/card';
// import Link from 'next/link';
// import { motion } from "framer-motion";

// // Array of services with title, description, icon, and link
// const services = [
//   {
//     id: 1,
//     title: 'Hazard Identification (HAZID) Study',
//     description: 'Comprehensive hazard identification to proactively manage risks.',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/HazardIdentification', // Link to specific page
//   },
//   {
//     id: 2,
//     title: 'Hazard & Operability (HAZOP) Study',
//     description: 'In-depth analysis of potential hazards and operability issues.',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/HazardandOperability',
//   },
//   {
//     id: 3,
//     title: 'Safety Integrity Level Assessment',
//     description: 'Determine the required Safety Integrity Level for your systems.',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/SILAssessment',
//   },
//   {
//     id: 4,
//     title: 'Quantitative Risk Assessment',
//     description: 'Comprehensive analysis of risks and their potential impacts.',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/QuantitativeRiskAssessment',
//   },
//   {
//     id: 5,
//     title: 'Fire and Explosion Risk Assessment',
//     description: 'Industry experience shows that fires or explosions in Oil & Gas',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/FERA-Assessment ',
//   },
  
//   {
//     id: 6,
//     title: 'ESG & Climate Change Services',
//     description: 'Helping organizations achieve their environmental, social, and governance goals.',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/Esg-services',
//   },
//   {
//     id: 7,
//     title: 'Escape, Evacuation & Rescue Assessment',
//     description: 'Industry experience shows that fires or explosions in Oil & Gas',
//     icon: <HazeIcon className="w-12 h-12 text-primary" />,
//     link: '/EERA-Assessment ',
//   },
// ];

// const OurServices = () => {
//   return (
//     <section id="services" className="bg-slate-50 py-12 md:py-24 lg:py-10">
//       <div className="container px-4 md:px-6">
//         <div className="space-y-6">
//           <div className="animate-fade-up flex flex-col justify-center items-center">
//             <p className="text-2xl lg:text-3xl md:text-3xl font-semibold leading-7 -tracking-tight">
//               Our Services
//               <span className='lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span>
//             </p>

//             <p className=" text-muted-foreground md:text-lg lg:text-lg text-sm leading-7 text-gray-500">
//               {`We provide a broad array of sustainability and risk assessment solutions designed to support organizations in reaching their objectives.`}
//             </p>
//           </div>
//           <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
          
//           initial={{ opacity: 0.5, y: 100 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 1 }}>
            
//             {services.map(service => (
//           <card 
//           key={service.id}  
//           className="hover:bg-primary-foreground hover:text-white transform rounded-xl border-1 hover:border-2 border-primary duration-300 hover:scale-105 p-8 flex flex-col justify-between h-[300px] w-full bg-white shadow-lg transition"
//         >
//           <div className="flex flex-col items-center ">
//             {service.icon}
//             <h3 className="text-xl font-semibold mt-4 ">{service.title}</h3>
//             <p className="mt-4 ">{service.description}</p>
//           </div>
//           <div className="mt-auto text-center">
//             <Link 
//               href={service.link} 
//               className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark group transition-all duration-700 hover:border hover:border-primary justify-center items-center hover:bg-white hover:text-[#36a39e]"
//               rel="noopener noreferrer"
//             >
//               <p className='transition-all duration-700 group-hover:text-[#36a39e]'>
//                 Read More
//               </p>
//             </Link>
//           </div>
//         </card>
        
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurServices;

// function HazeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m5.2 6.2 1.4 1.4" />
//       <path d="M2 13h2" />
//       <path d="M20 13h2" />
//       <path d="m17.4 7.6 1.4-1.4" />
//       <path d="M22 17H2" />
//       <path d="M22 21H2" />
//       <path d="M16 13a4 4 0 0 0-8 0" />
//       <path d="M12 5V2.5" />
//     </svg>
//   );
// }




"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

// Array of services with title, description, icon, and link
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

const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="bg-white py-12 md:py-24 lg:py-10">
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
        <div  data-aos="fade-up-right" data-aos-duration="1000" className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div  className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">
              Safety & Risk Assessment
              </h3>
              <p className="text-muted-foreground">
                {`Our HAZID (Hazard Identification) services help organizations identify and assess potential risks,
                    enabling them to implement effective mitigation strategies.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Systematically identify and analyze the potential hazards of the facility.`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Concept & Front-End Engineering Design (FEED) stage`}
                </li>
                {/* <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Recommendations for risk mitigation
                    </li> */}
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="/SafetyRiskAssessment"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                    View
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* <Image
            src="/service/24.png"
            width="550"
            height="310"
            alt="HAZID"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          /> */}

<video
          muted
          loop
          autoPlay
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last brightness-50"
          src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
          onError={() => setVideoError(true)}
        />

        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000" className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {/* <Image
            src="/service/31.png"
            width="550"
            height="310"
            alt="HAZOP"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          /> */}
          <video
          muted
          loop
          autoPlay
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full  brightness-50"
          src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
          onError={() => setVideoError(true)}
        />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">{`ESG Decarbonisation`}</h3>
              <p className="text-muted-foreground">
                {`In-depth analysis of potential hazards and operability issues.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Concept & Front-End Engineering Design (FEED) stage`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Reviewing procedures or operational sequences`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Recommendations for process improvements`}
                </li>
              </ul>

              <div className="mt-auto text-center">
                <Link
                  href="/HazardandOperability"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                    View
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-duration="1000" className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">Climate Change Services</h3>
              <p className="text-muted-foreground">
             {`   Our SIL (Safety Integrity Level) Assessment services help
                organizations evaluate the safety and reliability of their
                systems, ensuring they meet industry standards and regulatory
                requirements.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {` Determination of required SIL levels`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {` Evaluation of existing safety systems`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Recommendations for SIL improvements`}
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="/SILAssessment"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                  View
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* <Image
            src="/service/32.png"
            width="550"
            height="310"
            alt="SIL Assessment"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          /> */}

<video
          muted
          loop
          autoPlay
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last brightness-50"
          src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
          onError={() => setVideoError(true)}
        />


        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000"  className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {/* <Image
            src="/service/29.png"
            width="550"
            height="310"
            alt="Quantitative Risk Assessment"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          /> */}

<video
          muted
          loop
          autoPlay
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full  brightness-50"
          src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
          onError={() => setVideoError(true)}
        />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">
                {`Service 4`}
              </h3>
              <p className="text-muted-foreground">
                {`Our Quantitative Risk Assessment services help organizations
                identify, analyze, and mitigate potential risks, ensuring the
                safety and reliability of their operations.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {`Quantifying the overall risk associated with a facility or activity.`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`identifying the main contributors to the overall risk.`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {`assisting in the identification of new alternatives.`}
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="/QuantitativeRiskAssessment"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                   View
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-right" data-aos-duration="1000"  className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">{`Service 5`}</h3>
              <p className="text-muted-foreground">
                {`Industry experience shows that fires or explosions in Oil & Gas and petrochemical facilities can result in extensive losses of property and lives.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Identifying potential fire and explosion hazards in a facility or during an activity.`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  { `Providing recommendations to minimize the severity of fires and explosions.`}
                </li>
                {/* <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {` Opportunities to reduce risks further from fire and explosion hazards.`}
                </li> */}
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="/FERA-Assessment"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                View
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* <Image
            src="/service/28.png"
            width="550"
            height="310"
            alt="ESG Services"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          /> */}

<video
          muted
          loop
          autoPlay
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last brightness-50"
          src="https://res.cloudinary.com/ddysmgao7/video/upload/v1725819706/1725818324627990_mkfrpn.mov"
          onError={() => setVideoError(true)}
        />
        
        </div>

        {/* <div  data-aos="fade-up-left" data-aos-duration="1000" className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/service/25.png"
            width="550"
            height="310"
            alt="Quantitative Risk Assessment"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">
                {`Escape, Evacuation and Rescue Assessment`}
              </h3>
              <p className="text-muted-foreground">
                {`Escape, Evacuation and Rescue Assessment (EERA) is a technique to assess the performance of the escape, evacuation and rescue (EER) measures and arrangements.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {`ALARM & COMMUNICATIONS`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`ESCAPE`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {`TEMPORARY REFUGE`}
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="/EERA-Assessment"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up-right" data-aos-duration="1000"  className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">{`ESG & Climate Change Services`}</h3>
              <p className="text-muted-foreground">
                {`Our ESG (Environmental, Social, and Governance) services help
                organizations integrate sustainability into their operations,
                driving long-term value and positive environmental and social
                impact.`}
              </p>
              <ul className="grid gap-2 text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                 {` ESG strategy development and implementation`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  {`Sustainability reporting and disclosure`}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                {`  Stakeholder engagement and materiality assessment`}
                </li>
              </ul>
              <div className="mt-auto text-center">
                <Link
                  href="/Esg-services"
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark  group transition-all duration-700 hover:border hover:border-primary justify-center items-center  hover:bg-white hover:text-[#36a39e]"
                  rel="noopener noreferrer"
                >
                  <div className=""></div>
                  <p className="text-white transition-all duration-700 group-hover:text-[#36a39e]">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/service/27.png"
            width="550"
            height="310"
            alt="ESG Services"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div> */}
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
