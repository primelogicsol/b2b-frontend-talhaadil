import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, inquiryType } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER || "",
        pass: process.env.MAIL_PASS || "",
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: "talhaadil48@gmail.com",
      subject: `We've received your inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out regarding <strong>${inquiryType}</strong>.</p>
          <p>We have received your message:</p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #0070f3;">
            ${message}
          </blockquote>
          <p>Our team will get back to you within 48 hours.</p>
          <br/>
          <p>Best regards,</p>
          <p>Your Company Name</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
  }
}











