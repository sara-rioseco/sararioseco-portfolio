import { ContactForm } from 'app/components/layout/ContactForm';
import { ContactEmail } from 'app/components/layout/ContactEmail';

export default function Contact() {
  return (
    <main>
      <h1>Contact Me</h1>

      <ContactForm />
      <ContactEmail />
    </main>
  );
}
