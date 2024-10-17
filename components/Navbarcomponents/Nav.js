// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   Link,
//   Button,
//   Divider,
//   DropdownItem,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   NavbarMenuItem,
// } from "@nextui-org/react";
// import Image from "next/image";
// import Logo from "../../public/Images/Logo.png";
// import { NavigationMenuDemo } from "./Navmenu";
// import { FaPhone } from "react-icons/fa6";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet";
// import { IoMdMenu } from "react-icons/io";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaInstagram } from "react-icons/fa";
// import { SlSocialFacebook } from "react-icons/sl";
// import { FaWhatsapp } from "react-icons/fa";

// export default function Nav() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeitem, setactiveitem] = useState();
//   const active =
//     "uppercase text-xs font-bold cursor-pointer list-none text-[#FF7143]";
//   const unactive = "uppercase text-xs font-bold cursor-pointer list-none";

//   const Extendmenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const linkitem = ["HOME","About Us" , "blog", "Services","Contactus ", ];

//   const handleredirect = (link) => {
//     switch (link) {
//       case "HOME":
//         router.push("/");
//         break;
//       case "About Us":
//         router.push("/");
//         break;
//       case "blogs":
//         router.push("/blogs");
//         break;
//       case "Contactus":
//         router.push("/Contactus");
//         break;
//       case "Services":
//         router.push("/Services");
//         break;
      

//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     switch (pathname) {
//       case "/":
//         setactiveitem("HOME");
//         break;
//       case "/blogs":
//         setactiveitem("blog");
//         break;
//       case "/About Us":
//         setactiveitem("About Us");
//         break;
//       case "/Contactus":
//         setactiveitem("Contactus");
//         break;
//       // case "/destination":
//       //   setactiveitem("packages");
//         // break;
//       case "/Services":
//         setactiveitem("Services");
//         break;

//       case pathname.startsWith("/Jobdetails"):
//         setactiveitem("Careers");
//         break;
//       case pathname.startsWith("/Oursolution"):
//         setactiveitem("OUR SOLUTIONS");
//         break;
//       default:
//         setactiveitem("");
//     }
//   }, [pathname]);

//   return (
//     <Navbar maxWidth="full" className="w-full shadow-md  bg-primary-foreground "
//     // #0b8d7c
//      isMenuOpen={isMenuOpen}
//      onMenuOpenChange={setIsMenuOpen}>
//       <NavbarBrand>
//         <Link href="/" className="lg:w-24">
//           <Image
//             className="md:w-14 md:h-14 lg:w-16 lg:h-16 h-14 -ml-4 w-14 md:flex lg:flex   object-contain"
//             src={Logo}
//             alt="logo"
//           />
//         </Link>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavigationMenuDemo />
//       </NavbarContent>
//       <NavbarContent justify="end" className="gap-8 flex items-center w-full">
//         <NavbarItem>
//           <Button
//             as={Link}
//             className=" rounded-full bg-[#36a39e] text-white -mr-4 group"
//             href="#"
//             variant="solid"
//           >
//             <FaPhone className="text-white " /> +91-9150547979
//           </Button>
//         </NavbarItem>

//         <NavbarItem>
//           <Sheet>
//             <SheetTrigger>
//               <IoMdMenu
//                 size={24}
//                 className="md:hidden lg:hidden flex text-white"
//               />
//             </SheetTrigger>
//             <SheetContent side="right" className=" bg-[#0b8d7c]">
//               <SheetHeader>
//                 <SheetTitle>
//                   <div className="flex justify-between items-center w-full ">
//                     <div className="bg-[#36a39e] rounded-full">
//                       <Image className="w-14 h-14 rounded-full" src={Logo} alt="logo"  />
//                     </div>
//                     {/* <div className="w-8 h-8 bg-[#36a39e] rounded-full flex justify-center items-center">
//                     <SheetClose > 
//                       <span className="text-lg font-bold text-white p-2  text-center">
//                         X
//                       </span>
//                     </SheetClose>
//                   </div> */}
//                   </div>
//                 </SheetTitle>
//                 <SheetDescription>
//                   <div className="flex flex-col justify-between sm:gap-24 gap-16  items-start mt-8 overflow-scroll">
//                     <div className="flex justify-center items-start gap-4 flex-col w-full">
//                       {linkitem.map((value, index) => (
//                         <div
//                           key={index}
//                           className="w-full flex justify-start items-start flex-col gap-4"
//                         >
//                           <SheetClose>
//                             <span
//                               onClick={() => handleredirect(value)}
//                               className={
//                                 activeitem === value
//                                   ? "text-sm font-semibold uppercase text-white"
//                                   : "text-sm font-semibold uppercase text-white"
//                               }
//                             >
//                               {value}
//                             </span>
//                           </SheetClose>
//                           <Divider />
//                         </div>
//                       ))}
//                     </div>
//                     <div className="flex justify-cente items-center text-center w-full">
//                       <SheetClose>
//                         <button
//                           onClick={() => router.push("/Contactus")}
//                           className=" h-8 bg-[#36a39e] text-white rounded-full  w-52 font-bold"
//                         >
//                           +91-9150547979
//                         </button>
//                       </SheetClose>
//                     </div>
//                   </div>
//                 </SheetDescription>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet>
//         </NavbarItem>
//            <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className="hidden lg:flex md:flex uppercase items-center gap-2 group hover:text-[#0b8d7c] hover:bg-white py-2 px-3 h-10  rounded-full bg-[#36a39e] text-xs text-white ">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="hidden lg:flex md:flex text-white text-xs group-hover:text-[#0b8d7c]"
//         ></NavbarMenuToggle>
//           Menu
//            </div>
//       </NavbarContent>

