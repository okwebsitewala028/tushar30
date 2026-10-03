'use server';

import { Resend } from 'resend';

export async function sendContactEmail(values: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return { 
        success: false, 
        error: 'Email service is not configured. Please add RESEND_API_KEY to your environment variables.' 
      };
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, subject, message } = values;
    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const { data, error } = await resend.emails.send({
      from: 'Firm Inquiry <onboarding@resend.dev>',
      to: ['tusharmahajan028@gmail.com'],
      replyTo: email,
      subject: `New Firm Inquiry: ${subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0f172a;">New Contact Form Submission</h2>
          <p style="font-size: 0.9em; color: #64748b;">Submitted on: ${now}</p>
          
          <div style="margin-top: 20px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="margin-top: 30px; font-size: 0.8em; color: #94a3b8;">
            This is an automated notification from your website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Email action error:', error);
    return { success: false, error: error.message || 'An unexpected error occurred.' };
  }
}
