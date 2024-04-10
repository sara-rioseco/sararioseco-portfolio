import { ContactForm } from 'app/components/layout/ContactForm';
import { ContactEmail } from 'app/components/layout/ContactEmail';

export async function generateMetadata() {
  return {
    title: 'Contact Me',
    description: "Sara Rioseco's Contact Me Page",
    keywords: [
      'portfolio',
      'development',
      'web',
      'developer',
      'typescript',
      'nextjs',
      'vercel',
    ],
    openGraph: {
      description: "Sara Rioseco's Contact Me Page",
      images: [
        'https://srioseco-portfolio.s3.us-east-2.amazonaws.com/img/icon-180x180.webp',
      ],
    },
  };
}

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
