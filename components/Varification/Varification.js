// import { useState } from 'react';
// import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

// import { auth } from '../../firebase/firebase'; 

// const VerificationModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1); // 1 for Email, 2 for OTP
//   const [errorMessage, setErrorMessage] = useState('');
//   const [verified, setVerified] = useState(false);


//   const actionCodeSettings = {
//     // URL to redirect to after email verification, use your domain
//     url: 'http://localhost:3000',
//     handleCodeInApp: true,
//   };

//   const handleSendOTP = async () => {
//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem('emailForSignIn', email); // Store the email for later verification
//       setStep(2);
//     } catch (error) {
//       setErrorMessage('Error sending OTP. Please try again.');
//     }
//   };


//   const handleVerifyOTP = async () => {
//     const storedEmail = window.localStorage.getItem('emailForSignIn');
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       try {
//         await signInWithEmailLink(auth, storedEmail, window.location.href);
//         setVerified(true); // OTP verified successfully
//       } catch (error) {
//         setErrorMessage('Invalid OTP. Please check your email and try again.');
//       }
//     }
//   };


//   const handleVerify = () => {
//     // Add logic for verifying email/OTP
//     if (step === 1) {
//       // Simulate sending OTP to the email
//       console.log(`Email entered: ${email}`);
//       setStep(2);
//     } else if (step === 2) {
//       console.log(`OTP entered: ${otp}`);
//       // OTP verification logic
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
//         <div className="text-right">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition duration-150"
//           >
//             &times;
//           </button>
//         </div>
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-semibold">
//             {step === 1 ? 'Verify Your Email' : 'Enter OTP'}
//           </h2>
//         </div>

      

//         {step === 1 ? (
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         ) : (
//           <div>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter OTP"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         )}

//         <button
//           onClick={handleVerify}
//           className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-150"
//         >
//           {step === 1 ? 'Send OTP' : 'Verify'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerificationModal;

// // ===========================>> varification by emails links 
// import { useState } from 'react';
// import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
// import { auth } from '../firebase';  // Import the Firebase auth

// const VerificationModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [step, setStep] = useState(1); // 1 for Email, 2 for OTP
//   const [errorMessage, setErrorMessage] = useState('');
//   const [verified, setVerified] = useState(false);

//   const actionCodeSettings = {
//     // URL to redirect to after email verification, use your domain
//     url: 'http://localhost:3000',
//     handleCodeInApp: true,
//   };

//   const handleSendOTP = async () => {
//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem('emailForSignIn', email); // Store the email for later verification
//       setStep(2);
//     } catch (error) {
//       setErrorMessage('Error sending OTP. Please try again.');
//     }
//   };

//   const handleVerifyOTP = async () => {
//     const storedEmail = window.localStorage.getItem('emailForSignIn');
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       try {
//         await signInWithEmailLink(auth, storedEmail, window.location.href);
//         setVerified(true); // OTP verified successfully
//       } catch (error) {
//         setErrorMessage('Invalid OTP. Please check your email and try again.');
//       }
//     }
//   };

//   const handleVerify = () => {
//     if (step === 1) {
//       handleSendOTP();
//     } else if (step === 2) {
//       handleVerifyOTP();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
//         <div className="text-right">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition duration-150"
//           >
//             &times;
//           </button>
//         </div>
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-semibold">
//             {step === 1 ? 'Verify Your Email' : 'Enter OTP'}
//           </h2>
//         </div>

//         {errorMessage && (
//           <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
//         )}

//         {step === 1 ? (
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         ) : (
//           <div>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Check your email and click the OTP link"
//               disabled
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         )}

//         <button
//           onClick={handleVerify}
//           className={`w-full mt-6 py-2 rounded-lg transition duration-150 ${
//             verified ? 'bg-green-500' : 'bg-blue-500 text-white'
//           } hover:bg-blue-600`}
//         >
//           {verified ? 'Verified' : step === 1 ? 'Send OTP' : 'Verify'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerificationModal;


// ===============================>>
// import { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// // import {auth, db } from "../../firebase/firebase"
// import { auth, db } from '@/firebase/firebase';