//       <NavbarMenu className="bg-[#0b8d7c] flex flex-col gap-4 pt-4">
//         {linkitem.map((item, index) => (
//           <NavbarMenuItem  key={`${item}-${index}`} className="bg-[#0b8d7c]  ">
//             <span
//               onClick={() =>{ handleredirect(item),setIsMenuOpen(!isMenuOpen)}}
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//               className={
//                 activeitem === item
//                   ? "text-lg font-semibold uppercase text-white cursor-pointer "
//                   : "text-lg font-semibold uppercase text-white cursor-pointer "
//               }
//             >
//               {item}
//             </span>
        
//           </NavbarMenuItem>
//         ))}
//         <div className="flex justify-center flex-col gap-4 items-center w-full rounded-lg mt-2 -ml-8">
//           <div>
//             <p className="text-xl text-bold text-white">Connect With us</p>
//           </div>
//                   <div className="flex justify-around gap-2 items-center">
//                     <Link
//                       href={
//                         "/"
//                       }
//                     >
//                     <Link href={"/Blogs"}>

//                       <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
//                         <FaInstagram
//                           size={24}
//                           className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
//                         />
//                       </div>
//                     </Link>
//                     </Link>
//                     <Link href="/">

//                     <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
//                       <SlSocialFacebook
//                         size={24}
//                         className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
//                       />
//                     </div>
//                     </Link>
//                     <Link href={"/"}>
//                       <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
//                         <FaWhatsapp
//                           size={24}
//                           className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
//                         />
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//       </NavbarMenu>
//     </Navbar>
//   );
// }


"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
  Divider,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../public/Images/Logo.png";

