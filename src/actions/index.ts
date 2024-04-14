'use server';
import Mailgun from 'mailgun.js';

export async function handleContactSubmit(formData: FormData) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_SENDING_API_KEY!,
  });

  const data = {
    from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
    to: ['sara.rioseco@gmail.com'],
    subject: 'Contact from your Portfolio',
    text: `${formData.get('name')} has sent you a message.
    Email address: ${formData.get('email')}.
    Message: ${formData.get('message')}`,
    html: `<h2>Name: ${formData.get('name')}</h2>
    <h2>Email: ${formData.get('email')}</h2>
    <p>${formData.get('message')}</p>`,
  };

  try {
    const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN!, data);
    return msg;
  } catch (e) {
    console.error(e);
  }
}
