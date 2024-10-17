'use client'
import Head from 'next/head';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import FireandGas from "../../public/Images/FireandGas.png"
export default function CarbonDisclosureProject() {

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
          Fire and Gas (F&G) Detection 
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
              {`The primary role of a Fire and Gas detection system is to detect loss of containment of flammable and toxic material and the ignition resulting in fires to provide an early warning to operational and emergency response team personnel so that necessary action can be initiated to control the emergency and avoid escalation. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`Considering the flammable and toxic nature of the process streams in this plant, the selection of appropriate type of detectors, their location, voting logic and alarm is important for appropriate and effective design of the system. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`The fire & gas detection system shall perform the following three basic functions: `}
            </p>
            
            <p className="text-gray-700 mb-4">
              {`Monitoring: Continuous automatic monitoring of the environment for the presence of flammable and toxic vapour/gases and detection of fire (smoke, heat or flame) `}
            </p>
            <p className="text-gray-700 mb-4">
              {`Alarm: Initiate alarm to alert personnel to the presence of flammable and toxic vapour/gases and/or fire. `}
            </p>
            
            <p className="text-gray-700 mb-4">
              {`Protection: Initiates control signals to ESD or Fire Suppression systems or Deluge Systems to control the situation and prevent escalation of the event. `}
            </p>
            

       
            <h2 className="text-2xl font-semibold mb-4">
            Methodology
            </h2>

            <ul>
                <li>
                •	Definition & identification of fire & gas hazard zones for scope
                </li>
                <li>
                •	Definition of zone categories & zone grades
                </li>
                <li>
                •	Identification of the fire & gas hazard scenarios for scope
                </li>
                <li>
                •	Assigning zone category for each identified fire & gas hazard zone
                </li>
                <li>
                •	Defining the performance requirements for fire & gas detection
                </li>
                <li>
                •	Recommendations and findings from fire & gas study
                </li>
                <li>
                •	Proceed to develop Fire and Gas layout 
                </li>
            </ul>


            <h2 className="text-2xl font-semibold mb-4">
            Fire and Gas Mapping study:
            </h2>
            <p className="text-gray-700 mb-4">
              {`Fire & Gas detector coverage study shall be evaluated to confirm that the required detection criteria to provide the required alarms and control action have been met. The purpose of detector coverage assessment is to confirm that the selected detector layout complies with generally accepted industry performance targets if the system is correctly installed, operated and maintained. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`The detector layout shall be analyzed to determine how effective the proposed detector layout detectors with the given voting logic will be in detecting an incipient hazard and initiating a specified safety action. This analysis may reveal the need to improve coverage and / or reduce nuisance trips die to hardware failures.`}
            </p>


            <h2 className="text-2xl font-semibold mb-4">
            Applicable codes & Standards:
            </h2>

<ul>

    <li>
    •	BSI BS EN 54  - Fire Detection and Fire Alarm Systems
    </li>
    <li>
    •	BS 5839-1 - Fire detection and fire alarm systems for buildings Part 1 - Code of practice for design, installation, commissioning and maintenance of systems in non-domestic premises
    </li>
    <li>
    •	ISA TR 84.00.07 - Guidance on the Evaluation of Fire, Combustible Gas, and Toxic Gas System Effectiveness
    </li>
</ul>


<div className="flex items-center justify-center mt-5">
              <Image data-aos="zoom-out-left" data-aos-duration="2000" src={FireandGas} />
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
