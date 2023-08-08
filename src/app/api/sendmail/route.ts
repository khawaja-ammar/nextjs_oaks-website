import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { MAIL_ID, MAIL_PASS, OAKS_EMAIL } = process.env;
  const { subject, mailto, msg, name, contactNum } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: MAIL_ID,
      pass: MAIL_PASS,
    },
  });

  const mailOption = {
    from: MAIL_ID || undefined,
    to: OAKS_EMAIL || undefined,
    subject: `Website Message: ${subject}`,
    text: `Name: ${name}\nContact Email: ${mailto}\nContact Number: ${contactNum}\nMessage: ${msg}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Failed" });
  }
}
