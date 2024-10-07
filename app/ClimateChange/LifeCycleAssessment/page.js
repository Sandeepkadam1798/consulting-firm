"use client";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title> Life Cycle Assessment of Products and Services </title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
            Life Cycle Assessment of Products and Services
          </h1>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <p className="text-gray-700 mb-4">
              {`We do Life Cycle Assessment of Products and Services based on ISO 14040 and 14044. We perform Cradle to Grave Life Cycle Assessment for Products from Raw material till End of the Product. Main Phases of the LCA Technique as mentioned below  `}
            </p>

            <ul>
              <li>1. Goal and Scope definition</li>
              <li>2. Inventory Analysis</li>
              <li>3. Impact Assessment</li>
              <li>4. Interpretation</li>
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
