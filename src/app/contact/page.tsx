import { ContactForm } from 'app/components/layout/ContactForm';
import { ContactEmail } from 'app/components/layout/ContactEmail';

export default function Contact() {
  return (
    <main style={{ backgroundColor: 'white', padding: '6rem' }}>
      <h1
        style={{
          fontSize: 48,
          fontWeight: 400,
          color: '#969aac',
          letterSpacing: 1,
        }}
      >
        Contact Me
      </h1>
      <h2
        style={{ fontSize: 18, fontWeight: 400, color: 'grey', opacity: 0.6 }}
      >
        Web Developing
      </h2>
      <br />
      <ContactForm />
      <ContactEmail />
    </main>
  );
}
