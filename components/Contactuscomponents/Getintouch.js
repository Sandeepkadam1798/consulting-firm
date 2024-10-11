import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Getintouch = () => {
  return (
    <div className="flex justify-start items-start w-full mx-auto lg:gap-8 md:gap-8 gap-4 flex-col">
      <div>
        <p className="text-xl lg:text-3xl md:text-3xl font-semibold leading-7 -tracking-tight">
          Get in Touch
          <span className='lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span>
        </p>
      </div>
      <div className="lg:text-lg md:text-sm text-sm leading-7 text-justify text-gray-500 lg:w-100 md:w-96">
        <p>{`Need assistance or have any queries? We're here to help! Simply fill out the form below, and our dedicated team will get back to you shortly.`}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-between items-center gap-4">
          <MdOutlineEmail size={24} className="text-[#36a39e]" />
          <p>ceo@auraveritas.in</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <FiPhone size={24} className="text-[#36a39e]"/>
          <p>+91-9150547979 | +91-8939204319</p>
        </div>
      </div>
      <div className="md:flex hidden lg:flex justify-center items-center w-full rounded-lg lg:h-24 md:h-24 h-14 bg-primary-foreground lg:mt-20 md:mt-20 mt-4">
        <div className="flex justify-around gap-2 items-center">
        <Link
                      href={
                        "https://www.instagram.com/aura.veritas/?igsh=MXRlMm5mdml6eHVjMg%3D%3D"
                      }
                    >
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaInstagram
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>
                    <Link  href={"https://www.facebook.com/share/rd2Wt1zS74FGbqeE/?mibextid=qi2Omg"}>
                    <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                      <SlSocialFacebook
                        size={24}
                        className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                      />
                    </div>
                    </Link>
                    
                    <Link href={"https://wa.me/9150547979"}>
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaWhatsapp
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>

        </div>
      </div>
    </div>
  );
};

export default Getintouch;
