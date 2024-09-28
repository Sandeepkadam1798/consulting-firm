// "use client";

// import React from "react";

// import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
// import { auth } from '../../firebase/firebase';
// import { useEffect, useState } from 'react';
// import VerificationModal from "../Varification/Varification";



// const Contactform = () => {


//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     // Check if the user is returning after clicking the email OTP link
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       setIsModalOpen(true);
//     }
//   }, []);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     toast.promise(sendForm(), {
//       loading: "Sending message...",
//       success: "Message sent successfully!",
//       error: "Failed to send message. Please try again.",
//     });
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-4 justify-start items-start px-3 py-1 w-full ring-1 ring-gray-200 p-4 rounded-md ">
//         <div className="flex flex-col w-full justify-start items-start p-2 py-4 gap-4">
//           <form className="w-full" >
//             <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 place-content-center justify-between items-start">   
//             </div>

//                {/* varification */}
//             <div className="w-full flex justify-center items-center mt-4">
//               <Button
//                onClick={() => setIsModalOpen(true)}
//                 type="button"
//                 className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
//               >
//                 Send Verification Email
//               </Button>
//               <VerificationModal isOpen={isModalOpen} onClose={closeModal} />
              
//             </div>

//           </form>
//         </div>
//       </div>
//       <Toaster />
//     </>
//   );
// };

// export default Contactform;
