import { ContactEmail } from 'app/components/layout/ContactEmail';

export async function generateMetadata() {
  return {
    title: 'Resume',
    description: "Sara Rioseco's Resume",
    keywords: [
      'portfolio',
      'resume',
      'development',
      'web',
      'developer',
      'typescript',
      'nextjs',
      'vercel',
    ],
    openGraph: {
      description: "Sara Rioseco's Resume",
      images: [
        'https://srioseco-portfolio.s3.us-east-2.amazonaws.com/img/icon-180x180.webp',
      ],
    },
  };
}

export default function Resume() {
  return (
    <main>
      <h1>Resume</h1>

      <ContactEmail />
    </main>
  );
}
