import nodemailer from "nodemailer";

const sendEmail = async (email, link) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset Link",
    html: `<h3>Click below to reset password</h3>
           <a href="${link}">${link}</a>`,
  });
};


export default sendEmail;