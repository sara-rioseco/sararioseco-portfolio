'use client';
import styles from 'app/sass/not-found.module.sass';
import { Button } from 'app/components/globals/Button/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className={styles.NotFound}>
        <h2 className={styles.Title}>Error 404</h2>
        <p className={styles.Subtitle}>
          Seems like the page you are trying to see doesn&apos;t exist
        </p>
        <br />
        <Link href='/'>
          <Button
            params={{
              type: 'button',
              label: 'Go to Home Page',
            }}
          />
        </Link>
      </section>
    </main>
  );
}
