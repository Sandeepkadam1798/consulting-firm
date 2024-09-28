'use client'
import Head from "next/head";
import SILFirstImage from "../../public/Images/SILFirstImage.png";
import SILSecondImage from "../../public/Images/SILSecondImage.png";
import SILThiredImage from "../../public/Images/SILThiredImage.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function SILAssessment() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <div className="min-h-screen overflow-x-hidden bg-gray-100 py-8 px-4">
      <Head>
        <title>SIL Assessment Study</title>
        <meta
          name="description"
          content="Safety Integrity Level (SIL) Assessment Study"
        />
      </Head>

      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
          Safety Integrity Level (SIL) Assessment Study
        </h1>

        <Image
            src="/service/32.png"
            width="550"
            height="310"
            alt="HAZID"
           data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center  "
            // lg:order-last
          />

        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4">What is SIL?</h2>
          <p className="text-gray-700 mb-4">
            {`The SIL Determination is an integral part of the risk management process performed to derive the integrity level of the Safety Instrumented Function (SIF) to ensure that the risk is managed and demonstrated to ALARP for both project activities and operations.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Safety Integrity Level (SIL) determination is the process of assigning risk reduction magnitude to safety instrumented functions (SIFs). There are four Safety Integrity Levels (SIL) for Safety Instrumented Functions: SIL 1 to SIL 4, with SIL 4 being the highest level of safety integrity.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`In SIL assessment, the consequences of a safety function’s failure on demand are assessed. More accurately: the tolerable likelihood of the consequences of a failure on demand. The lower the required Probability of Failure on Demand (PFD) or the larger the risk reduction requirement determined in the assessment, the higher the Safety Integrity Level requirement of the function.`}
          </p>
          <p className="text-gray-700 mb-4">
            {`Various methodologies are available for assessment of SIL requirements, e.g. Risk Matrix, Risk Graph and Layer of Protection Analysis (LOPA). Layer of Protection Analysis method is used generally preferred for its inclusion of larger factors and modifiers.`}
          </p>
        </section>

        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing standards</h2>
          <p className="text-gray-700 mb-4">
            {`Majority of the Operators developed on the basis of methodologies and values based on the following accepted methods that are laid out in:`}
          </p>
          <ul>
            <li>{`•	IEC 61508 Functional Safety of Electrical/Electronic/Programmable Electronic Safety-Related Systems`}</li>
            <li>{`•	IEC 61511 Functional Safety: Safety Instrumented Systems for the Process Industry Sector`}</li>
          </ul>

          <p className="text-gray-700">
            {`However, client’s order of precedence in the project will be governing in the end and if any client specific standards available will be followed, based on client’s advise.`}
          </p>
        </section>
        <section data-aos="fade-up" data-aos-duration="1000" className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            What are layers of protection in process industries ?{" "}
          </h2>
          <p className="text-gray-700 mb-4">
            {`Before we dive in about SIL determination, we ought to understand the layers of protection in process industries. `}
          </p>
          <p className="text-gray-700 mb-4">
            {`Each and every layer of protection are designed to prevent a postulated accident sequence from proceeding to a defined, undesirable endpoint (e.g., runaway reaction, release of toxic material, loss of contaminant, or fire). `}
          </p>
          <p className="text-gray-700 mb-4">
            {`The performance of any particular protection layer shall not be affected by failure of another protection layer or by conditions that caused another protection layer to fail. All Protection layers are also independent of initiating cause. Hence these are called Independent Protection layers (IPLs).`}
          </p>
          <p className="text-gray-700 bg-slate-300 rounded-sm">
            {`The LOPA study provides a consistent basis for judging whether there are sufficient independent protection layers against hazardous events to achieve the required risk reduction target.`}
          </p>

          <div className="flex items-center justify-center mt-5">
            <Image  data-aos="zoom-out-left" data-aos-duration="2000" src={SILFirstImage} />
          </div>

          <p className="text-gray-700 mb-4 ">
            {`One such protection layer is Safety Instrumented Function (SIF) achieved through Safety Instrumented System (SIS). Depending on the hazard that is brainstormed in Hazard and Operability (HAZOP) study a scenario may have one or more (the better) protection layers of various types, depending on complexity of process and potential severity of consequence.`}
          </p>
          <p className="text-gray-700 mb-4 ">
            {`Sometimes a scenario may or may not warrant for a SIF in the protection layer. The inherent hazard could be managed by a simple Basic Process control system (BPCS). Entirely depends on the design. `}
          </p>
          <p className="text-gray-700 ">
            {`The assessment of a SIF’s reliability that is the level that is required is done in terms of calculating its Probability of Failure on Demand (PFD) or the Risk Reduction Factor (RRF) required of / achieved by the safety function. The International Standard for Safety Instrumented Systems, IEC 61508/61511, establishes four SIL classification bands as shown in following Table.`}
          </p>

          <div className="flex items-center justify-center mt-5">
            <Image  data-aos="zoom-out-left" data-aos-duration="2000" src={SILSecondImage} />
          </div>
        </section>

        <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{`Which industries are employing SIL as an integral part in risk management?`}</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Oil and Gas</li>
            <li>Nuclear</li>
            <li>Pharmaceutical</li>
            <li>Chemical</li>
            <li>Manufacturing</li>
          </ul>
        </section>

        <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Different types of method to determine SIL level.
          </h2>
          <p className="text-gray-700 mb-4">
            The commonly used methods for SIL determination are:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Risk Matrices</li>
            <li>Risk Graphs</li>
            <li>Layer of Protection Analysis (LOPA)</li>
          </ul>
          <p className="text-gray-700">
            Among these, LOPA is widely used in large industrial facilities.
          </p>
        </section>

        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are the Objectives?</h2>
          <p className="text-gray-700 mb-2">{`The SIL determination study will be undertaken with following objective:`}</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
                {`	To determine whether a Safety Instrumented Function (SIF) was needed or not, and if the other independent protection layers were sufficient for controlling risk to As Low As Reasonably Practicable (ALARP), and then classify the SIL rating for each SIF`}
            </li>
            
          </ul>
        </section>
        <section data-aos="fade-up" data-aos-duration="1000"  className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">When SIL Assessment shall be performed or What would warrant a SIL Assessment study?

          </h2>
          <p className="text-gray-700 mb-2">{`SIL Assessment is performed after Hazard and Operability (HAZOP) study in design process.`}</p>
          <p className="text-gray-700 mb-2">{`It should preferably be carried out as early in the design phase be the phase in FEED, Detailed design or before performing the modifications in a running facility once the design documents are available to have influence on the design.`}</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>
                {`Front-End Engineering Design (FEED) stage `}
            </li>
            <li>
                {`Detailed Design Stage `}
            </li>
            <li>
                {`	Any modification during operation as a revalidation study `}
            </li>
            
          </ul>
        </section>

        <section  data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
          How it is performed? 
          </h2>
          <p className="text-gray-700 mb-4">
            The SIL assessment follows these steps:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4">
            <li>
              {`Identify the safety instrumented function (SIF) from Hazard and Operability (HAZOP) report;`}
            </li>
            <li>{`Define the design intent of this SIF`}</li>
            <li>{`Decide the Target Mitigated Event Likelihood (TMEL) for this SIF with respect to personnel safety (S), environment (E), asset (A) and Reputation (R)`}</li>
            <li>{`Identify all demand scenarios (i.e. initiating events) where the SIF needed to be activated`}</li>
            <li>{`Identify all major consequences occurring involving the particular SIF`}</li>
            <li>
    {`Estimate the frequency of each scenario – the frequency assessment in line with the agreed Risk Matrix and conditional modifiers`}
            </li>
            <li>
              {`Estimate the frequencies of all IPLs that guards against the initiating causes`}
            </li>
            <li>
              {`Calculate the PFD and RRF, that is assigned to the SIF in study`}
            </li>
          </ol>

          <div className="flex items-center justify-center mt-5">
            <Image data-aos="zoom-out-left" data-aos-duration="2000"  src={SILThiredImage} />
          </div>

          <p className="text-gray-700 mb-4">{`
After completed SIL classification, SIL Verification calculations will be performed within in-house excel based calculation tool or any commercially available software. 
`}</p>

        </section>

        <section data-aos="fade-up" data-aos-duration="1000" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{`SIL study will be executed in following phases,`}</h2>

            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">Phase</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-semibold">Steps</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Preparatory Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Preparatory</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Understanding the scope:</strong>{`Scope of the study i.e. SIF list identified from HAZOP shall be finalized as a first step`}</li>
                        <li><strong>Data collection:</strong> {`Available data/deliverables are collected from the design developer/Asset owner`}</li>
                        <li><strong>Development of ToR:</strong> {`Terms of reference would include the details of collected data, SIF list, Drawings, required participants list, tentative schedule, agenda for workshop day, reporting format etc. 
The session will be conducted only after the approval of ToR by the Subject Matter Expert (SME) from design developer/Asset owner
`}</li>
                      </ol>
                    </td>
                  </tr>

                  {/* Execution/Examination Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Execution/Examination</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Identification of hazards:</strong>{`Examination Phase begins with identification of all SIFs identified Aura Veritas’s Chairman/Facilitator and agreed by the forum `}</li>
                        <li><strong>Brainstorming:</strong> {`Each SIF will be studied for its initiating events, end consequence, independent protection layers are identified and brainstormed `}</li>
                        <li><strong>Recording:</strong> {`initiating events, end consequence, TMEL, independent protection layers, conditional modifiers, IMEL that are investigated by the forum and recorded parallelly by Aura Veritas’s Technical Scribe using specialized software`}</li>
                        <li><strong>Recommendations:</strong> {`that are raised by the forum will be displayed once all of the nodes that are brainstormed and the consensus of forum is ensured before session concludes. Recommendations will also include the details to whom it is delegated to finish and target dates. `}</li>
                      </ol>
                    </td>
                  </tr>

                  {/* Documentation Phase */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-800 font-semibold">Documentation</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">
                      <ol className="list-decimal list-inside">
                        <li><strong>Reporting:</strong> {`A detailed report which includes the introduction, objectives, regulatory requirements, methodologies, findings, recommendations and appended with the utilized data, drawings, attendance sheet and any other additional data used in study, will be submitted for SME’s approval within stipulated time frame and with utmost quality `}</li>
                        <li> {`	Once the report is approved and close -out sheets will be issued to track recommendations closure status. `}</li>
                        <li> {`	Regular follow-ups will be performed with design developer’s SME’s to monitor the progress`}</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Aura Veritas can help achieve your objective?</h2>
          <p className="text-gray-700 mb-4">
            {`Aura Veritas engineers and technologists are an independent and experienced functional safety certified experts, who understands your business and culture, shall provide expertise to lead/facilitate SIL study as a third party auditor or HSE specialists to achieve the aim of improving safety and ensuring compliance to relevant laws, codes and standards.`}
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
