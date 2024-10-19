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
          <title>ESG and GHG Accounting</title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          ESG and GHG Accounting
          </h1>

          <Image
          src="/Trainings/Trainings-ESG.jpg"
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
              <li>{`1.	Introduction to ESG`}</li>
              <li>{`2.	Introduction of Climate Change and GHG Mitigation`}</li>
              <li>{`3.	Sustainability Reporting as per GRI Standards`}</li>
              <li>{`4.	Business Responsibility and Sustainability Reporting`}</li>
              <li>{`5.	GHG Accounting and Verification`}</li>
              <li>{`6.	Waste Management and Circular Economy`}</li>
              <li>{`7.	Environmental and Social Impact Assesssment`}</li>
              <li>{`8.	Air and Noise Study`}</li>
              <li>{`9.	Energy Management as per ISO-50001-2018`}</li>
              <li>{`10. Carbon Disclosure Projects `}</li>
              <li>{`11.	Carbon Foot Print Management`}</li>
              <li>{`12. Climate Change and Nature based Solutions `}</li>
              <li>{`13.	Sustainable Development Goals and its Impacts `}</li>
             
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
