"use client";
import Head from "next/head";
import EERAFirstImage from "../../../public/Images/EERAFirstImage.png";
import EERASecondImage from "../../../public/Images/EERASecondImage.png";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'; 

export default function Page() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <div className="overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title>Safety & Risk Assessment Trainings</title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          Safety & Risk Assessment Trainings
          </h1>

          <Image
          src="/Trainings/Trainings-Safety and Risk Assessment.jpg"
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          />


          <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8 mt-6">
            {/* <h2 className="text-2xl font-semibold mb-4">
              What is Escape, Evacuation and Rescue Assessment (EERA)?
            </h2> */}
            {/* <p className="text-gray-700 mb-4">
              {`Escape, Evacuation and Rescue Assessment (EERA) is a technique to assess the performance of the escape, evacuation and rescue (EER) measures and arrangements.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The objective of an EERA is to ensure that there are adequate measures at the facility to enable people to escape, muster, evacuate and be rescued in the event of a Major Accident`}
            </p> */}

            <ul>
              <li>{`1. Fundamental of occupational Health & Safety Manage Systems.`}</li>
              <li>{`2.	Near Miss Reporting`}</li>
              <li>{`3.	Integrating ISO 45001 to manage occupational Health & Safety`}</li>
              <li>{`4.	HAZWOPER`}</li>
              <li>{`5.	Incident Investigation & Reporting`}</li>
              <li>{`6.	Job Safety Analysis`}</li>
              <li>{`7.	Lockout & Tag outs`}</li>
              <li>{`8.	PPE Basics`}</li>
              <li>{`9.	Forklift Safety Training`}</li>
              <li>{`10.	Fire Prevention Training`}</li>
              <li>{`11.	Confined Space Entry`}</li>
              <li>{`13.	Chemical Handling & Storage`}</li>
              <li>{`14.	Corporate Emergency Response Plan`}</li>
              <li>{`15.	Electrical Safety`}</li>
              <li>{`16.	ESIA`}</li>
              <li>{`17.	Ergonomics`}</li>
              <li>{`18.	Excavation Safety`}</li>
              <li>{`19.	Fire Protection System in Oil & Gas`}</li>
              <li>{`20.	Fire Safety Management`}</li>
              <li>{`21.	First Aid`}</li>
              <li>{`22.	Hazard and Operability (HAZOP) Study`}</li>
              <li>{`23.	Safety Integrity Level (SIL) Study`}</li>
              <li>{`24.	Fire & Gas Mapping Study`}</li>
              <li>{`25.	Quantitative Risk Assessment (QRA)`}</li>
              <li>{`26.	Indoor Air Quality`}</li>
              <li>{`27.	Oil Spill Contingency`}</li>
              <li>{`28.	Introduction to Process Safety`}</li>
              <li>{`29.	Management of Change (MOC`}</li>
              <li>{`30.	Occupational Health & Risk Assessment`}</li>
              <li>{`31.	Permit to Work`}</li>
              <li>{`32.	Pre-Startup & Safety Review (PSSR)`}</li>
              <li>{`33.	Managing Safety Critical Equipment’s`}</li>
              <li>{`34.	Work at Height`}</li>
              <li>{`35.	Waste Management`}</li>
              <li>{`36.	Welding & Cutting`}</li>
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
