import Image from 'next/image';
import { Hero } from 'app/components/home/Hero';
import { Presentation } from 'app/components/home/Presentation';

export default function Home() {
  return (
    <main>
      <h1>Hola mundo!</h1>
      <Hero />
      <Presentation />
    </main>
  );
}

