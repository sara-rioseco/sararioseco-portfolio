import styles from 'app/sass/loading.module.sass';

export default function Loading() {
  return (
    <main>
      <section className={styles.Loading}>
        <h2 className={styles.Title}>Loading...</h2>
        <p className={styles.Subtitle}></p>
      </section>
    </main>
  );
}