import { NavigationMenuDemo } from "./Navmenu";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeitem, setactiveitem] = useState();
  const active =
    "uppercase text-xs font-bold cursor-pointer list-none text-[#FF7143]";
  const unactive = "uppercase text-xs font-bold cursor-pointer list-none";

  const Extendmenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const linkitem = ["HOME",  "Services","about us", "CONTACT US"];

  const handleredirect = (link) => {
    switch (link) {
      case "HOME":
        router.push("/");
        break;
      case "about us":
        router.push("/aboutus");
        break;
      // case "Domestic Trips":
      //   router.push("/packages");
      //   break;
      // case "Upcoming trip":
      //   router.push("/destination/upcomingTrip");
      //   break;
      // case "Weekend trip":
      //   router.push("/destination/weekendtrip");
      //   break;
      // case "Romantic Escapes":
      //   router.push("/destination/honeymoonTrip");
      //   break;
      // case "blog":
      //   router.push("/blogs");
      //   break;
      case "Services":
        router.push("/Services");
        break;
      case "CONTACT US":
        router.push("/Contactus");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setactiveitem("HOME");
        break;
      // case "/blogs":
      //   setactiveitem("blog");
      //   break;
      case "/Services":
        setactiveitem("Services");
        break;
      // case "/destination":
      //   setactiveitem("packages");
        break;
      case "/Contactus":
        setactiveitem("CONTACT US");
        break;
      case "/aboutus":
        setactiveitem("About us");
        break;

      // case pathname.startsWith("/Jobdetails"):
      //   setactiveitem("Careers");
      //   break;
      // case pathname.startsWith("/Oursolution"):
      //   setactiveitem("OUR SOLUTIONS");
      //   break;
      default:
        setactiveitem("");
    }
  }, [pathname]);

  return (
    <Navbar maxWidth="full" className="w-full shadow-md  bg-[#0b8d7c] "
     isMenuOpen={isMenuOpen}
     onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href="/" className="lg:w-32">
          <Image
            className="md:w-16 md:h-16 lg:w-16 lg:h-16 h-16 -ml-4 w-16 md:flex lg:flex   object-contain"
            src={Logo}
            alt="logo"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavigationMenuDemo />
      </NavbarContent>
      <NavbarContent justify="end" className="gap-8 flex items-center w-full">
        <NavbarItem>
          <Button
            as={Link}
            className=" rounded-full bg-[#36a39e] text-white -mr-4 group lg:flex md:flex  hidden "
            href="/Contactus"
            variant="solid"
          >
            <FaPhone className="text-white " /> +91-9150547979 
          </Button>

          <Button
            as={Link}
            className=" rounded-full  font-medium bg-[#36a39e] text-white -mr-4 group lg:hidden md:hidden   "
            href="/Services"
            variant="solid"
          >
            <FaUserTie className="text-white " />
             Services
          </Button>


        </NavbarItem>

        <NavbarItem>
          <Sheet>
            <SheetTrigger>

{/* 
                  <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className="hidden lg:flex md:flex uppercase items-center gap-2 group hover:text-[#0b8d7c] hover:bg-white py-2 px-3 h-10  rounded-full bg-[#36a39e] text-xs text-white ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden lg:flex md:flex text-white text-xs group-hover:text-[#0b8d7c]"
        ></NavbarMenuToggle>
          Menu
           </div>  */}
           
              <IoMdMenu
                size={24}
                className=" flex text-white"
                
              />
              {/* md:hidden lg:hidden */}
            </SheetTrigger>
            <SheetContent side="right" className=" bg-[#0b8d7c]">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-between items-center w-full ">
                    <div className="bg-[#36a39e] rounded-full">
                      <Image className="w-14 h-14 rounded-full" src={Logo} alt="logo"  />
                    </div>
                    {/* <div className="w-8 h-8 bg-[#36a39e] rounded-full flex justify-center items-center">
                    <SheetClose>
                      <span className="text-lg font-bold text-white p-2  text-center">
                        X
                      </span>
                    </SheetClose>
                  </div> */}
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col justify-between sm:gap-24 gap-16  items-start mt-8 overflow-hidden">
                    <div className="flex justify-center items-start gap-4 flex-col w-full">
                      {linkitem.map((value, index) => (
                        <div
                          key={index}
                          className="w-full flex justify-start items-start flex-col gap-4"
                        >
                          <SheetClose>
                            <span
                              onClick={() => handleredirect(value)}
                              className={
                                activeitem === value
                                  ? "text-sm font-semibold uppercase text-white"
                                  : "text-sm font-semibold uppercase text-white"
                              }
                            >
                              {value}
                            </span>
                          </SheetClose>
                          <Divider />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-cente items-center text-center w-full">
                      <SheetClose>
                        <button
                          onClick={() => router.push("/Contactus")}
                          className=" h-8 bg-[#36a39e] text-white rounded-full  w-52 font-bold md:hidden lg:hidden"
                        >
                          +91-9150547979 
                        </button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </NavbarItem>
           {/* <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className="hidden lg:flex md:flex uppercase items-center gap-2 group hover:text-[#0b8d7c] hover:bg-white py-2 px-3 h-10  rounded-full bg-[#36a39e] text-xs text-white ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden lg:flex md:flex text-white text-xs group-hover:text-[#0b8d7c]"
        ></NavbarMenuToggle>
          Menu
           </div> */}
      </NavbarContent>

      <NavbarMenu className="bg-[#0b8d7c] flex flex-col gap-4 pt-4">
        {linkitem.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`} className="bg-[#0b8d7c]  ">
            <span
              onClick={() =>{ handleredirect(item),setIsMenuOpen(!isMenuOpen)}}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={
                activeitem === item
                  ? "text-lg font-semibold uppercase text-white cursor-pointer "
                  : "text-lg font-semibold uppercase text-white cursor-pointer "
              }
            >
              {item}
            </span>
        
          </NavbarMenuItem>
        ))}
        <div className="flex justify-center flex-col gap-4 items-center w-full rounded-lg mt-2 -ml-8">
          <div>
            <p className="text-xl text-bold text-white">Connect With us</p>
          </div>
                  <div className="flex justify-around gap-2 items-center">
                    <Link
                      href={
                        "/"
                      }
                    >
                    <Link href={"https://www.instagram.com/aura.veritas/?igsh=MXRlMm5mdml6eHVjMg%3D%3D"}>

                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaInstagram
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>
                    </Link>
                    <Link href="https://www.facebook.com/share/rd2Wt1zS74FGbqeE/?mibextid=qi2Omg">

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
      </NavbarMenu>
    </Navbar>
  );
}
