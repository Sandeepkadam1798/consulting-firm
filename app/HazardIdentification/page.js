"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Head>
        <title>HAZID Study - Aura Veritas</title>
        <meta
          name="description"
          content="HAZID Study conducted to identify potential hazards and threats in operations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">

        <h1 className="text-4xl font-bold text-center text-[#0b8d7c] mb-8 ">
            Hazard Identification (HAZID) Study
          </h1>

        <Image
            src="/service/24.png"
            width="550"
            height="310"
            alt="HAZID"
           data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center  "
            // lg:order-last
          />
          
        

          {/* Introduction Section */}
          <motion.section
            className="mb-12 mt-6"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              What is HAZID?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              HAZID, also known as Hazard Identification, is conducted to
              identify potential hazards and threats in a
              process/operation/activity with an aim to eliminate or reduce the
              hazards at the earliest practicable stage of development. It is a
              workshop-based qualitative risk analysis technique commonly used.
            </p>
          </motion.section>

          {/* Why Perform HAZID */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Why Perform HAZID?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Early identification of hazards facilitates early implementation
              of risk reduction measures, thus reducing impacts on cost and
              schedule compared to later implementation of risk reduction
              measures.
            </p>
          </motion.section>

          {/* Objectives Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Objectives of the HAZID Study
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Systematically identify and analyze the potential hazards of the
                facility.
              </li>
              <li>
                Identify the root causes and threats associated with each event.
              </li>
              <li>
                Identify all consequences of hazards, called Major Accident
                Hazard (MAH).
              </li>
              <li>
                Identify preventive/mitigation safeguards (controls) that are in
                place or in design.
              </li>
              <li>
                Identify additional risk reduction measures to eliminate hazards
                or bring risks to As Low As Reasonably Practicable (ALARP).
              </li>
              <li>
                Provide input to Management/Asset owner in its efforts to manage
                risks.
              </li>
            </ul>
          </motion.section>

          {/* When to Perform HAZID */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              When is HAZID Performed?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              HAZID is typically performed during various stages of the asset
              lifecycle, including the Concept & FEED stage, Detailed Design,
              Construction, Operation, and Decommissioning stages.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Concept & Front-End Engineering Design (FEED) stage</li>
              <li>Detailed Design Stage</li>
              <li>Construction Stage</li>
              <li>Operation Stage</li>
              <li>Decommissioning/Demolition Stage</li>
            </ul>
          </motion.section>

          {/* HAZID Study Process */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              How is HAZID Performed?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The HAZID is a team-based brainstorming technique, guided by
              hazard guidewords and benefiting from the collective knowledge of
              the team.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Study Phases:
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">Preparatory Phase:</span>{" "}
                Understanding the scope, data collection, and developing Terms
                of Reference (ToR).
              </li>
              <li>
                <span className="font-semibold">Execution Phase:</span>{" "}
                Identifying hazards, brainstorming, recording hazards, and
                making recommendations.
              </li>
              <li>
                <span className="font-semibold">Documentation Phase:</span>{" "}
                Reporting, approval, and follow-ups for tracking recommendation
                closures.
              </li>
            </ol>
          </motion.section>

          {/* Aura Veritas Contribution */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              How Aura Veritas Can Help
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Aura Veritas engineers and technologists provide expertise to lead
              and facilitate HAZID studies as independent third-party auditors
              or HSE specialists to achieve the study objectives.
            </p>
          </motion.section>
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

