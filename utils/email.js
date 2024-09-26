// import nodemailer from 'nodemailer';

// export const sendOtpEmail = async (email, otp) => {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.com', // SMTP server
//     port: 587,
//     secure: false, // Use TLS
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: '"Pankaj Dehariya" <pankajdehariya.seo@gmail.com>', // sender address
//     to: email, // list of receivers
//     subject: 'Your OTP Code', // Subject line
//     text: `Your OTP code is ${otp}`, // plain text body
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return { success: true };
//   } catch (error) {
//     console.error('Error sending OTP email:', error);
//     return { success: false, error };
//   }
// };
