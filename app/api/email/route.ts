import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  // Extract data from the request's JSON body
  const { email, name, message, subject } = await request.json();

  // Create a transporter for sending emails
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_GMAIL,
      pass: process.env.MY_APP_PASS,
    },
  });

  // Compose the email message options
  const mailOptions: Mail.Options = {
    from: process.env.MY_GMAIL,
    to: process.env.MY_HOTMAIL,
    subject: `Message from ${name}  (${email})`,
    text: `${message}`,
  };

  // Function to send the email and return a promise
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    // Attempt to send the email
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    // Handle any errors during the email sending process
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
