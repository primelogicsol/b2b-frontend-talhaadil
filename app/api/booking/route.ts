import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

type BookingBody = {
  user_type: string;
  appointment_type: 'virtual' | 'offline';
  appointment_date: string; // "YYYY-MM-DD"
  appointment_time: string; // "HH:mm"
  time_zone: string;        // "EST", "IST", etc.
  purpose: string;
  first_name: string;
  last_name: string;
  business_name: string;
  email: string;
  phone_number: string;
  website?: string | null;
  office_location?: string;
};

// Map short TZ to UTC offset in hours
const TZ_OFFSETS: Record<string, number> = {
  EST: -5,
  EDT: -4,
  IST: 5.5,
  PST: -8,
  CET: 1,
};

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

function parseDateTime(book: BookingBody) {
  const [hours, minutes] = book.appointment_time.split(':').map(Number);
  const [year, month, day] = book.appointment_date.split('-').map(Number);

  const offset = TZ_OFFSETS[book.time_zone] ?? 0;

  // Create Date in UTC using offset
  const dateUtc = new Date(Date.UTC(year, month - 1, day, hours - offset, minutes));
  return dateUtc;
}

async function createGoogleMeetLink(book: BookingBody): Promise<string> {
  const jwtClient = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL!,
    key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes: SCOPES,
  });

  const calendar = google.calendar({ version: 'v3', auth: jwtClient });

  const startDateTime = parseDateTime(book);
  const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

  const event = await calendar.events.insert({
    calendarId: 'primary',
    requestBody: {
      summary: `Meeting with ${book.first_name} ${book.last_name}`,
      description: `Purpose: ${book.purpose}`,
      start: { dateTime: startDateTime.toISOString(), timeZone: 'UTC' },
      end: { dateTime: endDateTime.toISOString(), timeZone: 'UTC' },
      attendees: [{ email: book.email }],
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    },
    conferenceDataVersion: 1,
  });

  return event.data.hangoutLink || '';
}

async function sendEmail(book: BookingBody, meetLink?: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: false,
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
  });

  let html = `
    <p>Hi ${book.first_name},</p>
    <p>Your booking is confirmed for <strong>${book.appointment_date} at ${book.appointment_time}</strong> (${book.time_zone}).</p>
  `;

  if (book.appointment_type === 'virtual' && meetLink) {
    html += `<p>This is an online meeting. Join using this link:</p>
             <p><a href="${meetLink}">${meetLink}</a></p>`;
  } else if (book.appointment_type === 'offline' && book.office_location) {
    html += `<p>This is an in-person meeting at:</p>
             <p><strong>${book.office_location}</strong></p>`;
  }

  html += `<p>Thanks,<br/>${book.business_name}</p>`;

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: book.email,
    subject: 'Your Booking is Confirmed!',
    html,
  });
}

export async function POST(req: Request) {
  try {
    const body: BookingBody = await req.json();

    let meetLink: string | undefined;

    if (body.appointment_type === 'virtual') {
      meetLink = await createGoogleMeetLink(body);
    }

    await sendEmail(body, meetLink);

    return NextResponse.json({ success: true, meetLink });
  } catch (error) {
    console.error('Booking Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}















