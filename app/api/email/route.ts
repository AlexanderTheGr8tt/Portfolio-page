import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message, subject } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_GMAIL,
      pass: process.env.MY_APP_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_GMAIL,
    to: process.env.MY_HOTMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${subject}, message from ${name}  (${email})`,

    text: `${message}

    
     ${name}  (${email})
    `,
  };

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
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}