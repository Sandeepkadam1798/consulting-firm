"use client";

import React, { useState } from "react";

import { Card, CardBody, Input } from "@nextui-org/react";
import {  Button } from "@nextui-org/react";

import { FcAddressBook } from "react-icons/fc";


const Contactform = () => {
  const [formData, setFormData] = useState({
   
    email: "",
  
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
     
      !formData.email 
   
    ) {
      toast.error("Please fill out all required fields");
      return;
    }
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
                type="submit"
                className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default Contactform;
