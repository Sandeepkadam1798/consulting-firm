"use client";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Image from "next/image";

export default function ESGServices() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title>ESG & Climate Change Services</title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          ESG & Climate Change Services
          </h1>

          <Image
            src="/service/27.png"
            width="550"
            height="310"
            alt="SIL Assessment"
            
           data-aos="zoom-in-up"
           data-aos-duration="2000"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
          />


          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8 mt-6">
            <h2 className="text-2xl font-semibold mb-4">
            ESG Services:
            </h2>

          <ul>
            <li>
              {`1.	Sustainability Road Map development `}
            </li>
            <li>
              {`2.	Stakeholder Engagement  `}
            </li>
            <li>
              {`3.	Materiality Assessment `}
            </li>
            <li>
              {`4.	Sustainability Reporting `}
            </li>
            <li>
              {`5.	Business Responsibility and Sustainable Reporting `}
            </li>
            {/* <li>
              {`6.	Carbon Disclosure Project `}
            </li> */}
            <li>
              {`6.	TCFD & SASB Reporting `}
            </li>
          </ul>



       
          </section>

          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            1. Sustainability Road Map Development :
            </h2>

            <p className="text-gray-700 mb-4">
              {`Sustainable Road Map is important to all Organisation now a days as the Business relies on the Sustainable activities of the Company, Investments and Development is also based on how a company follows the Sustainability practises in their Products and Services. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`A road map which enables the Organisations to identify the sustainability opportunities and challenges, prioritize the actions, allocate the resources and track the path against the Objectives.  M/s Aura Veritas will support companies to prepare the Sustainability Road Map for their Initiative and Support them to achieve their Sustainable goals.  `}
            </p>

          <ul>
            <li>
              {`1.	Initial Survey and Understanding the Business `}
            </li>
            <li>
              {`2.	Define the Goal  `}
            </li>
            <li>
              {`3.	Identify the Key Performance Indicator’s based on Companies Outputs `}
            </li>
            <li>
              {`4.	Identify the Sustainable Objective, Policies to reduce environmental impacts.`}
            </li>
            <li>
              {`5.	Preparation of Sustainability Road Map for the Companies`}
            </li>
            <li>
              {`6.	Execution of Road Map Goals, Objectives, Policies of the Companies.`}
            </li>
            <li>
              {`7.	Monitoring and Evaluation of Sustainable Road map outcomes`}
            </li>
          </ul>



       
          </section>
          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            2. Stakeholder Engagement :
            </h2>

            <p className="text-gray-700 mb-4">
              {`Many Companies may pass the resolution to execute the Sustainability Solutions, but practically it is not achievable, as a Stakeholders of the Company are in a different opinion about the Sustainable Road map outcomes. M/s Aura Veritas will identify the gap between the stakeholders opinions and support your Sustainable Goals are achievable.`}
            </p>
            

          <ul>
            <li>
              {`1.	Identification of Stakeholders`}
            </li>
            <li>
              {`2.	Prioritisation of Stakeholders based on Company Objective `}
            </li>
            <li>
              {`3.	Stakeholders Engagement as per AA1000 `}
            </li>
            <li>
              {`4.	Consultation of Stakeholders Single way and Two Way`}
            </li>
            <li>
              {`5.	Involvement of Stakeholders and Monitor the Outcomes for Sustainable Projects`}
            </li>
            <li>
              {`6.	Monitor and Evaluation of their Contribution against the Sustainable Goals`}
            </li>
            
          </ul>



       
          </section>
          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            3.	Materiality Assessment :
            </h2>

            <p className="text-gray-700 mb-4">
              {`ESG Materiality Assessment is a Process to identify the Company ESG Issues which are more Critical and Important to address them. We M/s Aura Veritas helps companies to develop a plan to identify the ESG Issues.`}
            </p>
            

          <ul>
            <li>
              {`1.	Define the Purpose and Scope of the ESG in the Organisation`}
            </li>
            <li>
              {`2.	Identify the Potential ESG Topics in the Organisation `}
            </li>
            <li>
              {`3.	Categorise the ESG Topics based on ESG Goal  `}
            </li>
            <li>
              {`4.	Prioritise the Material Topics considering the Stakeholders and Business needs.`}
            </li>
            <li>
              {`5.	Analyse and Test the results of the Materiality Assessment within the Organisation`}
            </li>
            <li>
              {`6.	Feedback from all Stakeholders `}
            </li>
            
          </ul>



       
          </section>
          <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            4.	Sustainability Reporting :
            </h2>

            <p className="text-gray-700 mb-4">
              {`Every Company enhances Transparency, Accountability and Stakeholders Trust by disclosing their Organisation Environmental, Social, and Governance practises. We  M/s Aura Veritas will identify the social responsible investors, improve the risk management profile of the Organisation by providing the comprehensive Sustainability reporting via GRI, FASB, IFRS Standards and Tools.  `}
            </p>
            

          <ul>
            <li>
              {`1.	Engagement of Stakeholders`}
            </li>
            <li>
              {`2. Conduct Materiality Assessment`}
            </li>
            <li>
              {`3.	Data Collection and Analysing the data’s`}
            </li>
            <li>
              {`4.	Compiling the Report`}
            </li>
            <li>
              {`5.	Verify and Assurance `}
            </li>
            <li>
              {`6.	Communication`}
            </li>
            <li>
              {`7. Improve and Iterate`}
            </li>
            
          </ul>



       
          </section>
          <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            5. Business Responsibility and Sustainability Reporting :
            </h2>

            <p className="text-gray-700 mb-4">
              {`BRSR is the Framework created by SEBI- India to promote the Integration of sustainable and responsible practises within companies. India’s first ESG Frameworks and Disclosures applicable to first 1000 Corporates in India, BRSR reporting will be expanded soon to 10000 Corporates very soon. It consists of 3 Major disclosures which delivers the Non-Disclosure Finance risks within the Organisation and resolve the issues to combat Climate Change and meeting the SDG’s of the United Nation.  `}
            </p>
            

          <ul>
            <li>
              {`1.	General Disclosures`}
            </li>
            <li>
              {`2.	Management Disclosures `}
            </li>
            <li>
              {`3.	Principle Disclosures`}
            </li>
        
            
          </ul>



       
          </section>
         


          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            	6.	TCFD Reporting  :
            </h2>

            <p className="text-gray-700 mb-4">
              {`The TCFD was charged with developing a set of voluntary, consistent disclosure recommendations that companies could use to provide information about their climate-related financial risks. Each Organisation can analyse the risk due to Climatic Changes due to Physical risks and Transition Risks. We M/s Aura Veritas will deliver the below services   `}
            </p>
            

          <ul>
            <li>
              {`1.	Identification of Risks `}
            </li>
            <li>
              {`2.	Physical Climate risk metrics`}
            </li>
            <li>
              {`3.	Mapping of Climate related Risks`}
            </li>
            <li>
              {`4.	Manage and risk report services`}
            </li>
            <li>
              {`5.	Stewardship services  `}
            </li>
        
            
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
