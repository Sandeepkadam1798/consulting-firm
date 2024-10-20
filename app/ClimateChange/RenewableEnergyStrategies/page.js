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
          <title> Renewable Energy Strategies </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          Renewable Energy Strategies
          </h1>


          <Image
          src="/Climate/Climate Change- Renewable.jpg"
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
              {`We do support the most efficient and transparent ways of Renewable Energy Strategies such as `}
            </p>

            <ul>
              <li>{`1.	Invest in Solar Power and Engineering Support for Solar PV Design and Grid Design using PV Module.`}</li>
              <li>{`2.	Purchase of Renewable Energy Certificate through Third Party Consultants.`}</li>
              <li>{`3.	We Conduct Energy Audits and Implement the Strategies of Energy Efficiency Technologies to minimize the Carbon emission.`}</li>
              <li>{`4.	We do support as a Third Party Consultant to perform the Site Selection and Due-Diligence services. `}</li>
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
