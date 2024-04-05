import Image from 'next/image';
import { Hero } from 'app/components/home/Hero';
import { Presentation } from 'app/components/home/Presentation';
import { Carousel } from 'app/components/home/Carousel';
import { Experience } from 'app/components/home/Experience';
import { ContactForm } from 'app/components/layout/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Carousel />
      <Experience />
      <ContactForm />
    </main>
  );
}

