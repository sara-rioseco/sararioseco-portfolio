'use client';

import { useEffect } from 'react';
import styles from './Carousel.module.sass';

export const Carousel = () => {
  useEffect(() => {
    const box = document.querySelector(`.${styles.Carousel}`);
    const items = box?.querySelectorAll('li') || [];
    const amount = items?.length;
    let counter = 0;

    let prevprev: HTMLLIElement,
      prev: HTMLLIElement,
      current: HTMLLIElement,
      next: HTMLLIElement,
      nextnext: HTMLLIElement;

    box?.classList.add('Carousel__active');
    let interval = setInterval(navigate, 3000);

    function navigate() {
      if (prevprev) {
        prevprev.classList.remove('prevprev_text');
      }
      if (prev) {
        prev.classList.remove('prev_text');
      }
      if (current) {
        current.classList.remove('current_text');
      }
      if (next) {
        next.classList.remove('next_text');
      }
      if (nextnext) {
        nextnext.classList.remove('nextnext_text');
      }
      if (counter === 0) {
        prev = items[amount - 1];
      } else {
        prev = items[counter - 1];
      }
      if (counter === 0) {
        prevprev = items[amount - 2];
      } else if (counter === 1) {
        prevprev = items[amount - 1];
      } else {
        prevprev = items[counter - 2];
      }
      if (counter === amount - 2) {
        nextnext = items[0];
      } else if (counter === amount - 1) {
        nextnext = items[1];
      } else {
        nextnext = items[counter + 2];
      }
      current = items[counter];
      if (counter === amount - 1) {
        next = items[0];
      } else next = items[counter + 1];
      counter += 1;
      if (counter === amount) {
        counter = 0;
      }
      if (prevprev) {
        prevprev.classList.add('prevprev_text');
      }
      prev.classList.add('prev_text');
      current.classList.add('current_text');
      next.classList.add('next_text');
      if (nextnext) {
        nextnext.classList.add('nextnext_text');
      }
    }
  }, []);

  return (
    <section className={styles.Carousel}>
      <div className={styles.Carousel__container}>
        <p>I do</p>
        <ul className={styles.Carousel__content}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>jQuery</li>
          {/* <li>Java</li>
          <li>Node JS</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>& More...</li> */}
        </ul>
      </div>
    </section>
  );
};
