// // pages/api/send-otp.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, otp } = req.body;

//     // Set up your SMTP service for sending emails
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com', // Gmail as an example
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail address
//         pass: process.env.EMAIL_PASS, // your Gmail password or app-specific password
//       },
//     });

//     // Send the email
//     try {
//       await transporter.sendMail({
//         from: '"Your App Name" <your-email@example.com>', // Sender address
//         to: email, // Recipient email
//         subject: 'Your OTP Code', // Subject line
//         text: `Your OTP code is ${otp}`, // Plain text body
//       });
//       res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error sending OTP', error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



// import { sendOtpEmail } from "@/utils/email";

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, otp } = req.body;
//     const result = await sendOtpEmail(email, otp);
    
//     if (result.success) {
//       res.status(200).json({ message: 'OTP sent successfully' });
//     } else {
//       res.status(500).json({ message: 'Failed to send OTP', error: result.error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

// ======================================================>>>
// pages/api/send-otp.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, otp } = req.body;

//     // Set up your SMTP service for sending emails
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com', // Gmail as an example
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER, // your Gmail address
//         pass: process.env.EMAIL_PASS, // your Gmail password or app-specific password
//       },
//     });

//     // Send the email
//     try {
//       await transporter.sendMail({
//         from: '"Your App Name" <your-email@example.com>', // Sender address
//         to: email, // Recipient email
//         subject: 'Your OTP Code', // Subject line
//         text: `Your OTP code is ${otp}`, // Plain text body
//       });
//       res.status(200).json({ message: 'OTP sent successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error sending OTP', error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
// =====================================================>>>



import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Generate a 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // Set up your SMTP service for sending emails
    // let transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: false,
    //   auth: {
        // user: process.env.EMAIL_USER,
        // pass: process.env.EMAIL_PASS,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
  });

    // Send the email
    try {
      await transporter.sendMail({
        from: '"pankaj j" <pankajdehariya.seo@gmail.com>',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      });

      res.status(200).json({ message: 'OTP sent successfully', otp }); // Send OTP back to frontend
    } catch (error) {
      res.status(500).json({ message: 'Error sending OTP', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
