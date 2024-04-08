import styles from './Hero.module.sass';

export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <p className={styles.Subtitle}>
        Crafting code with passion and continuously evolving in the world of
        programming.
      </p>
      <h1 className={styles.Title}>
        Hey there! I&apos;m a full stack web developer based in Santiago, Chile.
      </h1>
    </section>
  );
};
