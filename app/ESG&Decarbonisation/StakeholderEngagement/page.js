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
          <title> 	Stakeholder Engagement </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          	Stakeholder Engagement
          </h1>

          <Image
          src="/ESG-Decarbonisation/ESG-Stakeholder Engagement.jpg"
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
              {` Many Companies may pass the resolution to execute the Sustainability Solutions, but practically it is not achievable, as a Stakeholders of the Company are in a different opinion about the Sustainable Road map outcomes. M/s Aura Veritas will identify the gap between the stakeholders opinions and support your Sustainable Goals are achievable. `}
            </p>
        
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">


            <ul>
              <li>{`1.	Identification of Stakeholders `}</li>
              <li>{`2.	Prioritisation of Stakeholders based on Company Objective`}</li>
              <li>{`3.	Stakeholders Engagement as per AA1000`}</li>
              <li>{`4.	Consultation of Stakeholders Single way and Two Way`}</li>
              <li>{`5.	Involvement of Stakeholders and Monitor the Outcomes for Sustainable Projects`}</li>
              <li>{`6.	Monitor and Evaluation of their Contribution against the Sustainable Goals`}</li>
   
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
