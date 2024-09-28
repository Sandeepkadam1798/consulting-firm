'use client'
import Head from "next/head";
import QRAFirstImage from "../../public/Images/QRAFirstImage.png";
import QRASecondImage from "../../public/Images/QRASecondImage.png";
import QRAThiredImage from "../../public/Images/QRAThiredImage.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function FERAAssessment() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
      <Head>
        <title>Fire and Explosion Risk Assessment (FERA) Study</title>
        <meta
          name="description"
          content="Safety Integrity Level (SIL) Assessment Study"
        />
      </Head>

      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
        Fire and Explosion Risk Assessment (FERA) Study
        </h1>

        <Image
            src="/service/28.png"
            width="550"
            height="310"
            alt="SIL Assessment"
            
           data-aos="zoom-in-up"
           data-aos-duration="2000"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center "
          />


        <section data-aos="fade-up" data-aos-duration="1000"   className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4">What is Fire and Explosion Risk Assessment (FERA) ?</h2>
          <p className="text-gray-700 mb-4">
            {`Industry experience shows that fires or explosions in Oil & Gas and petrochemical facilities can result in extensive losses of property and lives. Realistic quantification of credible physical effects from accident loss of containment scenarios can be used to manage the associated risks by providing engineering solutions and procedural control.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Fire & Explosion Risk Assessment (FERA) is a structured and systematic process to identify and assess risks from fire and explosion hazards. The results of this assessment are used to ensure safe facility layouts, specify passive and active fire protection requirements, and provide input for Escape and Evacuation Risk Assessment (EERA), Emergency Systems Survival Assessment (ESSA), Building Risk Assessment (BRA) and Quantitative Risk Assessment (QRA) studies.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`A structured approach to assessing the potential for incidents and expressing this potential numerically. `}
          </p>
          <p className="text-gray-700 mb-4">
            {`It must always be recognised that the calculated fatality (or loss) figures are based on experience, statistical failure and incident rates representing an average historical quality of management. Incident investigations usually show that these ‘historical’ incidents were, with the benefit of hindsight, quite preventable.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Like QRA, FERA is also a tool which helps to translate this hindsight into foresight (planning) in order to assist management in deciding the best approach and show ways and means (e.g. improved engineering, procedures, supervision, etc.) to prevent the potential incidents from happening.`}
          </p>
          
        </section>

        <section  data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What are the Objectives ?
          </h2>

          <ul>
            <li>{`•	Identifying potential fire and explosion hazards in a facility or during an activity.`}</li>
            <li>{`•	Identifying the impact of fires and explosions on plant equipment, and facilities.`}</li>
            <li>{`•	Providing recommendations to minimize the severity of fires and explosions.`}</li>
            <li>{`•	Defining the required protection measures which control or mitigate the effects of fires and explosions.`}</li>
            <li>{`•	Assessing opportunities to reduce risks further from fire and explosion hazards.`}</li>
</ul>



<h2 className="text-2xl font-semibold mb-4">
Scope:
          </h2>
          <p className="text-gray-700 mb-4">
            {`It does not apply to fires inside buildings or to non-hydrocarbon fires such as electrical fires, cellulose/paper/metal fires etc. FERA describes the process for assessing risks to assets only. Assessment of personnel risk (including toxic gas risk to occupants of buildings) shall be covered in the QRA.`}
          </p>


            <ul>

            
            <li>{`•	Fires within the scope of this standard include.`}</li>
            <li>{`•	Gas fires - jet fires and low momentum releases.`}</li>
            <li>{`•	Liquid fires - pool fires and pressurized spray fires.`}</li>
            <li>{`•	Two phase fires - flashing liquids or gas with entrained liquid droplets.`}</li>
            <li>{`•	Blowouts – during drilling, production, work over, well service or subsea.`}</li>
            <li>{`•	Fireball - fire from a catastrophic release of a large quantity of pressurized gas or volatile liquid`}</li>
            <li>{`•	Boiling Liquid Expanding Vapour Explosion (BLEVE) - catastrophic failure of a vessel containing volatile liquids following sustained fire exposure`}</li>
            <li>{`•	Boil-over - sudden steam generation in tanks storing liquid hydrocarbons at atmospheric conditions, causing a massive ejection of tank contents`}</li>
          </ul>

          <p className="text-gray-700 mt-2">
            {`Explosions within the scope of this standard include:`}
          </p>

          <ul>

            <li>
              {`•	Vapour Cloud Explosion (VCE) – rapid combustion of flammable gas, mist, or small particles that generate pressure effects due to confinement or acceleration of flame front by congestion due to obstacles`}
            </li>
            <li>{`•	Dust explosion – the rapid combustion of fine particles suspended in the air, often but not always in an enclosed location.`}</li>
          </ul>
        </section>

        <section  data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing standards</h2>
          <p className="text-gray-700 mb-4">
            {`Majority of the Operators developed on the basis of methodologies and values based on the following accepted methods that are laid out in:`}
          </p>
          <ul>
            <li>{`•	A Guide to Quantitative Risk Assessment for Offshore Installations, 1999.`}</li>
            <li>{`•	Control of Major Accident Hazards Regulations, 2015 (COMAH).`}</li>
            <li>{`•	Reducing Risks, Protecting People: HSE’s Decision Making Process’, HSE, 2001.`}</li>
          </ul>

          
        </section>

        <section data-aos="fade-up" data-aos-duration="1000"   className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to perform FERA ?</h2>
          <p className="text-gray-700 mb-4">
            {`Typically, during concept phase, consequence modelling is carried out to assist in layout planning, determine the separation distances, etc. Comprehensive FERA is performed during the FEED Stage of the project and is later updated during the EPC (Detailed Engineering) Stage based on newly established information/data/engineering documentations etc. EPC FERA study also forms the basis for the operations and forms part of COMAJ dossier.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`For existing facilities, where FERA is not available, it shall be carried out at the first available opportunity (earliest) and update the COMAH Dossier accordingly as per UK HSE.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`As part of COMAH update, FERA shall be reviewed to determine if significant changes to facilities, fire protection measures & supporting system, manning, buildings, etc. are observed or carried out. FERA study shall be updated to address these changes to ensure assessment reflect the updated changes, fire protection measures and supporting systems. COMAH Dossier shall be updated and approved accordingly, as per COMAH regulations 2015.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Where no significant changes are identified over five years and outcome of previous FERA report is still applicable and technically robust, no update of FERA is required. In such case, the organisation shall develop technical note justifying the same with relevant supporting documents (such as HAZID, risk register review, risk assessments, MOC, etc.) and shall submit for regulatory approval along with previous FERA report as part of COMAH process.`}
          </p>
          
        </section>

        <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
          How it is performed? {" "}
          </h2>
          <p className="text-gray-700 mb-4">

            <strong>Step 1: Sectionalisation of Plant -</strong>
            {`Step 1: Sectionalisation of plant under study. It is called as marking Isolatable section – plant inventory bound by location of the Emergency Shut-Down Valves (ESDVs) and Emergency Depressurisation Valves (EDPVs) within piping and equipments.  Isolatable sections will be further divided into various failure cases based on the locations, process parameters, operating modes, etc. to capture appropriate risk profile and release events. These isolatable sections and failure cases will be clearly marked on the P&ID and attached to QRA Report and shall be reviewed and approved as part of milestone requirements.`}
          </p>
          <p className="text-gray-700 mb-4">

            <strong>
            Step 2: Deriving/identification of Potential Consequences-

            </strong>
            {` development of the top event into a serious incident depends on the effect of safety systems, prevailing environmental conditions, actions by personnel and presence of ignition sources. Development of credible accident scenarios using event trees thus provides a structure to the conceptual and physical escalation scenario analysis. Minimum following events and consequences such as Jet fire, pool fire, toxic gas dispersion, Vapour Clour Explosion (VCE), Boiling liquid Expanding Vapour Explosion (BLEVE), flammable gas dispersion etc. shall be identified. Simple example of event tree is provided in image below,`}
          </p>
          

          <div className="flex items-center justify-center mt-5">
            <Image  data-aos="zoom-out-left" data-aos-duration="2000" src={QRAFirstImage} />
          </div>

          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 3: Inventory Estimation –`}
            </strong>
            {` The material mass accumulated in all isolatable section (both static and dynamic) inventories will be calculated;`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 4: Failure Frequency Estimation `}
            </strong>
            {`  Failure frequencies are frequency of potentially hazardous events estimated from historical databases (generic failure frequencies) combined with part count information for associated isolatable section and failure scenarios (e.g. length of pipelines, number of valves/flanges, etc.). Part count methodology shall be adopted for determining failure frequencies.`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 5: Source Term modelling `}
            </strong>
            {`  An important input to physical effects calculations is the source term, i.e. the rate at which hazardous material reaches the environment and the conditions of the material (e.g. temperature, composition). For leaks from equipment, the source term refers to the mass release (or leakage) rate, calculated based on process parameters (pressure, temperature, composition), inventory and release profile A coefficient of discharge is used to account for the hole shape/type and friction loss as the material passes through the leak hole.`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 6: Physical Effects aka Consequence Modelling `}
            </strong>
            {`  The term 'effect' refers to the possible consequences from releases of hydrocarbons and toxic gases. For example, this may be the extent of a gas cloud's flammability or toxicity or it may be a measure of thermal radiation or explosion overpressure. In brief, the estimation of extent to which the released and ignited gases/liquid would affect and spread out when it is not ignited for all expected consequence outcome.`}
          </p>
          <p className="text-gray-700 mb-4 ">
            {`The following image shows the graph of a jet fire release,  `}
          </p>
         

          <div className="flex items-center justify-center mt-5">
            <Image data-aos="zoom-out-left" data-aos-duration="2000"  src={QRASecondImage} />
          </div>

          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 7: Receptors identification & Impact assessment   `}
            </strong>
            {` Fire and explosion events have potential to cause significant impact on the plant/facilities, nearby infrastructures, buildings, critical equipment and structures and also has potential to cause impairment of the escape and evacuation measures. Therefore, it is essential that all these receptors are identified and its impairment is studied as part of the various HSE studies and specifically FERA study. As part of the FERA following receptors shall be identified as minimum and impact on these receptors shall be studied as part of FERA study`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Building -   `}
            </strong>
            {` Industrial, non-industrial, Accommodations (On site), Residential`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Critical structures -  `}
            </strong>
            {` key structure elements within the plant/facilities/islands, failure of which has potential to cause major accident`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Escape, Evacuation and Rescue Measures -  `}
            </strong>
            {` to aid and ensure safe escape, evacuation and rescue of all personnel in the event of Major Accident. (e.g. Lifeboats, Temporary Refuge, Life rafts, Emergency Vehicles, etc.).`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`HSE Critical Equipment and System -  `}
            </strong>
            {`All HSECES in the plant/facilities either whose failure can lead to major accident or escalation of the scenario or provided to control or mitigate the consequence of a major accident hazards (e.g. ESD system, emergency depressurisation system, etc.)`}
          </p>


          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 8: : Fire Zone assessment – `}
            </strong>
            {`  Fire zones are areas of the plant sub-divided based on the potential for fire & explosion hazard, as assessed by the consequence & risk modeling and the efficiency of response means and protective equipment. Fire zone assists in managing the separation distances between independent plant, emergency shutdown, flare design and defining firewater requirements. Criteria for fire zones is defined in project HSE Design Philosophy and the fire zones shall be designed in accordance to the definitions given in design document.     `}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 9: Active Fire Protection Review - `}
            </strong>
            {`  Where active fire protection provisions and firewater demand calculations are carried out prior to development of fire zone as part of engineering based on certain assumptions, review of these fire water (FW) demand & firefighting provisions such as firewater monitor and hydrants, shall be carried out as part of FERA to ensure effectiveness of these provisions. `}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 10: Passive Fire Protection Review  `}
            </strong>
            {`  Where passive fire protection provisions are carried out in line to development of Passive fire proofing schedule as part of engineering based on certain assumptions. Fire and explosion values from different MAHs are calculated for each affected receptors serves to make decision about whether or not a HSECES needs fire/explosion protection.`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 11: Risk calculation & Presentation  `}
            </strong>
            {`  Risk is estimated in per year basis for any particular receptor present in the particular place for the exposed duration in a year for each and every consequence outcome. E.g. 1E-04 / year for 37.5 kW/m2 jet fire radiation, 1E-05 / year for 0.5 LFL etc. It is called as Design Accidental Load (DAL) limits or assets. Equivalent to LSIR in QRA. These contours shall be generated from software to show the geographical limits of different levels of risk present in plant on top of the layout for reader’s understanding. A typical risk contour overlaid on a layout is shown in the following figure. `}
          </p>

          
          <div className="flex items-center justify-center mt-5">
            <Image  data-aos="zoom-out-left" data-aos-duration="2000" src={QRAThiredImage} />
          </div>

          


        </section>

      
      

        <section data-aos="fade-up" data-aos-duration="1000"  className="mb-12">
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
                        <strong>1. Understanding the scope:</strong>
                        {`Scope of the study i.e. the physical limits of study shall be finalized as first `}
                      </li>
                      <li>
                        <strong>2. Site visit/data collection</strong>{" "}
                        {`to gather ignition sources and on site data collection  `}
                      </li>
                      <li>
                        <strong>3.	Development of Assumption register :</strong>{" "}
                        {`include the details/assumptions in someplace of collected data, Isolatable sections, Drawings, methodology, failure frequency, probabilities of ignition, Design Accidental Load (DAL) limits, software package, Leak sizes, hazard end points etc. 
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
                        <strong>1. Identification of hazards/Isolatable section marking: </strong>
                        {`Examination Phase begins with Identification of hazards/Isolatable section marking identified Aura Veritas’s FERA expert`}
                      </li>
                      <li>
                        <strong>2. Consequence modelling :</strong>{" "}
                        {`Each identified hazard will be modelled software to estimate the extent to which each of the consequence effect  `}
                      </li>
                      <li>
                        <strong>3. Frequency estimation :</strong>{" "}
                        {`Parts count method will be used to finalize the failure frequency for different leak sizes assumed in study based on international databases such as IOGP, SINTEF, OREDA, EGIG, UK HSE, UKOOA etc. `}
                      </li>
                      <li>
                        <strong>4. Fire & Explosion Modelling </strong>{" "}
                        {`Assigning receptors, ignition probabilities, weather data, building details, congested areas etc. `}
                      </li>
                      <li>
                        <strong>5 .Recommendations :</strong>{" "}
                        {`Asset risk where the risk falls under unacceptable limits that are identified benchmarked against the agreed limits and studied further to reduce the risk to acceptable/ALARP limits. `}
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
                        <strong> 1. Reporting:</strong>{" "}
                        {`A detailed report which includes the introduction, objectives, regulatory requirements, methodologies, findings, recommendations and appended with the utilized data, drawings, will be submitted for SME’s approval within stipulated time frame and with utmost quality. `}
                      </li>
                      <li>
                        {" "}
                        {`	Once the report is approved and close -out sheets will be issued to track recommendations closure status. `}
                      </li>
                      <li>
                        {" "}
                        {`	Regular follow-ups will be performed with design developer’s SME’s to monitor the progress.`}
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How Aura Veritas can help achieve your objective?
          </h2>
          <p className="text-gray-700 mb-4">
            {`Aura Veritas QRA Experts are independent and experienced in performing more than 200+ QRAs in their professional carrier, who understands your business and the challenges that comes within, shall perform quality assessments as a third party auditor or HSE specialists to achieve the aim of improving safety and ensuring compliance to relevant laws, codes and standards.`}
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
