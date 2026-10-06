import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, subject } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const otherEmail = process.env.OTHER_EMAIL;

    if (!emailUser || !emailPass) {
      console.error('Email credentials are not set in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email Template for the sender (the person who filled the form)
    const senderHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #000000 0%, #333333 100%); color: white; border-radius: 8px; font-weight: bold; font-size: 24px; letter-spacing: 1px;">
            ANUMEET KUMAR
          </div>
        </div>
        
        <div style="background-color: #fcfcfc; border: 1px solid #eaeaea; border-radius: 12px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);">
          <h2 style="color: #111111; margin-top: 0; font-size: 24px; font-weight: 600;">Hello ${name},</h2>
          
          <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for reaching out! I've received your message and will review it shortly. I typically respond within 24-48 hours.
          </p>
          
          <div style="background-color: #f5f5f5; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <p style="color: #888888; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 0; margin-bottom: 8px;">Your Message</p>
            <p style="color: #333333; font-size: 15px; line-height: 1.5; margin: 0; font-style: italic; white-space: pre-wrap;">"${message}"</p>
          </div>
          
          <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            In the meantime, feel free to check out some of my recent projects on my portfolio.
          </p>
          
          <div style="text-align: center;">
            <a href="https://github.com/anumeetkumar" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 15px;">
              Visit GitHub
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; color: #999999; font-size: 13px;">
          <p>&copy; ${new Date().getFullYear()} Anumeet Kumar. All rights reserved.</p>
          <p>Mohali, India</p>
        </div>
      </div>
    `;

    // Email Template for the owner (you)
    const ownerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #007bff;">New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <h4 style="margin-bottom: 5px;">Message:</h4>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
      </div>
    `;

    // Send email to the person who contacted
    await transporter.sendMail({
      from: `"Anumeet Kumar" <${emailUser}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      text: `Hello ${name},\n\nThank you for reaching out! I've received your message and will review it shortly. I typically respond within 24-48 hours.\n\nYour Message:\n"${message}"\n\nBest regards,\nAnumeet Kumar`,
      html: senderHtml,
    });

    // Send email to the owner
    const ownerEmails = [emailUser];
    if (otherEmail) {
      ownerEmails.push(otherEmail);
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: ownerEmails.join(', '),
      subject: `New Contact from ${name}${subject ? ` - ${subject}` : ''}`,
      text: `New Contact Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: ownerHtml,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
