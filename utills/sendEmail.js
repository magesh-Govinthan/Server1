import { BrevoClient } from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

// Initialize Brevo client with your API key
const client = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

/**
 * Send email using Brevo API
 * @param {string} to - recipient email
 * @param {string} subject - email subject
 * @param {string} htmlContent - body content
 */
export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const response = await client.transactionalEmails.sendTransacEmail({
      sender: {
        email: process.env.EMAIL_FROM,
        name: "Reset Password",
      },
      to: [
        {
          email: to,
          name: "Magesh",
        },
      ],
      subject,
      htmlContent,
    });

    console.log("Email sent:", response);
    return response;
  } catch (err) {
    console.error("Brevo send error:", err);
    throw err;
  }
};
