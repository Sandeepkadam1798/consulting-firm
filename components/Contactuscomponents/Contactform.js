"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import ContactMap from "./ContactMap";
// import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
// import { auth } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
// import VerificationModal from "../Varification/Varification";


// import { toast } from 'react-toastify';
// import { auth } from '../firebase'; // Adjust the path to your firebase config file
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();

const Contactform = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   // Check if the user is returning after clicking the email OTP link
  //   if (isSignInWithEmailLink(auth, window.location.href)) {
  //     setIsModalOpen(true);
  //   }
  // }, []);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    serviceRequired: [],
    message: "",
  });

  const [isVerified, setIsVerified] = useState(false);
  // const [formData, setFormData] = useState({ serviceRequired: [] });

  const services = [
    { key: "Hazard Identification (HAZID)", label: "Hazard Identification (HAZID)" },
    { key: "Hazard & Operability (HAZOP)", label: "Hazard & Operability (HAZOP)" },
    { key: "Safety Integrity Level Assessment", label: "Safety Integrity Level Assessment" },
    { key: "Quantitative Risk Assessment", label: "Quantitative Risk Assessment" },
    { key: "Fire and Explosion Risk Assessment", label: "Fire and Explosion Risk Assessment" },
    { key: "ESG & Climate Change Services", label: "ESG & Climate Change Services" },
    { key: "Escape, Evacuation & Rescue Assessment", label: "Escape, Evacuation & Rescue Assessment" },
    { key: "Other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (selectedKeys) => {const selectedLabels = Array.from(selectedKeys).map((key) => {
    return services.find((service) => service.key === key)?.label;
  });
  setFormData({
    ...formData,
    serviceRequired: selectedLabels,
  });
};


const handleEmailVerification = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, 'temporaryPassword');
    const user = userCredential.user;

    // Send email verification
    await sendEmailVerification(user);
    toast.success('Verification email sent. Please check your inbox.');

    // Listen for email verification state
    auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setIsVerified(true);
        toast.success('Email successfully verified!');
      }
    });
  } catch (error) {
    toast.error('Error in email verification: ' + error.message);
  }
};




  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.serviceRequired
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

    if (!isVerified) {
      toast.error('Please verify your email before submitting the form');
      return;
    }

    // If email is verified, proceed with the form submission logic
    toast.success('Form submitted successfully!');

    const sendForm = async () => {
      const response = await fetch("/api/Contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        serviceRequired: [],
        message: "",
      });
    };

    toast.promise(sendForm(), {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };




  return (
    <>
      <div className="flex flex-col gap-4 justify-start items-start px-3 py-1 w-full ring-1 ring-gray-200 p-4 rounded-md ">
        <div className="flex flex-col w-full justify-start items-start p-2 py-4 gap-4">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 place-content-center justify-between items-start">
              <Input
                type="text"
                name="firstName"
                variant="bordered"
                labelPlacement="outside"
                label="First Name"

                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="First Name"
                startContent={
                  <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                label="Last Name"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                labelPlacement="outside"

                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                startContent={
                  <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="text"
                name="mobileNumber"
                variant="bordered"
                label="Mobile Number"
                radius="sm"
                labelPlacement="outside"

                className="w-full rounded-none"
                size="lg"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                startContent={
                  <FcCallback className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="text"
                name="email"
                variant="bordered"
                label="Email"
                labelPlacement="outside"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                startContent={
                  <FcAddressBook className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            {/* varification */}
            {/* <div className="w-full flex justify-center items-center mt-4">
              <Button
                type="button"
                className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
                onClick={handleEmailVerification}
              >
                Send Verification Email
              </Button>
              
            </div> */}

            <div className="w-full mt-12">
              
              <Select
                name="serviceRequired"
                label="inquiry"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Select inquiry type (one or multiple)"
                size="lg"
                radius="sm"
                className="mt-4  w-full max-w-xl md:max-w-80 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto overflow-hidden"
               selectionMode="multiple"
               selectedKeys={new Set(
                formData.serviceRequired.map((serviceLabel) =>
                  services.find((service) => service.label === serviceLabel)?.key
                )
              )}

              onSelectionChange={handleServiceChange}
              menuClass="w-full max-w-xl md:max-w-10 overflow-auto"


              >
              {services.map((service) => (
                  <SelectItem 
                  key={service.key} 
                  value={service.key} 
                  className="text-ellipsis whitespace-nowrap ">
                     
    
                    {service.label}
                  </SelectItem>
                ))}
              </Select>

            </div>

            <div className="w-full mt-4">
              <Textarea
                name="message"
                variant="bordered"
                placeholder="Your message (Optional)"
                label="Message"
                labelPlacement="outside"
                className="w-full"
                value={formData.message}
                onChange={handleChange}
                startContent={
                  <FcComments className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>




            <div className="w-full flex justify-center items-center mt-4">
              <Button
              onClick={() => setIsModalOpen(true)}
                type="submit"
                className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
              >
                Submit
              </Button>
              {/* <VerificationModal isOpen={isModalOpen} onClose={closeModal} /> */}
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Contactform;
