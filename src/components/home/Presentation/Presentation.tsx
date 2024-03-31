import styles from './Presentation.module.sass';
import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from '.';

export const Presentation = () => {
  return (
    <section className={styles.Presentation}>
      <div>
        <h2>Here&apos;s my pitch and picture :D</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, fugit.
          Illo, et sed eum ducimus quod dolores, doloribus quisquam dignissimos
          deserunt nostrum, repellendus cupiditate ad minus quia veniam rerum
          sapiente.
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
