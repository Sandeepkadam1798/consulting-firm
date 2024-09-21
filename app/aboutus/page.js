'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Main Container */}
      <div className="container mx-auto px-6">

        {/* Header Section with Fade-in */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg mb-4 text-gray-600 max-w-6xl text-justify mx-auto">
          Aura Veritas Engineering and Consulting firm registered in Chennai, 
India specialized in the field of Engineering Consulting Services , 
Environment Compliance Services, Safety & Risk Management
Consulting Services , Sustainability Consulting Services, Auditing and 
Inspection Services, Asset Integrity Management, Training, Cyber 
Security, Technical Resourcing for all leading Energy, Infra, Logistics,
Health Care and Manufacturing Industries.

          </p>
          <p className='text-lg text-gray-600 max-w-6xl text-justify mx-auto  '>
          We believe in challenging ourselves and adding value to the rapidly 
changing energy industry. We believe in an individual approach as we 
understand each client has different needs. Together with you, we will 
find an optimal process to identify your needs and determine the best 
solutions.
          </p>

        </motion.section>

        {/* Expertise Section with Slide-in Animation */}
        <section className="flex flex-wrap justify-center mb-12">
          {[
            { title: 'Sustainability Services', text: 'We help implement sustainable practices for long-term success.' },
            { title: 'Risk Assessment', text: 'We provide risk assessments for smooth business operations.' },
            { title: 'ESG Goals', text: 'Our team helps with ESG objectives for a responsible future.' }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full md:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition duration-300 ease-in-out text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Mission Section with Scale Animation */}
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our mission is to guide organizations toward a sustainable and socially responsible future, ensuring that they thrive in an evolving market. We aim to create lasting positive impacts for both our clients and the planet.
          </p>
        </motion.section>

        {/* Team Members Section with Fade-in Animation */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Experts</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'John Doe', role: 'Sustainability Expert', img: 'https://via.placeholder.com/150' },
              { name: 'Jane Smith', role: 'Risk Assessment Lead', img: 'https://via.placeholder.com/150' },
              { name: 'Emily Johnson', role: 'ESG Consultant', img: 'https://via.placeholder.com/150' }
            ].map((team, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/4 text-center bg-white rounded-lg shadow-lg p-6"
              >
                <img
                  src={team.img}
                  alt={team.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{team.name}</h3>
                <p className="text-gray-500">{team.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
   
      </div>
    </div>
  );
};

export default AboutUs;
