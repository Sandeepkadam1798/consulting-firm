'use client'
import Head from 'next/head';
import Image from 'next/image';
import HazopMethodology  from "../../public/Images/HazopMethodology.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function HazopStudy() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>HAZOP Study - Aura Veritas</title>
        <meta name="description" content="HAZOP Study to identify and evaluate hazards and operability problems in processes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="   overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <div className=" px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white p-8 shadow-lg">
         
          <h1 className="text-4xl font-bold text-center text-[#0b8d7c] mb-8 animate-scale-up">
            Hazard and Operability (HAZOP) Study
          </h1>

          <Image
          src="/service/31.png"
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          />

          {/* Introduction Section */}
          <section data-aos="fade-up" className="mb-12 mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is HAZOP?</h2>
            <p className="text-gray-600 leading-relaxed">
              A Hazard and Operability (HAZOP) study is a structured and systematic examination of a planned or existing 
              process or operation in order to identify and evaluate problems that may represent risks to personnel, equipment, 
              environment, and reputation. In a HAZOP study, a multidisciplinary team uses a systematic approach to identify 
              hazards resulting from deviations in process design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The HAZOP study technique was pioneered by Imperial Chemical Industries in 1963, with the first guide published 
              in 1977. It has since become a critical part of project development, especially in the detailed design phase.
            </p>
          </section>

          {/* Why Perform HAZOP */}
          <section data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Perform HAZOP?</h2>
            <p className="text-gray-600 leading-relaxed">
              HAZOP studies provide a systematic way to improve plant safety by addressing technical and organizational 
              hazards, human errors, and external influences. The insights gained from a HAZOP study can enhance operational 
              safety, reduce malfunctions, and improve plant availability.
            </p>
          </section>

          {/* Industries Using HAZOP */}
          <section data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Which industries are employing HAZOP as an integral part in risk management?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Oil and Gas</li>
              <li>Nuclear</li>
              <li>Pharmaceutical</li>
              <li>Chemical</li>
              <li>Manufacturing</li>
            </ul>
          </section>

          {/* Types of HAZOP */}
          <section data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Are there different types of HAZOP?</h2>
            <p className="text-gray-600 leading-relaxed">
              The HAZOP technique was initially developed for plants and process systems but is now used in various areas:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Procedural HAZOP - Reviewing procedures or operational sequences (SAFe Operation study).</li>
              <li>Software HAZOP - Identifying errors in software development.</li>
            </ul>
          </section>

          {/* Objectives of HAZOP */}
          <section  data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What are the Objectives?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Identify deviations from system design and evaluate associated hazards and operability problems.</li>
              <li>Determine necessary actions to control these problems.</li>
              <li>Identify cases where more information is required for decision-making.</li>
            </ul>
          </section>

          {/* When HAZOP is Performed */}
          <section data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">When is HAZOP Performed?</h2>
            <p className="text-gray-600 leading-relaxed">
              HAZOP is generally performed during various stages of a project’s lifecycle, including Concept, FEED, 
              Detailed Design, and during modifications to an existing facility.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Concept & Front-End Engineering Design (FEED) stage</li>
              <li>Detailed Design Stage</li>
              <li>Operation / Modification Stage</li>
            </ul>
          </section>

          {/* How HAZOP is Performed */}
          <section data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How is HAZOP Performed?</h2>
            <p className="text-gray-600 leading-relaxed">
              The HAZOP study is conducted through a team-based brainstorming technique, guided by hazard guidewords and 
              benefiting from collective knowledge and experience. The process involves identifying deviations in design 
              and operability that affect Personnel, Environmental, Asset, and Reputation (PEAR).
            </p>
          </section>

          <section  data-aos="fade-up" className="  mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">HAZOP study will be executed in the following phases</h2>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border  border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">Phase</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">Steps</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Preparatory Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Preparatory</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Understanding the scope:</strong> Scope of the study shall be finalized.</li>
                        <li><strong>Data collection:</strong> Available data/deliverables are collected.</li>
                        <li><strong>Development of ToR:</strong> Create Terms of Reference document for approval.</li>
                      </ol>
                    </td>
                  </tr>

                  {/* Execution/Examination Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Execution/Examination</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Identification of hazards:</strong> Identify nodes and apply guidewords.</li>
                        <li><strong>Brainstorming:</strong> Identify deviations and evaluate risks.</li>
                        <li><strong>Recording:</strong> Document guidewords, deviations, causes, consequences.</li>
                        <li><strong>Recommendations:</strong> Suggest actions to address identified risks.</li>
                      </ol>
                    </td>
                  </tr>

                  {/* Documentation Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Documentation</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Reporting:</strong> Submit detailed report for approval.</li>
                        <li><strong>Follow-up:</strong> Track and follow up on recommendations.</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* A Brief Methodology of Study */}
          <section  data-aos="fade-up" className="mb-12">

            <div className='flex gap-4 justify-center items-center flex-col xl:flex-row sm:flex-row lg:flex-row'>
                <div>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">A brief methodology of study</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The study is conducted using the following methodology:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
              <li>Divide the system into nodes (e.g., Stripper column, Tank storage).</li>
              <li>Choose a study node (e.g., line, vessel, pump, operating instruction).</li>
              <li>Describe the design intent.</li>
              <li>Select a process parameter (e.g., Flow, pressure, temperature).</li>
              <li>Apply a guide-word (e.g., No, Low, High, Reverse).</li>
              <li>Determine cause(s).</li>
              <li>Evaluate end consequences and failure frequency of the causes.</li>
              <li>Recommend action: What? When? Who?</li>
              <li>Record information.</li>
              <li>Repeat the procedure.</li>
            </ol>

                </div>
                <div>
                <div className="flex justify-center  ">
              <Image
                src={HazopMethodology} // Add your image path here
                alt="HAZOP Methodology"
                // width={400}
                // height={400}
                className="rounded-lg shadow-lg "
                data-aos="zoom-out-left"
                data-aos-duration="1000"
              />
            </div>
                </div>
            </div>
           

            {/* Image Section */}
          
          </section>

          {/* Conclusion - How Aura Veritas Can Help */}
          <section data-aos="fade-up" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Aura Veritas Can Help</h2>
            <p className="text-gray-600 leading-relaxed">
              Aura Veritas engineers and technologists provide expertise to lead and facilitate HAZOP studies as independent 
              third-party auditors or HSE specialists, helping businesses improve safety and ensure compliance with relevant 
              laws, codes, and standards.
            </p>
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
