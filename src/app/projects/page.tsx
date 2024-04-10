import { ContactEmail } from 'app/components/layout/ContactEmail';

export async function generateMetadata() {
  return {
    title: 'Projects',
    description: "Sara Rioseco's Web Development Projects",
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
      description: "Sara Rioseco's Web Development Projects",
      images: [
        'https://srioseco-portfolio.s3.us-east-2.amazonaws.com/img/icon-180x180.webp',
      ],
    },
  };
}

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ContactEmail />
    </main>
  );
}
