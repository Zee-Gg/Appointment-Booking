import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, reason, type } = body;

    // Validate required fields
    if (!name || !email || !reason) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const subject = type === 'booking' 
      ? `New Appointment Request from ${name}`
      : `New Contact Message from ${name}`;

    const htmlContent = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${date ? `<p><strong>Preferred Date:</strong> ${date}</p>` : ''}
      <p><strong>Message/Reason:</strong></p>
      <p>${reason}</p>
      <br/>
      <p><em>Reply to this email to contact the patient directly.</em></p>
    `;

    const data = await resend.emails.send({
      from: 'Doctor Portfolio <onboarding@resend.dev>',
      to: ['zainabgilani2226@gmail.com'],
      subject: subject,
      replyTo: email,
      html: htmlContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
