import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, subject, description } = await request.json();

    console.log("process.env.ZOHO_EMAIL", process.env.ZOHO_EMAIL);
    console.log("process.env.ZOHO_APP_PASSWORD", process.env.ZOHO_APP_PASSWORD);
    console.log("process.env.ZOHO_SMTP_HOST", process.env.ZOHO_SMTP_HOST);
    console.log("process.env.ZOHO_SMTP_PORT", process.env.ZOHO_SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST!,
      port: Number(process.env.ZOHO_SMTP_PORT ?? 465),
      secure: process.env.ZOHO_SMTP_PORT === '465', // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_EMAIL!,
        pass: process.env.ZOHO_APP_PASSWORD!,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: 'contact@innoversesoft.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300;">New Contact Form Submission</h1>
              <p style="color: #e8e8e8; margin: 10px 0 0 0; font-size: 16px;">InnoVerseSoft Contact Form</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 40px 30px;">
              <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin-bottom: 30px; border-radius: 0 4px 4px 0;">
                <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 22px; font-weight: 500;">Contact Details</h2>
                
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 80px; font-weight: 600; color: #555555;">Name:</span>
                  <span style="color: #333333; font-weight: 500;">${fullName}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 80px; font-weight: 600; color: #555555;">Email:</span>
                  <span style="color: #667eea; font-weight: 500; text-decoration: none;">${email}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <span style="display: inline-block; width: 80px; font-weight: 600; color: #555555;">Subject:</span>
                  <span style="color: #333333; font-weight: 500;">${subject}</span>
                </div>
              </div>
              
              <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 6px; padding: 25px;">
                <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 500;">Message</h3>
                <div style="color: #555555; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${description}</div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #6c757d; margin: 0; font-size: 14px;">
                This email was sent from the InnoVerseSoft contact form at 
                <span style="color: #667eea;">${new Date().toLocaleString()}</span>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 