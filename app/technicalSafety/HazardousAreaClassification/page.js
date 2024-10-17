'use client'
import Head from 'next/head';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HazardousArea from "../../../public/Images/HazardousArea.png"
export default function Page() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Fire and Gas (F&G) Detection </title>
        <meta name="description" content="HAZOP Study to identify and evaluate hazards and operability problems in processes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="   overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <div className=" px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white p-8 shadow-lg">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-[#0b8d7c] mb-8 animate-scale-up">
          Hazardous Area Classification (HAC)
          </h1>

          {/* <Image
          src={FireandGas}
          width="550"
          height="310"
          alt="HAZOP"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
        
           data-aos="zoom-in-up"
            data-aos-duration="2000"
           
          /> */}

      

<section data-aos="fade-up" data-aos-duration="1000"  className="mb-8  mt-8">
         


            <p className="text-gray-700 mb-4">
              {`A three-dimensional space in which a flammable atmosphere may be expected to be present at such frequencies so as to require special precautions for the construction of equipment and the control of other potential ignition sources”, as per Energy Institute’s Model code of safe practice Part 15 Area Classification for installations handling flammable fluids, 4th edition, June 2015 `}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why ?</h2>
            <p className="text-gray-700 mb-4">
              {`When electrical equipment is used in, around, or near an atmosphere that has flammable gases or vapors, flammable liquids, combustible dusts, ignitable fibers or flyings, there is always a possibility or risk that a fire or explosion might occur. Those areas where the possibility or risk of fire or explosion might occur due to an explosive atmosphere and/or mixture is often called a hazardous (or classified) location/area.  `}
            </p>
            <p className="text-gray-700 mb-4">
              {`According to the zones, suitable rated electrical and instruments are installed based on the zone it likely to be located. `}
            </p>
            
            <p className="text-gray-700 mb-4">
              {`Currently there are two systems used to classify these hazardous areas; the Class/Division system and the Zone system. Emerging practice is to adopt to Zone system based on Energy Institute’s Model code of safe practice Part 15 Area Classification for installations handling flammable fluids, 4th edition, June 2015, which is employed predominantly currently in industry. `}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Zone system:</h2>
            <p className="text-gray-700 mb-4">
              {`Hazardous locations per the Zone system are classified according to its Zone which can be gas or dust. For gas atmospheres electrical equipment is further divided into Groups and Subgroups. Zone—The Zone defines the probability of the hazardous material, gas or dust, being present in sufficient quantities to produce explosive or ignitable mixtures. `}
            </p>


            <h2 className="text-2xl font-semibold mb-4">How?</h2>
            <p className="text-gray-700 mb-4">
              {`Following methods are recommended based on (EI 15)`}
            </p>

                <ul>
                    <li>
                    1.	Direct example approach
                        </li>

                        <li>
                        2.	Point source 
                        </li>
                        <li>3.	Risk based </li>

                </ul>

                <p className="text-gray-700 mb-4">
              {`The overall methodology involves the following steps:`}
            </p>

            <ul>
                <li>
                    {  `•	Identification and classification of operating fluids category as per EI 15 categorization`}
                </li>
                <li>
                    {   `•	Identification of leak/release sources`}
                </li>
                <li>{`•	Determine grade of release (Primary, continuous and secondary) and category`}</li>
                <li>
                    {`•	Establish zone classification`}
                </li>
                <li>{`•	Determine hazard radius`}</li>
                <li>{`•	Assigning Temperature class`}</li>
            </ul>


        
        
            

       
            <h2 className="text-2xl font-semibold mb-4">
            Applicable Codes & Standards
            </h2>

<ul>

    <li>
        {`•	IEC 60079-10-1: Explosive atmospheres - Part 10-1: Classification of areas - Explosive gas atmospheres`}
    </li>
    <li>

        {`•	EI Model code of safe practice Part 1 - The selection, installation, inspection, maintenance of electrical and non-electrical apparatus in hazardous areas, 8th edition, June 2010`}
    </li>
<li>
    {`•	EI Model code of safe practice Part 15 - Area Classification for installations handling flammable fluids, 4th edition, June 2015`}
</li>
</ul>

<h2 className="text-2xl font-semibold mb-4">Deliverables:</h2>


<ul>
    <li>
    •	Hazardous area classification report 
    </li>
    <li>
    •	Hazardous area classification layout 
    </li>
</ul>


<div className="flex items-center justify-center mt-5">
              <Image data-aos="zoom-out-left" data-aos-duration="2000" src={HazardousArea} />
            </div>

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
