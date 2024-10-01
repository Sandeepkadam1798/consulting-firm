"use client";
import Head from "next/head";
import QRAFirstImage from "../../../public/Images/Fire&GasMappingStudyMethodology1.png";
import QRAFirstImage2 from "../../../public/Images/Fire&GasMappingStudyMethodology2.png";
import FireGasMappingStudyMethodology3 from "../../../public/Images/Fire&GasMappingStudyMethodology3.png";
import FireGasMappingStudyMethodology4 from "../../../public/Images/Fire&GasMappingStudyMethodology4.png";
import FireGasMappingStudyMethodology5 from "../../../public/Images/Fire&GasMappingStudyMethodology5.png";
import FireGasMappingStudyMethodology6 from "../../../public/Images/Fire&GasMappingStudyMethodology6.png";
import FireGasMappingStudyMethodology7 from "../../../public/Images/Fire&GasMappingStudyMethodology7.png";
import QRAThiredImage from "../../../public/Images/QRAThiredImage.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FERAAssessment() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="overflow-x-hidden min-h-screen bg-gray-100 py-8 px-4">
        <Head>
          <title> Fire and Gas Mapping Study Methodology</title>
          <meta
            name="description"
            content="Safety Integrity Level (SIL) Assessment Study"
          />
        </Head>

        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#0b8d7c] animate-scale-up">
            Fire and Gas Mapping Study Methodology
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

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              What is Fire & Gas Mapping Study ?
            </h2>
            <p className="text-gray-700 mb-4">
              {`The primary aim of a fire and gas detection system is to ensure the continuous monitoring and rapid detection of fire, flammable, and toxic gases within designated hazardous areas of a facility. This involves employing advanced sensor technologies capable of identifying specific gas concentrations and fire signatures in real-time. The system is designed to operate within predefined performance target criteria, which include parameters such as detection sensitivity, response time, and reliability to minimize false alarms. By adhering to these criteria, the system enhances overall safety by providing timely alerts, enabling swift emergency responses, and facilitating compliance with industry safety standards and regulations. This proactive approach ultimately protects personnel, assets, and the environment from potential hazards.`}
            </p>
          </section>

          <section data-aos="fade-up" data-aos-duration="1000" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Fire & Gas Methodology
            </h2>

            <p className="text-gray-700 mb-4">
              {`This fire and gas mapping study uses performance-based methodology which utilize hazard and risk  assessments to make informed decisions, allow for optimal FGS design in areas where the more traditional prescriptive standards are inadequate, inefficient, or don’t exist for the design basis hazards. This methodology is well described in ISA TR 84.00.07 and in nowadays is adopted by most of major Oil & Gas operators.  `}
            </p>
            <p className="text-gray-700 mb-4">
              {`The ISA TR 84.00.07 describes 2 types of the gas detection coverage assessment which are:`}
            </p>

            <ul>
              <li>{`•	Geographic Coverage.`}</li>
              <li>{`•	Scenario coverage  `}</li>
            </ul>
          </section>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Geographic Coverage</h2>
            <p className="text-gray-700 mb-4">
              {`Geographic Coverage is a type of coverage which essentially asks what fraction of a geographic area is being monitored by a fire or gas detector array. This type of coverage determines whether or not the detector array would be able to detect a specific size / magnitude of hazard if that fire or a gas release were to occur in a specific location. Geographic coverage is usually presented in terms of a colour coded map (coverage contours) in addition to tabular results with calculated coverage percentages for fire or gas zone being under analysis. Percentages are provided for the monitored areas that have no coverage, single detector coverage, or two or more detector coverage. When specifying performance requirements using semi-quantitative techniques, geographic coverage is used to compare achieved coverage versus target coverage.  `}
            </p>
          </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Scenario Coverage </h2>
            <p className="text-gray-700 mb-4">
              {`Scenario Coverage is more sophisticated type of detection coverage assessment. When calculating scenario-based coverage, the location, magnitude and likelihood of specific hazard scenarios are evaluated. For each of those hazard scenarios, calculations are performed to determine how many fire or gas detectors can detect the scenario. The outcome of the scenario coverage analysis will essentially be a visual map that depicts where the hazards can occur as well as showing where we have good coverage versus where we are lacking coverage. This is similar to a geographic risk contour in the context of Quantitative Risk Analysis (QRA).  `}
            </p>
            <p className="text-gray-700 mb-4">
              {`Both of the above-described coverage metrics have their place, depending on the hazard evaluated, the design objectives stated in the FGS philosophy and level of quantification required. Since Geographic Coverage is more easily calculated and yet being very powerful for specifications and design, this approach is taken as a basis for coverage assessment methodology for the F&G Mapping study.   `}
            </p>
            <p className="text-gray-700 mb-4">
              {`Within context of performance-based F&G mapping that follows Geographic Coverage assessment methodology the following minimum key steps has been considered:  `}
            </p>

            <ul>
              <li>{`•	Definition of F&G Zones/Subzones as per the Existing Fire & Gas Layouts`}</li>
              <li>{`•	Definition of Risk Grades for F&G Zones/Subzones   `}</li>
              <li>{`•	Setting performance criteria (target detection objectives) for detection coverage of F&G zones) `}</li>
              <li>{`•	Zone coverage assessment `}</li>
              <li>{`•	Optimization (as/if required)  `}</li>
            </ul>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={QRAFirstImage}
              />
            </div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">F&G Zoning Criteria</h2>
            <p className="text-gray-700 mb-4">
              {`Fire and Gas Zoning is based on the assumption. The layout drawings and grouping equipment with similar process hazards.
The Extends of Subzones (for modelling purpose) are determined by considering a distance of 2m from edge of equipment or set of equipment within the Zone. The selection of a distance of 2m originated from well-established International Standards for handling the hydrocarbon material. 
`}
            </p>
          </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Definition of Risk Grades For F&G Zones/Subzones
            </h2>
            <p className="text-gray-700 mb-4">
              {`Within scope of performance-based F&G mapping study the Risk Grading assessment is an exercise which is required to define the degree of hazard or risk associated with process equipment within an FGS monitored area (Zone). The Risk Grade will directly correlate to FGS performance targets (coverage and safety availability) that reduce risk to tolerable levels. Based on the Fire and Gas Philosophy, the risk grades to be used in the performance-based F&G mapping studies are presented in the Table below: 
`}
            </p>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={QRAFirstImage2}
              />
            </div>

            <p className="text-gray-700 mb-4">{`The performance standards for target detection coverage of Zones with such risk grade are described in the following section.  `}</p>
          </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Performance Targets  
            </h2>
            <p className="text-gray-700 mb-4">
              {`Fire and gas system (FGS) performance targets specifications define the ability of a FGS function to detect, alarm, and if necessary, take action to mitigate the consequence of a fire or gas release upon a demand condition. In concept, a higher risk F&G Zones/Subzones should require higher levels of detection coverage performance; while a lower risk Zones and Subzones should allow for lower levels of performance, so that FGS resources can be effectively allocated.   
`}
            </p>

            <p className="text-gray-700 mb-4">
              {`Performance targets based on the above criteria will be applied for flammable gas detection in the appropriate areas depending on the congestion `}
            </p>

            <ul>
              <li>{`•	85% for 2ooN coverage (for two or more detectors alarming based on N detectors in the zone); also consider as ‘confirmed fire`}</li>
              <li>{`•	90% for 1ooN coverage (for a single detector alarm based on N detectors in the zone, initiate audible/ visual alarm in local control room and matrix panel).`}</li>
            
            </ul>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={FireGasMappingStudyMethodology3}
              />
            </div>
          </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Selection And General Specifications For F&G System Devices 
            </h2>
            <p className="text-gray-700 mb-4">
              {`Fire and Gas detection system is used to monitor the leakage of Fire and Gas leakage in area. The fire and gas detection system comprises of Hydrocarbon Gas Detectors (point type), Hydrocarbon Gas Detection (open path type), Toxic Gas Detectors (H2S) and Flame Detectors (UV/IR)   
`}
            </p>

            <p className="text-gray-700 mb-4">
              {`The general guidelines followed for mounting the F&G detection system is as given below:`}
            </p>

            <ul>
              <li>{`•	85% for 2ooN coverage (for two or more detectors alarming based on N detectors in the zone); also consider as ‘confirmed fire`}</li>
              <li>{`•	90% for 1ooN coverage (for a single detector alarm based on N detectors in the zone, initiate audible/ visual alarm in local control room and matrix panel).`}</li>
            
            </ul>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={FireGasMappingStudyMethodology4}
              />
            </div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Hydrocarbon Gas Detectors (Point Type)
            </h2>
            <p className="text-gray-700 mb-4">
              {`Point type gas detectors shall be suitable for detection of hydrocarbon gas and shall be catalytic sensor type. Detectors and associated terminal boxes shall be hazard certified flameproof. Detectors shall work on nominal 24 V dc. The detector shall be complete with all accessories for interfacing with the control panel.  
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The apparatus shall be suitable for the detection of combustible gases or vapour concentrations with air from 0% to 100% LEL. The time of response of the detector t50 shall not be greater than 10 secs, and t90 shall not be greater than 30 secs.
`}
            </p>
            </section>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Toxic (H2S) Gas Detectors

            </h2>
            <p className="text-gray-700 mb-4">
              {`Toxic (H2S) gas detectors shall be electrochemical type. They shall be suitable for detecting H2S in the range of 0-100 ppm. With all attachments fitted (including filters) the detector output shall achieve 20% of actual H2S concentration within 10 seconds and 50% within 30 seconds.
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Detectors and associated terminal boxes shall be hazard certified flameproof. Detectors shall work on nominal 24 V dc. The detector shall be complete with all accessories for interfacing with the control panel. 
`}
            </p>
            </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Flame Detectors

            </h2>
            <p className="text-gray-700 mb-4">
              {`Flame detector shall be suitable for detection of flames due to hydrocarbon fires and shall be ultraviolet/infrared (UV/IR) or Triple IR type. Detectors and associated terminal boxes shall be hazard certified flameproof. Detectors shall work on nominal 24 V dc. The detector shall be complete with all accessories for interfacing with the control panel. The detector shall be resistant to spurious operation caused by sunlight, artificial light and blackbody radiation. The UV detector shall respond to light in the wave length range of 0.185 to 0.245 microns. The lR detector shall respond to light in the wavelength range of 4.1 to 4.7 microns.
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The microprocessor-based detector shall be provided with flicker discrimination circuit to avoid false alarm caused by lightning, arc welding and other sources of radiation. The unit shall have visual indicators to show normal operation and alarm conditions. The detectors shall have a nominal 90° cone of vision.
`}
            </p>
            </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Flame Detector FOV 

            </h2>
            <p className="text-gray-700 mb-4">
              {`The below image shows the FOV of the flame detector used in the mapping study,
`}
            </p>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={FireGasMappingStudyMethodology5}
              />
            </div>

         
            </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Manual Alarm Call Points

            </h2>
            <p className="text-gray-700 mb-4">
              {`Manual Alarm Call points shall be outdoor duty type. Call points and associated terminal boxes shall be hazard certified flameproof. Manual Call points shall be of the break-glass type with protection against accidental operation. The call point shall be provided with a key operated test facility to enable periodic testing of the alarm contacts without the need to remove or break the glass.
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Call points shall work on nominal 24 V dc.  All call points shall be wired together in a single loop and connected to the control panel. The call points shall be complete with end of line resistors and accessories.
`}
            </p>

            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={FireGasMappingStudyMethodology6}
              />
            </div>

         
            </section>
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-8 mt-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
            Detection Coverage Assessment and Output Results  

            </h2>
            <p className="text-gray-700 mb-4">
              {`The F&G mapping study and detection coverage assessment for fire and gas detection within concerned F&G Zones was performed with industry most powerful and revolutionary software Detect 3D. Detect 3D is a software which uses 3D technologies for assessment and visualization.  
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Fire/Flame detection mapping must necessarily be performed fully considering three-dimensional attributes of the space, the cone of visions of the fire detector, and the vision obstruction caused by physical objects in the area. Detect 3D fully considers all of these aspects in a fully three-dimensional way. Likewise flame detectors Detect 3D also provides wide capabilities for gas detection mapping and volumetric detection coverage assessment of concerned Zone/Subzone that fully meets the requirements for performance-based F&G mapping assessments that follows the geographic coverage methodology.  
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The output of detection coverage assessment performed by Detect 3D is colour coded map (coloured detection coverage overlays at elevation of interest) of assessed Zone in addition to table where the coverage is calculated in terms of percentages. Percentages are provided for the monitored areas that have no coverage, one detector coverage, or two or more detector coverage. These results then used to compare achieved coverage versus target coverage.  
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`The colour coded detection maps in this study were presented for each F&G Zone where:   
`}
            </p>

            <ul>
              <li>{`•	Black overlay defines – “No detectors out of N detectors within Zone can detect fire or gas cloud”`}</li>
              <li>{`•	Blue overlay defines – “Only one detector out of N detectors within Zone can detect fire or gas  cloud”  `}</li>
            
              <li>{`•	Red overlay defines – “Two detectors out of N detectors within Zone can detect fire or gas cloud”  `}</li>
              <li>{`•	Green overlay defines – “Three detectors out of N detectors within Zone can detect fire or gas cloud”    `}</li>
              <li>{`•	Yellow overlay defines – “Four detectors out of N detectors within Zone can detect fire or gas cloud”   `}</li>
            
            </ul>

            <p className="text-gray-700 mb-4">
              {`In addition to colour coded coverage map with tabulated results for coverage percentages of assessed Zone Detect 3D also generates the table with 3D coordinates of detectors layout. For flame detectors these coordinates also include azimuth and declination degrees.  
`}
            </p>
            <p className="text-gray-700 mb-4">
              {`Example of such colour coded map for flame detector mapping with table providing calculated coverage percentage for typical Zone is presented below.  
`}
            </p>




            <div className="flex items-center justify-center mt-5">
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="2000"
                src={FireGasMappingStudyMethodology7}
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
