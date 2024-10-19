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
          <title> 		Materiality Assessment </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          Materiality Assessment
          </h1>

          <Image
          src="/ESG-Decarbonisation/ESG-Material Assesment.jpg"
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
              {`ESG Materiality Assessment is a Process to identify the Company ESG Issues which are more Critical and Important to address them. We M/s Aura Veritas helps companies to develop a plan to identify the ESG Issues. `}
            </p>
       
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">


            <ul>
              <li>{`1.	Define the Purpose and Scope of the ESG in the Organisation`}</li>
              <li>{`2.	Identify the Potential ESG Topics in the Organisation`}</li>
              <li>{`3.	Categorise the ESG Topics based on ESG Goal `}</li>
              <li>{`4.	Prioritise the Material Topics considering the Stakeholders and Business needs.`}</li>
              <li>{`5.	Analyse and Test the results of the Materiality Assessment within the Organisation`}</li>
              <li>{`6.	Feedback from all Stakeholders `}</li>
              
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
