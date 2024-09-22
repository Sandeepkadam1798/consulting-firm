"use client";
import Head from "next/head";
import EERAFirstImage from "../../public/Images/EERAFirstImage.png";
import EERASecondImage from "../../public/Images/EERASecondImage.png";
import QRASecondImage from "../../public/Images/QRASecondImage.png";
import QRAThiredImage from "../../public/Images/QRAThiredImage.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'; 

export default function EERAAssessment() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <div className="overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title>Escape, Evacuation and Rescue Assessment (EERA) Study</title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
            Escape, Evacuation and Rescue Assessment (EERA) Study
          </h1>

          <Image
            src="/service/25.png"
            width="550"
            height="310"
            alt="SIL Assessment"
            
           data-aos="zoom-in-up"
           data-aos-duration="2000"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
          />


          <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8 mt-6">
            <h2 className="text-2xl font-semibold mb-4">
              What is Escape, Evacuation and Rescue Assessment (EERA)?
            </h2>
            <p className="text-gray-700 mb-4">
              {`Escape, Evacuation and Rescue Assessment (EERA) is a technique to assess the performance of the escape, evacuation and rescue (EER) measures and arrangements.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The objective of an EERA is to ensure that there are adequate measures at the facility to enable people to escape, muster, evacuate and be rescued in the event of a Major Accident`}
            </p>

            <ul>
              <li>{`•	Detection and alarm systems are in place to communicate the emergencies effectively.`}</li>
              <li>{`• Escape routes are available and useable under emergency conditions, from all work locations to the place where people muster.`}</li>
              <li>{`here are places where people can muster and /or take refuge with supporting systems while an emergency is being investigated and if needed while evacuation preparations are being made, which take into account the nature of the hazards that personnel may be exposed to.`}</li>
              <li>{`•	There are evacuation arrangements and effective support systems that are suitable to allow all people on the facility to be evacuated in a controlled manner under emergency conditions.`}</li>
              <li>{`•	There are arrangements to recover people who leave a facility in an emergency and transport them to a place of safety.`}</li>
              <li>{`•	Assessing opportunities to reduce risks further from fire and explosion hazards`}</li>
            </ul>
          </section>
          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              When to perform EERA ?
            </h2>
            <p className="text-gray-700 mb-4">
              {`The EERA is an integral part of the risk management process to ensure that the risk is managed at tolerable levels and ALARP demonstrated for both project activities and operations.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Typically, Comprehensive EERA is performed during the FEED Stage of the project and is later updated during the EPC (Detailed Engineering) Stage based on newly established information/data/engineering documentations etc. EPC FERA study also forms the basis for the operations and forms part of COMAH dossier.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`For existing facilities, where EERA is not available, it shall be carried out at the first available opportunity (earliest) and update the COMAH Dossier accordingly as per UK HSE.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`As part of COMAH update, EERA shall be reviewed to determine if significant changes to facilities, fire protection measures & supporting system, manning, buildings, etc. are observed or carried out. EERA study shall be updated to address these changes to ensure assessment reflect the updated changes, fire protection measures and supporting systems. COMAH Dossier shall be updated and approved accordingly, as per COMAH regulations 2015.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Where no significant changes are identified over five years and outcome of previous EERA report is still applicable and technically robust, no update of EERA is required. In such case, the organisation shall develop technical note justifying the same with relevant supporting documents (such as HAZID, risk register review, risk assessments, MOC, etc.) and shall submit for regulatory approval along with previous EERA report as part of COMAH process.`}
            </p>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8 ">
            <h2 className="text-2xl font-semibold mb-4">
              How it is performed?{" "}
            </h2>

            <p className="text-gray-700 mb-4">
              {`EERA is goal-based assessment where goals are set for escape, evacuation rescue provisions and supporting systems such as detection, alarm and communications, etc. An assessment is carried out to determine if these goals are achieved for the identified Major Accident Hazards (MAHs). The goals are set to ensure that each aspect of Escape, Evacuation and Rescue (EER) are designed robustly and performs effectively within the required timeframe to allow all personnel to safely escape, muster, evacuate and be rescued to a safe place.`}
            </p>

            <p className="text-gray-700 mb-4">{`A typical methodology for performing EERA is presented in the following Figure. Each step of the methodology is further discussed in the following sections`}</p>

            <div className="flex items-center justify-center mt-5">
              <Image data-aos="zoom-out-left" data-aos-duration="2000" src={EERAFirstImage} />
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Step 1: Hazard identification -</strong>
              {`The development of Major Accidents from consideration of the Major Accident Hazards (MAHs) present at the facility must be clearly identified.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Hazard identification workshops such as HAZID, HAZOP and other safety studies such as Fire and Explosion Risk Assessment (FERA), etc., are conducted before commencing EERA study, and the outcome of Hazard Identification studies & safety studies scenarios form input for the EERA study. Typical MAH against which EER measures needs to be assessed are as below.`}
            </p>

            <ol className="ml-2 " >
              <li className=""> {`1. Loss of containment of flammable or toxic material`}</li>
              <li className=""> {`2. Loss of containment of asphyxiating agents`}</li>
              <li className=""> {`3. Drilling Incidents/Blowouts`} </li>
              <li className=""> {`4. I	Dropped Objects`} </li>
              <li className=""> {`5.	Structural Collapse`} </li>
              <li className=""> {`6.	Ship collision`} </li>
              <li className=""> {`7.	Third party impact`} </li>
              <li className=""> {`8.	Loading/Unloading operations`} </li>
              <li className=""> {`9.	Dust explosions`} </li>
              <li className=""> {`10. By-products from fire and or explosion (smoke, CO2, heat, etc.)`} </li>
              <li className=""> {`11.	Building fires, etc`} </li>
            </ol>

            <p className="text-gray-700 mb-4">
              {`EERA study shall highlight the detailed MAH list (equipment specific/isolatable section specific/etc.) and associated consequence in a tabular format. Typical table format is shows below.`}
            </p>

            <div className="flex items-center justify-center mt-5">
              <Image data-aos="zoom-out-left" data-aos-duration="2000"   src={EERASecondImage} />
            </div>



            <p className="text-gray-700 mb-4">
              <strong>
                Step 2: Impairment criteria -
              </strong>
              {` Impairment criteria represents the conditions at which EER measures or supporting systems are rendered or becomes ineffective due to potential Major Accident.`}
            </p>

            <p className="text-gray-700 mb-4">
             
              {`The EER measures and supporting systems shall be assessed against the impairment criteria provided in project assumption register using the consequence and risk results of safety studies such as FERA, QRA, CFD studies etc. to ensure that the EER measures remain available in the event of credible Major Accident (25mm release for consequence and defined design accidental loads) for the required duration. Where EERA identifies that availability of EER measure cannot be assured, additional protection and or alternative EER measures shall be provided.`}
            </p>

          
            <p className="text-gray-700 mb-4 ">
              <strong>{`Step 3: Goal Assessment –`}</strong>
              {` Upon completion of review of EER systems against impairment criteria, and determination of required endurance period of the EER systems, the EER systems can be assessed for its adequacy based on the six goals set in following table. While assessing the goals impact/impairment from Major Accident arising from new facilities as well as from existing facilities shall be considered. While assessing the goals for modification, brownfield projects, extension projects, etc. the integrated approach shall be taken and EER system & goal shall be considered as whole and not as standalone elements. (e.g. for extension of the decks, not only escape routes but all existing EER measures, endurance time, etc. shall be revisited and re-evaluated.) The following EER goals shall be assessed for all facilities EER measures and supporting systems against each Major Accident scenario.`}
            </p>
           

    

          </section>

          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-12">
            

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">
                      Goal
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">
                    Definition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Preparatory Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                    Goal 1
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p className="">
                        {`ALARM & COMMUNICATIONS:`}
                      </p>
                      <ol className=" list-inside">
                        <li>
                          
                          {`•	There shall be adequate means to alert personnel of the emergency and advise them to immediately escape to the designated muster areas or place of refuge or safety`}
                        </li>
                        <li>
                          
                          {`•	There are adequate means to communicate with emergency control centre (at site and onshore/ HQ) for support.`}
                        </li>
                       
                       
                      </ol>
                    </td>
                  </tr>

                  {/* Execution/Examination Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                    Goal 2
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{ `ESCAPE`}</p>
                      <ol className=" list-inside">
                        <li>
                        
                          {`Safe and rapid movement of persons on the installation/facility from wherever they are located to muster areas OR Temporary Refuge and from muster areas/TR to evacuation points to aid successful Emergency Response.`}
                        </li>
                       
                      </ol>
                    </td>
                  </tr>

                  {/* Documentation Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                  Goal 3
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{`MUSTER`}</p>

                      <p className="mt-1 mb-1">{`Muster is a place where people can muster while investigations, ER and evacuation preparations are undertaken. The muster area must have sufficient capacity to protect the maximum capacity of the personnel in the installation /facility. Muster area can be an enclosure, more than one enclosure, or a designated open area on the deck/facility. Where, mustering area is enclosed, it is also known temporary refuge.`}</p>
                      <p className="mt-1 mb-1">{`The Goal assessment requires demonstration that Muster locations are designed and operated such that they maintain the safety of personnel during the period required for the evacuation process to be completed.`}</p>
             
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                  Goal 4
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{`TEMPORARY REFUGE`}</p>

                      <p className="mt-1 mb-1">{`Refuge is an enclosed place where people can muster while investigations, ER and evacuation preparations are being undertaken. The refuge shall have sufficient capacity to protect the maximum capacity of the personnel in the installation/facility.`}</p>
                      <p className="mt-1 mb-1">{`The Goal assessment requires demonstration that temporary refuge are designed and operated such that they maintain the safety of personnel for the period until evacuation process is completed.`}</p>
             
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                  Goal 5
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{`EVACUATION`}</p>

                      <p className="mt-1 mb-1">{`There must be sufficient means of evacuation available to enable all personnel to safely evacuate the facility when necessary. This goal corresponds to the provision of evacuation means such as lifeboats, life rafts, rope ladders for offshore locations and vehicles for onshore locations to enable personnel to flee to safety when required.`}</p>
                      
             
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                  Goal 6
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{`RESCUE`}</p>

                      <p className="mt-1 mb-1">{`The evacuation and escape process is only complete when all personnel reach a place of safety that is provided with suitable medical facilities.
This goal requires that facilities are available to rescue personnel who evacuated from the facility and immediately transfer them to a place of safety. A place of safety is defined as a place where evacuees are no longer exposed to the hazards at the facility.
`}</p>
                      
             
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>



          <section data-aos="fade-up" data-aos-duration="1000"  className="mb-12">

            <p className=" mb-4">{`The following performance criteria shall be used while carrying out the goal assessment.`}</p>
            

            {/* Table Section */}
            <div className="overflow-x-auto">

              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">
                    Achievement of EER Goals
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">
                    Definition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Preparatory Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                 {`   "Achieved"`}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p className="">
                        {`The goal is achieved in all credible scenarios.`}
                      </p>
                 
                    </td>
                  </tr>

                  {/* Execution/Examination Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                  {`"Limited"`}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{ `The intent is met for most credible cases but a number of credible cases exist where the intent is not met such that the goal cannot be regarded as being completely achieved.`}</p>
                     
                    </td>
                  </tr>

                  {/* Documentation Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                    {`"Not achieved"`}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <p>{`The intent cannot be met for most of the credible cases and the goal to be considered as ‘not achieved’ for defined credible scenarios.`}</p>

                      
             
                    </td>

                    </tr>
                  
                </tbody>
              </table>
            </div>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{`Action plan: `}</h2>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">
                    Phase
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">
                    Steps
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Preparatory Phase */}
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                    Preparatory
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    <ol className="">
                      <li>
                        <strong>1. Understanding the scope: </strong>
                        {`Scope of the study i.e. the physical limits of study shall be finalized as first. `}
                      </li>
                      <li>
                        <strong>2. Development of Assumption register : </strong>{" "}
                        {`include the details/assumptions in someplace of collected data, hazards identified, Drawings, methodology, hazard end points etc. 
The study will be performed only after the approval of Assumption register by the Subject Matter Expert (SME) from design developer/Asset owner
 `}
                      </li>
                      
                    </ol>
                  </td>
                </tr>

                {/* Execution/Examination Phase */}
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                    Execution/Examination
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    <ol className="">
                      <li>
                        <strong> 1. Identification of hazards :   </strong>
                        {`Examination phase begins with Identification of hazards identified from project QRA report by Aura Veritas’s EERA expert`}
                      </li>
                      <li>
                        <strong>2. Goal based assessment : </strong>{" "}
                        {`Completion of review of EER systems against impairment criteria, and determination of required endurance period of the EER systems, the EER systems can be assessed for its adequacy based on the six goals`}
                      </li>
                      <li>
                        <strong> 3. Recommendations : </strong>{" "}
                        {`made for any gaps found in assessment `}
                      </li>
                    
                    </ol>
                  </td>
                </tr>

                {/* Documentation Phase */}
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">
                    Documentation
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">
                    <ol className="">
                      <li>
                        <strong>Reporting:</strong>{" "}
                        {`A detailed report which includes the introduction, objectives, regulatory requirements, methodologies, findings, recommendations and appended with the utilized data, drawings, will be submitted for SME’s approval within stipulated time frame and with utmost quality  `}
                      </li>
                      <li>
                        {" "}
                        {`	II.	Once the report is approved and close -out sheets will be issued to track recommendations closure status. `}
                      </li>
                      <li>
                        {" "}
                        {`	III. Regular follow-ups will be performed with design developer’s SME’s to monitor the progress`}
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
            How Aura Veritas can help achieve your objective?
            </h2>
            <p className="text-gray-700 mb-4">
              {`Aura Veritas EERA Experts are independent and experienced in performing more than 150+ FERAs in their professional carrier, who understands your business and the challenges that comes within, shall perform quality assessments as a third party auditor or HSE specialists to achieve the aim of improving safety and ensuring compliance to relevant laws, codes and standards.`}
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
