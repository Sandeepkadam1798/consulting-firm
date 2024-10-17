"use client";
import Head from "next/head";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PFA1 from "../../../public/Images/PFA1.png";
import PFP2 from "../../../public/Images/PFP2.png";
export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Passive Fire Proofing (PFP) </title>
        <meta
          name="description"
          content="HAZOP Study to identify and evaluate hazards and operability problems in processes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="   overflow-x-hidden  min-h-screen bg-gray-100 py-8 px-4">
        <div className=" px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white p-8 shadow-lg">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-[#0b8d7c] mb-8 animate-scale-up">
            Passive Fire Proofing (PFP)
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
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8  mt-8"
          >
            <p className="text-gray-700 mb-4">
              {`Passive fire protection (fire proofing) is applied to all load bearing steel supporting structures whose sudden failure would lead to danger for personnel, escalation of the incident or unacceptable environmental pollution. It offers protection for a limited period and with a limited degree of exposure, i.e. until the full firefighting capabilities can be employed.`}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why ?</h2>
            <p className="text-gray-700 mb-4">
              {`Generally, steel equipment will not require protection when exposed to a heat radiation level of less than 12.5 kW/m2. Below the radiation level of 12.5 kW/m2, the temperature of the steel is expected to be less than 400 OC. However, as the heat radiation level increases, temperature of unprotected steel equipment or structure reaches beyond the critical metal temperature (400 OC). Steel structure or equipment starts losing its integrity/yield strength when it reaches the temperature in excess of 400 OC.  `}
            </p>
            <p className="text-gray-700 mb-4">
              {`When a steel equipment containing process fluid is heated or its temperature is increased due to prolonged exposure to heat radiation above 12.5kW/m2, pressure within the equipment rises and yield strength also start decreasing. Point at which yield strength and pressure increase crosses each other, escalation is considered to occur at 37.5kW/m2 or more is considered as Equipment/Component damage criteria. `}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Fire Proofing Zone:</h2>
            <p className="text-gray-700 mb-4">
              {`FPZ is defined as a zone where leakage of a flammable product can give rise to a fire of sufficient intensity and duration to cause failure of steel structures and equipment in the zone leading to escalation. The likelihood of escalation depends on the size of the hydrocarbon inventory within a process area. `}
            </p>
            <p className="text-gray-700 mb-4">
              {`A FPZ shall be only applied to a plant or system with an operating inventory of more than 5 tons of flammable product. In the context, a “system” is the smallest volume of piping and equipment (including vessels) that can be “blocked in” in the event of a fire.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Isolatable “blocked in” sections will be identified within the Fire and Explosion Assessment (FERA) following a review of available documentation (P&IDs, PFDs etc.,). The boundaries of isolatable sections are considered to be fail closed ESDVs.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Liquid pools may collect on impermeable floor surfaces either at grade or on elevated tabletops or other closed surface decks. Such surfaces, which can sustain a pool fire, are further referred to as Hazard Level (HL).`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The concept of Hazard Level (HL) and Potential Source of Leakage (PSL) is used to define the extent of the Fire Proofing Zones (FPZs) resulting from the pool fires.`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The extent of the FPZ is defined as a function of a liquid pool fire/ jet fire as follows:`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The FPZ is a volume with a cylindrical shape. The cylinder shall have a radius of 9 m from the PSL and a height of 8 m above HL`}
            </p>
            <p className="text-gray-700 mb-4">
              {`FPZ based on 12.5 kW/m2 of Pool/Jet fire radiation impact radius for 25 mm leak size release, could reach as per Project FERA report. Please note COMPANY radiation criteria shall be applied`}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Fire duration:</h2>
            <p className="text-gray-700 mb-4">
              {`Selection of fire cases that require PFP application need to account for three main factors to determine the Design Events that make up the basis of design.`}
            </p>

            <ul>
              <li>1. Likelihood</li>

              <li>2. Size of hazard envelope</li>
              <li> 3. Duration of hazard envelope</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Methodology</h2>

            <p className="text-gray-700 mb-4">
              {`Decision Flow Chart for Fireproofing of Structures Supporting Equipment,`}
            </p>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                width="550"
          height="310"
                src={PFA1}
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Types of PFP Materials:
            </h2>

            <ul>
              <li>{`•		Concrete Coatings`}</li>
              <li>{`•	Lightweight Cementitious (LWC) Coatings`}</li>
              <li>{`•	Epoxy Intumescent Subliming Polymer coating`}</li>
            </ul>
            <li>{`•	Subliming Polymer coating`}</li>
            <li>
              {`•	Phenolic Foam (Non-reacting) Insulating Polymer coating`}
            </li>
            <li>{`•	Elastomers (Rubber) Polymer coating`}</li>
            <li>{`•	Pre-formed Panels`}</li>
            <li>{`•	Wrap Jackets`}</li>
            <li>{`•	Mineral Wool Blankets`}</li>
            <li>{`•	Burial / Mounding`}</li>
            <li>{`•	Embankment`}</li>
            <li>
              {`•	Modular system of woven wire mesh (single or double) panels inserted into a custom -built narrow steel frame.`}
            </li>
            <li>{`•	Perforated Steel Panels in a steel frame`}</li>
            <li>
              {`•	Solid fire/blast rated walls, either standalone with steel supports or supported by buildings’ walls / faces`}
            </li>

            <h2 className="text-2xl font-semibold mb-4">
              Applicable Codes & Standards
            </h2>

            <ul>
              <li>
                • DEP 80.47.10.30-GEN - Assessment of the Fire Safety of Onshore
                Installations
              </li>
              <li>
                • DEP 34.19.20.11-GEN - Passive Fire Protection for Onshore
                Facilities
              </li>
              <li>
                • API 2218- Fireproofing Practices in Petroleum & Petrochemical
                Processing Plants
              </li>
              <li>
                • NFPA 59A - Standard for the Production, Storage, and Handling
                of Liquefied Natural Gas (LNG)
              </li>
              <li>
                • NFPA 59 - Standard for the Storage and handling of Liquefied
                Petroleum Gases at Utility Gas Plants. Incl Appendix D:
                Procedure for Torch Fire
              </li>
              <li>
                • API 2510A - Fire-Protection Considerations for the Design and
                Operation of Liquefied Petroleum Gas (LPG) Storage Facilities
              </li>
              <li>
                • IEC 60331-21 - Test of Electric Cables under fire conditions –
                Circuit integrity – Part 21
              </li>
              <li>
                • UL 1709 - Rapid Rise Fire Test of Protection Materials for
                Steel Structures
              </li>
              <li>• API 607 - Fire Test for Soft-Seated Quarter-turn Valves</li>
              <li>• API 6FA - Specification for Fire Test for Valves</li>
              <li>
                • ISO 10497:2010 - Testing of valves. Fire type-testing
                requirements.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Deliverables:</h2>

            <ul>
              <li>• Passive Fire Proofing Schedule </li>
              <li>• Passive Fire Proofing layout </li>
            </ul>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={PFP2}
              />
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
