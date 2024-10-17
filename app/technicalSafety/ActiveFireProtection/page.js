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
          Active Fire Protection
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
              {`Active fire protection is a group of fire protection systems that require some action or motion to initiate the system in the event of a fire. The action that results from active fire protection is initiated by some sort of alert or signal. The action itself will help contain, suppress, or extinguish a fire that has already started. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`Active fire protection systems such as water sprinkler and spray systems are widely used in the process industries for protection of storage vessels, process plant, loading installations and warehouses.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`By definition, active systems require to be switched on, either by manual or automatic means, to be effective. The most common forms of active fire protection`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Active Fire Protection is one of the HSE Critical (HSECES) aspects of facilities, meaning that systems performing this objective require specific focus during their lifecycle (design, procurement, installation, commissioning, operations & maintenance).`}
            </p>



            <h2 className="text-2xl font-semibold mb-4">Fire Hazard Assessment:</h2>
            <p className="text-gray-700 mb-4">
              {`A fire hazard assessment will determine the type of active fire protection system that will be required against escalation of a fire for process structures and related facility. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`This will ensure there is a clear understanding of the nature of potential fires and their location on the facility is known before decisions are made about the AFP systems most suitable to tackle them. `}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Components:</h2>
            <p className="text-gray-700 mb-4">
              {`An active fire protection system is a dormant system that needs to be activated in the case of a fire to perform its function (activation of water spray systems, deluge systems, sprinkler systems, fire water monitors, and gas-based fire suppression inside buildings).  `}
            </p>
            <p className="text-gray-700 mb-4">
              {`Common systems include fire water pumps, fire hydrants, monitors and hose reels for manual applications, and automatic water spray and deluge fire protection or water exposure cooling systems. `}
            </p>


<h2 className="text-2xl font-semibold mb-4">Design</h2>

            
            <p className="text-gray-700 mb-4">
                <strong>Fire Water Demand:</strong>
              {` It involved estimating quantity of water needed to suppress a fire in a particular area or facility. Calculating fire water demand involves considering factors such as the size and type fire potential equipment (i.e. Storage tanks, pressure vessel, transformer, pumps), potential fire hazards, occupancy, fire protection systems in place, and local fire safety regulations. `}
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Fire water Hydraulic Study:</strong>
              {` Fire water hydraulic studies are essential for designing effective fire protection systems in industrial and commercial settings. This study assess the water supply's capacity and pressure needed to meet fire flow demands, ensuring that firefighting systems can operate efficiently. By simulating various scenarios, Aura veritas’s Fire protection expert can determine optimal pipe sizes, pump requirements, and layout configurations.  `}
            </p>

            
            <p className="text-gray-700 mb-4">
              {`It includes performing network hydraulics, downstream deluge hydraulics and surge analysis.  `}
            </p>


            <p className="text-gray-700 mb-4">
                <strong>Fire Water Piping & Instrumentation Diagrams:</strong>
              {`Once the fire potential equipment’s fire protection methods are identified and hydraulic calculation are done, the solutions are implemented via P&ID preparation as first step. FW P&IDs shows the piping size, piping material class, pressure rating, instrumentation, number of spray/sprinklers and its distribution etc.  `}
            </p>

            <p className="text-gray-700 mb-4">
                <strong>Fire water layout: </strong>
              {`The piping discipline with FW P&IDs as inputs produce the FW routing layout on plot plan and technical safety will provide input in careful positioning of deluge valves as it is a Safety critical element.   `}
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Deliverables: </strong>
              {`The following deliverables are usually part of Fire protection engineering for a typical Oil and Gas facilities,  `}
            </p>

            <ul>
                <li>
                •	Active Fire Protection Philosophy
                </li>
                <li>
                •	Fire water Demand report
                </li>
                <li>

                •	Fire water Hydraulic study report

                </li>
                <li>
                •	Fire water P&IDs
                </li>
                <li>
                •	Specification for firefighting equipment
                </li>
                <li>
                •	Datasheets for firefighting equipment
                </li>
            </ul>



            <h2 className="text-2xl font-semibold mb-4">Applicable Codes & Standards</h2>
           <ul>
            <li>
            •	NFPA 10 - Standard for Portable Fire Extinguishers
                </li>
                <li>
                •	NFPA 11 - Standard for Low medium and High Expansion Foam 
                </li>
                <li>
                •	NFPA 15 - Standard for Water Spray Fixed Systems for Fire Protection
                </li>
                <li>
                •	NFPA 20 - Standard for Installation of Stationary Pumps for Fire Protection
                </li>
                <li>
                •	NFPA 22 - Water Tanks for Private Fire Protection
                </li>
                <li>
                •	API 2030 - Application of Fixed Water Spray Systems for Fire Protection in the Petroleum and Petrochemical Industries
                </li>
                <li>
                •	Energy Institute’s Model Code of Safe Practice Part 19: Fire precautions at petroleum refineries and bulk storage installations
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
