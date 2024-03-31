import Image from 'next/image';
import { Hero } from 'app/components/home/Hero';
import { Presentation } from 'app/components/home/Presentation';
import { Carousel } from 'app/components/home/Carousel';
import { Experience } from 'app/components/home/Experience';

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Carousel />
      <Experience />
    </main>
  );
}

