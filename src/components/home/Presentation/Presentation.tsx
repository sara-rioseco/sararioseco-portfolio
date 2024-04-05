import styles from './Presentation.module.sass';
import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from '.';

export const Presentation = () => {
  return (
    <section className={styles.Presentation}>
      <div>
        <h2>Hello, My name is Sara.</h2>
        <p>
          I used to be a translator, but those days are over and gone. Now
          I&apos;m doing something I&apos;m more passionate about, and yes, you
          guessed it right: it&apos;s <strong>Web Developing</strong>!
        </p>
        <p>
          It was in late 2022 when I started this path and, since then,
          I&apos;ve been studying and doing some very fun projects. Please check
          the <strong>Projects</strong> section to see more about that.
        </p>
        <p>
          You can find more information about me and my experience on the{' '}
          <strong>Resume</strong> / <strong>About Me</strong> sections.
        </p>
      </div>
      <div className={styles.Presentation__imageContainer}>
        <Image
          className={styles.Image}
          src='/images/profilepic.webp'
          alt='profile picture'
          placeholder='blur'
          blurDataURL={PLACEHOLDER_IMAGE}
          quality={100}
          sizes='(max-width:768px) 50%, 50%'
          fill
        />
      </div>
    </section>
  );
};
