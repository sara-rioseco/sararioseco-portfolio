import styles from './Carousel.module.sass';

export const Carousel = () => {
  return (
    <section className={styles.Carousel}>
      <p className={styles.Subtitle}>
        Crafting code with passion and continuously evolving in the world of
        programming.
      </p>
      <h2 className={styles.Title}>
        Hey there! I&apos;m a full stack web developer based in Santiago, Chile.
      </h2>
    </section>
  );
};
