"use client";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title> 	Sustainability Road Map Development </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          Sustainability Road Map Development 
          </h1>

          <Image
          src="/ESG-Decarbonisation/ESG-Road Development Plan.jpg"
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          />

      

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
        
            <p className="text-gray-700 mb-4">
              {`Sustainable Road Map is important to all Organisation now a days as the Business relies on the Sustainable activities of the Company, Investments and Development is also based on how a company follows the Sustainability practises in their Products and Services. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`A road map which enables the Organisations to identify the sustainability opportunities and challenges, prioritize the actions, allocate the resources and track the path against the Objectives.  M/s Aura Veritas will support companies to prepare the Sustainability Road Map for their Initiative and Support them to achieve their Sustainable goals.  `}
            </p>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">


            <ul>
              <li>{`1.	Initial Survey and Understanding the Business`}</li>
              <li>{`2.	Define the Goal `}</li>
              <li>{`3.	Identify the Key Performance Indicator’s based on Companies Outputs`}</li>
              <li>{`4.	Identify the Sustainable Objective, Policies to reduce environmental impacts.`}</li>
              <li>{`5.	Preparation of Sustainability Road Map for the Companies`}</li>
              <li>{`6.	Execution of Road Map Goals, Objectives, Policies of the Companies.`}</li>
              <li>{`7.	Monitoring and Evaluation of Sustainable Road map outcomes`}</li>
            </ul>
          </section>

   
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-slide {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateX(-50px);
        }

        .animate-scale-up {
          animation: scale-up 0.8s ease-in-out forwards;
        }

        @keyframes scale-up {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
