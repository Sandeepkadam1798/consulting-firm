


import AboutUs from "@/components/AboutUs/AboutUS";
import Chatbot from "@/components/Chatbot/Chatbot";
import ContactFormMain from "@/components/Contactuscomponents/ContactFormMain";
import Hero from "@/components/Herocomponenets/Hero";
import Nav from "@/components/Navbarcomponents/Nav";
import OurServices from "@/components/OurServices/OurServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
   {/* <Hero/> */}
   <Hero/>
   <OurServices/>
   {/* <AboutUs/> */}
   <ContactFormMain />
   <Chatbot/>
    </div>
  );
}
