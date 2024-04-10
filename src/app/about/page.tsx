import { ContactForm } from 'app/components/layout/ContactForm';

export async function generateMetadata() {
  return {
    title: 'About Me',
    description: "Sara Rioseco's About Me Page",
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
      description: "Sara Rioseco's About Me Page",
      images: [
        'https://srioseco-portfolio.s3.us-east-2.amazonaws.com/img/icon-180x180.webp',
      ],
    },
  };
}

export default function About() {
  return (
    <main>
      <h1>About Me</h1>
      <ContactForm />
    </main>
  );
}
