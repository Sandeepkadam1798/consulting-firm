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
          <title> 		Business Responsibility and Sustainability Reporting </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          	Business Responsibility and Sustainability Reporting
          </h1>

          <Image
          src="/ESG-Decarbonisation/ESG-Business Responsibility.jpg"
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
              {`BRSR is the Framework created by SEBI- India to promote the Integration of sustainable and responsible practises within companies. India’s first ESG Frameworks and Disclosures applicable to first 1000 Corporates in India, BRSR reporting will be expanded soon to 10000 Corporates very soon. It consists of 3 Major disclosures which delivers the Non-Disclosure Finance risks within the Organisation and resolve the issues to combat Climate Change and meeting the SDG’s of the United Nation. `}
            </p>
       
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">


            <ul>
              <li>{`1.	General Disclosures`}</li>
              <li>{`2.	Management Disclosures`}</li>
              <li>{`3.	Principle Disclosures `}</li>
         
              
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
