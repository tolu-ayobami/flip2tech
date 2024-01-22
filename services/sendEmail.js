import { createTransport } from "nodemailer";

const email = "khalid@afis.ng";
const password = "OFFice001";

const mailTransport = createTransport({
  host: "afis.ng",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export const sendEmail = async (userEmail) => {
  const mailOptions = {
    from: '"FlipToTech" <noreply@fliptotech.ng>',
    to: userEmail,
    subject: "Welcome to FlipToTech",
    html: onRegisterTemplate,
  };

  try {
    const info = await mailTransport.sendMail(mailOptions);
    console.log(`Welcome email sent to ${userEmail}`, info.response);
    return `Welcome email sent to ${userEmail}`;
  } catch (error) {
    console.error("Welcome Email Error =>", error);
    return `Welcome email error: ${error.message}`;
  }
};

const onRegisterTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        /* Add your custom styles here */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .header {
          background-color: #f2f2f2;
          padding: 15px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .header h1 {
          margin: 0;
          color: #333;
        }
        .content {
          padding: 15px;
        }
        .cta-button {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #fcd34d;
          color: #000000;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to FlipToTech</h1>
        </div>
        <div class="content">
          <p>Hello there!</p>
          <p>Thank you for registering with FlipToTech. We're thrilled to have you on board. 🎉</p>
          <p>Get started on your Tech learning journey with FlipToTech now!</p>
          <a href="https://fliptotech.ng/" class="cta-button">Get Started</a>
        </div>
      </div>
    </body>
  </html>
`;
