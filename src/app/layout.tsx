import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Header } from 'app/components/layout/Header';
import { Footer } from 'app/components/layout/Footer';
import '../sass/globals.sass';

const montserrat = Montserrat({
  style: 'normal',
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sara Rioseco',
  description:
    "Sara Rioseco's web development portfolio created with Next.js and Vercel",
  keywords: ["portfolio", "development", "web", "developer", "typescript", "nextjs", "vercel"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

