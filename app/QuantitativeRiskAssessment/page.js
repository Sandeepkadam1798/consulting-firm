'use client'
import Head from "next/head";
import QRAFirstImage from "../../public/Images/QRAFirstImage.png";
import QRASecondImage from "../../public/Images/QRASecondImage.png";
import QRAThiredImage from "../../public/Images/QRAThiredImage.png";
import Image from "next/image";

export default function QRAssessment() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <Head>
        <title>Quantitative Risk Assessment (QRA) Study</title>
        <meta
          name="description"
          content="Safety Integrity Level (SIL) Assessment Study"
        />
      </Head>

      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          Quantitative Risk Assessment (QRA) Study
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is QRA ?</h2>
          <p className="text-gray-700 mb-4">
            {`Quantitative Risk Assessment is a formal and systematic approach of estimating the likelihood and consequences of hazardous events, and expressing the results quantitatively as risk to people, the environment, asset or reputation.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`A structured approach to assessing the potential for incidents and expressing this potential numerically. In QRA statistical values are derived for potential loss of life and damage to resources and environment. Note: These values must never be interpreted as unavoidable and acceptable losses`}
          </p>
          <p className="text-gray-700 mb-4">
            {`QRA is a tool which helps to translate this hindsight into foresight (planning) in order to assist management in deciding the best approach and show ways and means (e.g. improved engineering, procedures, supervision, etc.) to prevent the potential incidents from happening.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Safety Integrity Level (SIL) determination is the process of assigning risk reduction magnitude to safety instrumented functions (SIFs). There are four Safety Integrity Levels (SIL) for Safety Instrumented Functions: SIL 1 to SIL 4, with SIL 4 being the highest level of safety integrity.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Quantitative Risk Assessment (QRA) is a technique for the evaluation and integration of hazard frequency and consequence to derive a numerical estimate of risk.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`In the context of facility and activity risk assessment, QRA shall be applied when:`}
          </p>
          <ul>
            <li>
              {`	• High-risk or Major Accident Hazards have been identified for a facility or operation; QRA shall be required to demonstrate tolerability and ALARP in support of a project or facility COMAH Report.`}
            </li>
            <li>
              {` • There is potentially high risk of exposure to workers or the public (e.g. sour field developments, drilling activities close to populated areas, etc`}
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What are the Objectives ?
          </h2>

          <ul>
            <li>{`•	quantifying the overall risk associated with a facility or activity.`}</li>
            <li>{`•	identifying the main contributors to the overall risk.`}</li>
            <li>{`•	identifying measures to reduce the overall risk and analysing their effectiveness.`}</li>
            <li>{`•	where a number of alternative options are available, determining the relative safety and cost effectiveness of the alternatives.`}</li>
            <li>{`•	assisting in the identification of new alternatives.`}</li>
            <li>{`•	demonstrating compliance with selected risk tolerability criteria and assisting in the demonstration and achievement of ALARP to all stakeholders.`}</li>
            <li>{`•	as an aid to communication to the workforce and third parties of their impact on, and exposure to, risk.`}</li>
          </ul>

          <p className="text-gray-700">
            {`However, client’s order of precedence in the project will be governing in the end and if any client specific standards available will be followed, based on client’s advise.`}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing standards</h2>
          <p className="text-gray-700 mb-4">
            {`Majority of the Operators developed on the basis of methodologies and values based on the following accepted methods that are laid out in:`}
          </p>
          <ul>
            <li>{`•	Control of Major Accident Hazards Regulations, 2015 (COMAH)`}</li>
            <li>{`•	Reducing Risks, Protecting People: HSE’s Decision Making Process’, HSE, 2001.`}</li>
            <li>{`•	A Guide to Quantitative Risk Assessment for Offshore Installations, 1999`}</li>
          </ul>

          <p className="text-gray-700">
            {`However, client’s order of precedence in the project will be governing in the end and if any client specific standards available will be followed, based on client’s advise.`}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">When to perform QRA ?</h2>
          <p className="text-gray-700 mb-4">
            {`The QRA is an integral part of the ALARP process for both project activities and operations.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`QRA process starts at concept stage. In some cases, coarse/preliminary QRA may be carried out during concept stage especially where several options have been identified. This allows a comparison of the relative risk levels from the different options to support the decision-making process.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Comprehensive QRA is performed during the FEED Stage of the project. This QRA shall be later updated during the EPC (Detailed Engineering) Stage based on newly established information/data. EPC QRA also forms the basis for the operations and forms part of COMAH dossier.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`For existing facilities, where QRA is not available, it shall be carried out at the first available opportunity (earliest) and update the COMAH Dossier as per COMAH, 2015 regulations.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`As part of COMAH update, QRA shall be reviewed to determine if significant changes to facilities, barriers in place, manning, building functionality or occupancy, etc. are observed or carried out. QRA study shall be updated based on these changes to ensure assessment reflect the updated changes.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Integrated QRA shall be developed as part of 5-year COMAH/HSEIA update to ensure integrated risk from all existing facilities including modification and brownfield projects is established.`}
          </p>
          <p className="text-gray-700 mb-4">{`Where no significant changes are identified over five years and outcome of previous QRA report is still applicable and technically robust, no update of QRA is required. In such case, organisations shall develop technical note justifying the same with relevant supporting documents (such as HAZID, risk register review, risk assessments, MOC, etc.) and shall submit for Regulatory Approval as part of COMAH process for regulatory approval.`}</p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
          How it is performed? {" "}
          </h2>
          <p className="text-gray-700 mb-4">

            <strong>Step 1: Sectionalisation of -</strong>
            {`Step 1: Sectionalisation of plant under study. It is called as marking Isolatable section – plant inventory bound by location of the Emergency Shut-Down Valves (ESDVs) and Emergency Depressurisation Valves (EDPVs) within piping and equipments.  Isolatable sections will be further divided into various failure cases based on the locations, process parameters, operating modes, etc. to capture appropriate risk profile and release events. These isolatable sections and failure cases will be clearly marked on the P&ID and attached to QRA Report and shall be reviewed and approved as part of milestone requirements.`}
          </p>
          <p className="text-gray-700 mb-4">

            <strong>
            Step 2: Deriving/identification of Potential Consequences-

            </strong>
            {` development of the top event into a serious incident depends on the effect of safety systems, prevailing environmental conditions, actions by personnel and presence of ignition sources. Development of credible accident scenarios using event trees thus provides a structure to the conceptual and physical escalation scenario analysis. Minimum following events and consequences such as Jet fire, pool fire, toxic gas dispersion, Vapour Clour Explosion (VCE), Boiling liquid Expanding Vapour Explosion (BLEVE), flammable gas dispersion etc. shall be identified. Simple example of event tree is provided in image below,`}
          </p>
          

          <div className="flex items-center justify-center mt-5">
            <Image src={QRAFirstImage} />
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
            <Image src={QRASecondImage} />
          </div>

          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 7: Impact assessment -  `}
            </strong>
            {`  Exposure to various consequence identified as part of physical effect modelling can lead to major injury or fatalities. As part of impact assessment, vulnerability of humans to the consequences of major hazard events at onshore and offshore installations, primarily those producing and/or processing hazardous fluids are established. The impact assessment is generally expressed in terms of lethality which is fraction/percentage of the exposed population who would suffer fatality on exposure to a given consequence level.`}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 8: Risk Modelling – `}
            </strong>
            {`  Involves providing field data of Ignition probabilities for ignition sources present in and out of plant under study, on site and off-site population, building details and assigning vulnerabilities, point of interests where we require risk values basically risk receptors in software.     `}
          </p>
          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 9: Risk calculation & Presentation `}
            </strong>
            {`  Risk is estimated in per year basis for any particular individual/group present in the particular place for the exposed duration in a year.  It is presented in terms of Location Specific Individual Risk (LSIR), Individual Risk Per Annum (IRPA), Potential Loss of Life (PLL) and Societal risk. LSIR contours shall be generated from software to show the geographical limits of different levels of risk present in plant on top of the layout for reader’s understanding. A typical LSIR contour overlaid on a layout is shown in the following figure. `}
          </p>

          
          <div className="flex items-center justify-center mt-5">
            <Image src={QRAThiredImage} />
          </div>

          <p className="text-gray-700 mb-4 ">

            <strong>
              {`Step 10: ALARP Demonstration -  `}
            </strong>
            {`  ALARP demonstration is required when the calculated Individual Risk Per Annum (IRPA) for various worker group lies within tolerable region as per UK HSE risk acceptability criteria. The QRA shall provide a clear demonstration that the risk is or will be reduced to ALARP in accordance with UK HSE. ALARP process starts by identification of the Major Risk Contributors to given worker group or at a location. These major risk contributors are further drilled down to determine the top contributors to risk. Risk reduction measures are identified against these contributors to reduce the risk.`}
          </p>


        </section>

      
      

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{`SIL study will be executed in following phases,`}</h2>

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
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Understanding the scope:</strong>
                        {`Scope of the study i.e. SIF list identified from HAZOP shall be finalized as a first step`}
                      </li>
                      <li>
                        <strong>Data collection:</strong>{" "}
                        {`Available data/deliverables are collected from the design developer/Asset owner`}
                      </li>
                      <li>
                        <strong>Development of ToR:</strong>{" "}
                        {`Terms of reference would include the details of collected data, SIF list, Drawings, required participants list, tentative schedule, agenda for workshop day, reporting format etc. 
The session will be conducted only after the approval of ToR by the Subject Matter Expert (SME) from design developer/Asset owner
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
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Identification of hazards:</strong>
                        {`Examination Phase begins with identification of all SIFs identified Aura Veritas’s Chairman/Facilitator and agreed by the forum `}
                      </li>
                      <li>
                        <strong>Brainstorming:</strong>{" "}
                        {`Each SIF will be studied for its initiating events, end consequence, independent protection layers are identified and brainstormed `}
                      </li>
                      <li>
                        <strong>Recording:</strong>{" "}
                        {`initiating events, end consequence, TMEL, independent protection layers, conditional modifiers, IMEL that are investigated by the forum and recorded parallelly by Aura Veritas’s Technical Scribe using specialized software`}
                      </li>
                      <li>
                        <strong>Recommendations:</strong>{" "}
                        {`that are raised by the forum will be displayed once all of the nodes that are brainstormed and the consensus of forum is ensured before session concludes. Recommendations will also include the details to whom it is delegated to finish and target dates. `}
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
                    <ol className="list-decimal list-inside">
                      <li>
                        <strong>Reporting:</strong>{" "}
                        {`A detailed report which includes the introduction, objectives, regulatory requirements, methodologies, findings, recommendations and appended with the utilized data, drawings, attendance sheet and any other additional data used in study, will be submitted for SME’s approval within stipulated time frame and with utmost quality `}
                      </li>
                      <li>
                        {" "}
                        {`	Once the report is approved and close -out sheets will be issued to track recommendations closure status. `}
                      </li>
                      <li>
                        {" "}
                        {`	Regular follow-ups will be performed with design developer’s SME’s to monitor the progress`}
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
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
