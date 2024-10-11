'use client'
import Head from "next/head";

import SILSecondImage from "../../../public/Images/ADNOC.png";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function SILAssessment() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <div className="min-h-screen overflow-x-hidden bg-gray-100 py-8 px-4">
      <Head>
        <title>Emergency Systems Survivability Assessment (ESSA) Study</title>
        <meta
          name="description"
          content="Safety Integrity Level (SIL) Assessment Study"
        />
      </Head>

      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
        Emergency Systems Survivability Assessment (ESSA) Study
        </h1>

        {/* <Image
            src="/service/32.png"
            width="550"
            height="310"
            alt="HAZID"
           data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center  "
            // lg:order-last
          /> */}

        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4">{`What is Emergency Systems Survivability Assessment (ESSA) ?`}</h2>
          <p className="text-gray-700 mb-4">
            {`Emergency Systems Survivability Assessment (ESSA) is a critical evaluation process designed to ensure the resilience and effectiveness of emergency response systems in various industries, particularly in high-risk sectors such as oil and gas, chemical manufacturing, and power generation. The primary goal of ESSA is to assess how well emergency systems can withstand and function during adverse events, including natural disasters, equipment failures, and other crises.`}
          </p>
       
        </section>
        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4">{`When to perform ESSA ?`}</h2>
          <p className="text-gray-700 mb-4">
            {`The ESSA is an integral part of the risk management process to ensure that the risk is managed at tolerable levels and ALARP demonstrated for both project activities and operations.
Typically, Comprehensive ESSA is performed during the FEED Stage of the project and is later updated during the EPC (Detailed Engineering) Stage based on newly established information/data/engineering documentations etc.
`}
          </p>
       
        </section>
        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4">{`How it is performed? `}</h2>
          <p className="text-gray-700 mb-4">
            {`The survivability of each selected emergency systems is checked against three factors:.
`}
          </p>

          <ul>
            <li>
                {`•	Vulnerability - whether an emergency system can be impaired/damaged by the identified major accident and if so, whether it can survive long enough during the major accident and perform its intended function successfully`}

            </li>
            <li>
                {`•	Fail-safe  - when impaired, whether an emergency system will perform its intended function or not`}

            </li>
            <li>
                {`•	Redundancy   - whether there are auxiliary systems available to replace the main system if it is impaired`}

            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            {`TIf an emergency system is found not to be vulnerable to a major accident or if it is vulnerable but fails safe or has redundancy, it is deemed to be able to survive and capable of achieving its safety function. Otherwise, recommendations/action plans shall be proposed in order to improve its survivability.
`}
          </p>
          <p className="text-gray-700 mb-4">
            {`In order for ESSA to be effective, Project Fire and Explosion Risk Assessment (FERA) study shall assess each and every Safety Critical Element (SCE) for the adopted hazard end points in project.
`}
          </p>
       
        </section>


      
        <section data-aos="fade-up" data-aos-duration="1000" className="mb-8 ">
          

     

          <div className="flex items-center justify-center mt-5">
            <Image  data-aos="zoom-out-left" data-aos-duration="2000" src={SILSecondImage} />
          </div>
        </section>

     

    

      
    

        <section data-aos="fade-up" data-aos-duration="1000" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{`Action plan: `}</h2>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">Phase</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">Steps</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Preparatory Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Preparatory</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Understanding the scope:</strong>{` Scope of the study i.e. the physical limits of study shall be finalized as first `}</li>
                        <li><strong>	Development of Assumption register :</strong> {`include the details/assumptions in someplace of collected data, hazards identified, Drawings, methodology, hazard end points etc. And The study will be performed only after the approval of Assumption register by the Subject Matter Expert (SME) from design developer/Asset owner `} </li>
                        
                      </ol>
                    </td>
                  </tr>

                  {/* Execution/Examination Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Execution/Examination</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Identification of hazards:</strong>{`Examination phase begins with Identification of hazards identified from project FERA report by Aura Veritas’s ESSA expert`}</li>
                        <li><strong>	Assess Vulnerability, Fail Safe & Redundancy :</strong> {`Completion of review of ESSA systems against the criteria `}</li>
                        <li><strong>	Recommendations :</strong> {`made for any gaps found in assessment  `}</li>
                   
                      </ol>
                    </td>
                  </tr>

                  {/* Documentation Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Documentation</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Reporting:</strong> {`A detailed report which includes the introduction, objectives, regulatory requirements, methodologies, findings, recommendations and appended with the utilized data, drawings, will be submitted for SME’s approval within stipulated time frame and with utmost quality  `}</li>
                        <li> {`		Once the report is approved and close -out sheets will be issued to track recommendations closure status.  `}</li>
                        <li> {`		Regular follow-ups will be performed with design developer’s SME’s to monitor the progress`}</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Aura Veritas can help achieve your objective?</h2>
          <p className="text-gray-700 mb-4">
            {`Aura Veritas ESSA Experts are independent and experienced in performing more than 50+ ESSAs in their professional carrier, who understands your business and the challenges that comes within, shall perform quality assessments as a third party auditor or HSE specialists to achieve the aim of improving safety and ensuring compliance to relevant laws, codes and standards.`}
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
