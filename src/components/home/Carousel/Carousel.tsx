import { useEffect, useMemo, useState } from 'react';
import styles from './Carousel.module.sass';

export const Carousel = () => {
  let techList = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'jQuery',
    'Java',
    'Node JS',
    'MySQL',
    'MongoDB',
    'Firebase',
    'so much more',
  ];

  const liHeight = 60;

  return (
    <section className={styles.Carousel}>
      <div className={styles.Carousel__container}>
        <p>I do</p>
        <ul className={styles.Carousel__content}>
          {techList.map(item => (
            <li
              key={`key-${item}`}
              style={{
                top: `${liHeight * techList.indexOf(item) + 120}px`,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
