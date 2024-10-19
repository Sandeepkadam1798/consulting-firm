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
          <title>ISO Management Trainings</title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          ISO Management Trainings
          </h1>

          <Image
          src="/Trainings/Trainings-ISO Management.jpg"
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
              <li>{`1.	ISO 14001:2018 Environmental Management System`}</li>
              <li>{`2.	ISO 45001:2018 Occupational Health and Safety Management`}</li>
              <li>{`3.	ISO 9001:2018 Quality Management System`}</li>
              <li>{`4.	ISO 14064:2006 Carbon Footprint Verification`}</li>
              <li>{`5.	ISO 50001:2018 Energy Management`}</li>
              <li>{`6.	ISO 14007 Environmental Management`}</li>
              <li>{`7.	ISO 14008 Environmental Monetary and Non-Monetary Cost Management`}</li>
              <li>{`8.	ISO 26000 Social Responsible Management`}</li>
              <li>{`9.	ISO 37301 Compliance Management System`}</li>
              <li>{`10.	ISO 27001: 2013 Information Security Management`}</li>
              <li>{`11.	ISO 14040 & 14044 Lifecycle Assessment Framework an Requirements`}</li>
              <li>{`12.	ISO 37001:2016 Anti-Bribery Management`}</li>
              <li>{`13.	ISO 20400: 2017 Sustainable Procurement Management Sustainability`}</li>
             
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