// const VerificationModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const [step, setStep] = useState(1); // 1 for Email, 2 for OTP
//   const [errorMessage, setErrorMessage] = useState('');
//   const [verified, setVerified] = useState(false);

//   const generateOtp = () => {
//     return Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
//   };

//   const sendOtpToApi = async (otp) => {
//     try {
//       const response = await fetch('/api/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, otp }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send OTP.');
//       }
//       console.log('OTP sent successfully.');
//     } catch (error) {
//       setErrorMessage('Error sending OTP. Please try again.');
//     }
//   };

//   const handleSendOTP = async () => {
//     const otp = generateOtp();
//     setGeneratedOtp(otp);  // Save OTP locally to compare later

//     // Save the OTP to Firestore for the user's email (optional for extra security)
//     try {
//       await addDoc(collection(db, 'otps'), {
//         email,
//         otp,
//         createdAt: new Date(),
//       });
//       await sendOtpToApi(otp); // Send OTP through the NodeMailer API
//       setStep(2);  // Move to the next step (OTP input)
//     } catch (error) {
//       setErrorMessage('Error sending OTP. Please try again.');
//     }
//   };

//   const handleVerifyOTP = async () => {
//     if (otp === generatedOtp) {
//       setVerified(true); // OTP verified successfully
//     } else {
//       setErrorMessage('Invalid OTP. Please try again.');
//     }
//   };

//   const handleVerify = () => {
//     if (step === 1) {
//       handleSendOTP();
//     } else if (step === 2) {
//       handleVerifyOTP();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
//         <div className="text-right">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition duration-150"
//           >
//             &times;
//           </button>
//         </div>
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-semibold">
//             {step === 1 ? 'Verify Your Email' : 'Enter OTP'}
//           </h2>
//         </div>

//         {errorMessage && (
//           <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
//         )}

//         {step === 1 ? (
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         ) : (
//           <div>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter 4-digit OTP"
//               maxLength={4}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         )}

//         <button
//           onClick={handleVerify}
//           className={`w-full mt-6 py-2 rounded-lg transition duration-150 ${
//             verified ? 'bg-green-500' : 'bg-blue-500 text-white'
//           } hover:bg-blue-600`}
//         >
//           {verified ? 'Verified' : step === 1 ? 'Send OTP' : 'Verify'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerificationModal;



// import { useState } from 'react';

// const VerificationModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [serverOtp, setServerOtp] = useState(''); // Store OTP from the server
//   const [step, setStep] = useState(1);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [verified, setVerified] = useState(false);

//   const handleSendOTP = async () => {
//     try {
//       const response = await fetch('/api/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to send OTP.');
//       }

//       setServerOtp(data.otp); // Save the OTP received from the server
//       setStep(2); // Move to OTP step
//     } catch (error) {
//       setErrorMessage(error.message || 'Error sending OTP. Please try again.');
//     }
//   };

//   const handleVerifyOTP = () => {
//     if (otp === serverOtp) {
//       setVerified(true);
//     } else {
//       setErrorMessage('Invalid OTP. Please try again.');
//     }
//   };

//   const handleVerify = () => {
//     if (step === 1) {
//       handleSendOTP();
//     } else if (step === 2) {
//       handleVerifyOTP();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
//         <div className="text-right">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition duration-150"
//           >
//             &times;
//           </button>
//         </div>
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-semibold">
//             {step === 1 ? 'Verify Your Email' : 'Enter OTP'}
//           </h2>
//         </div>

//         {errorMessage && (
//           <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
//         )}

//         {step === 1 ? (
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         ) : (
//           <div>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter 4-digit OTP"
//               maxLength={4}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         )}

//         <button
//           onClick={handleVerify}
//           className={`w-full mt-6 py-2 rounded-lg transition duration-150 ${
//             verified ? 'bg-green-500' : 'bg-blue-500 text-white'
//           } hover:bg-blue-600`}
//         >
//           {verified ? 'Verified' : step === 1 ? 'Send OTP' : 'Verify'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerificationModal;
