"use client";

import React, { useState } from "react";
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
import VerificationModal from "../Varification/Varification";



// import { toast } from 'react-toastify';
// import { auth } from '../firebase'; // Adjust the path to your firebase config file
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();




const Contactform = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      !formData.email
   
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
        
        email: "",
       
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

           




            <div className="w-full flex justify-center items-center mt-4">
              <Button
              onClick={() => setIsModalOpen(true)}
                type="submit"
                className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Contactform;
