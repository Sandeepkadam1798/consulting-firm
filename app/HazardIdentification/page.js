"use client";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>HAZID Study - Aura Veritas</title>
        <meta
          name="description"
          content="HAZID Study conducted to identify potential hazards and threats in operations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-[#0b8d7c] mb-8 ">
            Hazard Identification (HAZID) Study
          </h1>

          {/* Introduction Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              What is HAZID?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              HAZID, also known as Hazard Identification, is conducted to
              identify potential hazards and threats in a
              process/operation/activity with an aim to eliminate or reduce the
              hazards at the earliest practicable stage of development. It is a
              workshop-based qualitative risk analysis technique commonly used.
            </p>
          </motion.section>

          {/* Why Perform HAZID */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Why Perform HAZID?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Early identification of hazards facilitates early implementation
              of risk reduction measures, thus reducing impacts on cost and
              schedule compared to later implementation of risk reduction
              measures.
            </p>
          </motion.section>

          {/* Objectives Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Objectives of the HAZID Study
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Systematically identify and analyze the potential hazards of the
                facility.
              </li>
              <li>
                Identify the root causes and threats associated with each event.
              </li>
              <li>
                Identify all consequences of hazards, called Major Accident
                Hazard (MAH).
              </li>
              <li>
                Identify preventive/mitigation safeguards (controls) that are in
                place or in design.
              </li>
              <li>
                Identify additional risk reduction measures to eliminate hazards
                or bring risks to As Low As Reasonably Practicable (ALARP).
              </li>
              <li>
                Provide input to Management/Asset owner in its efforts to manage
                risks.
              </li>
            </ul>
          </motion.section>

          {/* When to Perform HAZID */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              When is HAZID Performed?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              HAZID is typically performed during various stages of the asset
              lifecycle, including the Concept & FEED stage, Detailed Design,
              Construction, Operation, and Decommissioning stages.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Concept & Front-End Engineering Design (FEED) stage</li>
              <li>Detailed Design Stage</li>
              <li>Construction Stage</li>
              <li>Operation Stage</li>
              <li>Decommissioning/Demolition Stage</li>
            </ul>
          </motion.section>

          {/* HAZID Study Process */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              How is HAZID Performed?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The HAZID is a team-based brainstorming technique, guided by
              hazard guidewords and benefiting from the collective knowledge of
              the team.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Study Phases:
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">Preparatory Phase:</span>{" "}
                Understanding the scope, data collection, and developing Terms
                of Reference (ToR).
              </li>
              <li>
                <span className="font-semibold">Execution Phase:</span>{" "}
                Identifying hazards, brainstorming, recording hazards, and
                making recommendations.
              </li>
              <li>
                <span className="font-semibold">Documentation Phase:</span>{" "}
                Reporting, approval, and follow-ups for tracking recommendation
                closures.
              </li>
            </ol>
          </motion.section>

          {/* Aura Veritas Contribution */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              How Aura Veritas Can Help
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Aura Veritas engineers and technologists provide expertise to lead
              and facilitate HAZID studies as independent third-party auditors
              or HSE specialists to achieve the study objectives.
            </p>
          </motion.section>
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

// 'use client';
// import Head from 'next/head';
// import { motion } from 'framer-motion';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>HAZID Study - Aura Veritas</title>
//         <meta
//           name="description"
//           content="HAZID Study conducted to identify potential hazards and threats in operations."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="min-h-screen bg-gray-100 py-8 px-4">
//         <motion.div
//           className="max-w-5xl mx-auto bg-white p-8 shadow-lg"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//         >
//           {/* Title Animation */}
//           <motion.h1
//             className="text-4xl font-bold text-center text-[#0b8d7c] mb-8"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: 'easeInOut' }}
//           >
//             Hazard Identification (HAZID) Study
//           </motion.h1>

//           {/* Introduction Section */}
//           <motion.section
//             className="mb-12"
//             initial={{ opacity: 0, rotateX: 90 }}
//             whileInView={{ opacity: 1, rotateX: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is HAZID?</h2>
//             <p className="text-gray-600 leading-relaxed">
//               HAZID, also known as Hazard Identification, is conducted to identify potential hazards and threats in a
//               process/operation/activity with an aim to eliminate or reduce the hazards at the earliest practicable stage
//               of development. It is a workshop-based qualitative risk analysis technique commonly used.
//             </p>
//           </motion.section>

//           {/* Why Perform HAZID */}
//           <motion.section
//             className="mb-12"
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Perform HAZID?</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Early identification of hazards facilitates early implementation of risk reduction measures, thus reducing
//               impacts on cost and schedule compared to later implementation of risk reduction measures.
//             </p>
//           </motion.section>

//           {/* Objectives Section */}
//           <motion.section
//             className="mb-12"
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Objectives of the HAZID Study</h2>
//             <motion.ul
//               className="list-disc list-inside text-gray-600 space-y-2"
//               initial="hidden"
//               whileInView="visible"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: {
//                     staggerChildren: 0.2,
//                   },
//                 },
//               }}
//             >
//               {[
//                 'Systematically identify and analyze the potential hazards of the facility.',
//                 'Identify the root causes and threats associated with each event.',
//                 'Identify all consequences of hazards, called Major Accident Hazard (MAH).',
//                 'Identify preventive/mitigation safeguards (controls) that are in place or in design.',
//                 'Identify additional risk reduction measures to eliminate hazards or bring risks to As Low As Reasonably Practicable (ALARP).',
//                 'Provide input to Management/Asset owner in its efforts to manage risks.',
//               ].map((objective, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, ease: 'easeOut' }}
//                 >
//                   {objective}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.section>

//           {/* When to Perform HAZID */}
//           <motion.section
//             className="mb-12"
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">When is HAZID Performed?</h2>
//             <p className="text-gray-600 leading-relaxed">
//               HAZID is typically performed during various stages of the asset lifecycle, including the Concept & FEED
//               stage, Detailed Design, Construction, Operation, and Decommissioning stages.
//             </p>
//             <ul className="list-disc list-inside text-gray-600 space-y-2">
//               {[
//                 'Concept & Front-End Engineering Design (FEED) stage',
//                 'Detailed Design Stage',
//                 'Construction Stage',
//                 'Operation Stage',
//                 'Decommissioning/Demolition Stage',
//               ].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, ease: 'easeOut' }}
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.section>

//           {/* HAZID Study Process */}
//           <motion.section
//             className="mb-12"
//             initial={{ rotateY: 90, opacity: 0 }}
//             whileInView={{ rotateY: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">How is HAZID Performed?</h2>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               The HAZID is a team-based brainstorming technique, guided by hazard guidewords and benefiting from the
//               collective knowledge of the team.
//             </p>
//             <h3 className="text-xl font-medium text-gray-800 mb-2">Study Phases:</h3>
//             <motion.ol
//               className="list-decimal list-inside text-gray-600 space-y-2"
//               initial="hidden"
//               whileInView="visible"
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: {
//                     staggerChildren: 0.2,
//                   },
//                 },
//               }}
//             >
//               {[
//                 'Preparatory Phase: Understanding the scope, data collection, and developing Terms of Reference (ToR).',
//                 'Execution Phase: Identifying hazards, brainstorming, recording hazards, and making recommendations.',
//                 'Documentation Phase: Reporting, approval, and follow-ups for tracking recommendation closures.',
//               ].map((step, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, ease: 'easeOut' }}
//                 >
//                   {step}
//                 </motion.li>
//               ))}
//             </motion.ol>
//           </motion.section>

//           {/* Aura Veritas Contribution */}
//           <motion.section
//             className="mb-12"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">How Aura Veritas Can Help</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Aura Veritas engineers and technologists provide expertise to lead and facilitate HAZID studies as
//               independent third-party auditors or HSE specialists to achieve the study objectives.
//             </p>
//           </motion.section>
//         </motion.div>
//       </div>
//     </>
//   );
// }
