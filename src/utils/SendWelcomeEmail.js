// // import nodemailer from "nodemailer";

// //=======================================================to handle sending signup email
// export const sendWelcomeEmail = async (userEmail) => {
//   const email = "khalid@afis.ng";
//   const password = "OFFice001";
//   try {
//     // Create a nodemailer transporter using your email service credentials
//     const transporter = nodemailer.createTransport({
//       host: "afis.ng",
//       port: 465,
//       secure: true,
//       auth: {
//         user: email,
//         pass: password,
//       },
//     });

//     //register template
//     const onRegisterTemplate = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <style>
//             /* Add your custom styles here */
//             body {
//               font-family: Arial, sans-serif;
//               line-height: 1.6;
//               color: #ffffff; /* Text color (white) */
//               background-color: #ffffff; /* Primary color (white) */
//             }
//             .container {
//               max-width: 600px;
//               margin: 0 auto;
//               padding: 20px;
//               border: 1px solid #ccc;
//               border-radius: 5px;
//               background-color: #ffffff; /* Container background color (white) */
//             }
//             .header {
//               background-color: #fde047; /* Secondary color (#fde047) */
//               padding: 15px;
//               text-align: center;
//               border-radius: 5px 5px 0 0;
//             }
//             .header h1 {
//               margin: 0;
//               color: #333;
//             }
//             .content {
//               padding: 15px;
//             }
//             .cta-button {
//               display: inline-block;
//               margin-top: 15px;
//               padding: 10px 20px;
//               background-color: #fde047; /* Secondary color (#fde047) */
//               color: #ffffff; /* Button text color (white) */
//               text-decoration: none;
//               border-radius: 5px;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h1>Welcome to ScoreBox</h1>
//             </div>
//             <div class="content">
//               <p>Hello there!</p>
//               <p>Welcome to FlipToTech! We're thrilled to have you on board. 🎉</p>
//               <p>Explore all the exciting bootcamps and courses and get started on your learning journey!</p>
//               <a href="http://fliptotech.ng/" class="cta-button">Get Started</a>
//             </div>
//           </div>
//         </body>
//       </html>
//   `;

//     // Define the email content
//     const mailOptions = {
//       from: "<noreply@fliptotech.ng>",
//       to: userEmail,
//       subject: "Welcome to FlipToTech",
//       html: onRegisterTemplate,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     console.log("Welcome email sent successfully!");
//   } catch (error) {
//     console.error("Error sending welcome email:", error);
//   }
// };
