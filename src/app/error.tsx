'use client';
import styles from 'app/sass/error.module.sass';
import { ErrorPageProps } from './lib/definitions';
import { Button } from 'app/components/globals/Button/Button';

export default function Error({ reset }: ErrorPageProps) {
  return (
    <main>
      <section className={styles.Error}>
        <h2 className={styles.Title}>There&apos;s been an error</h2>
        <p className={styles.Subtitle}>
          But don&apos;t worry, everything is fine.
        </p>
        <br />
        <Button
          params={{
            type: 'submit',
            label: 'Try again',
            handleClick: reset,
          }}
        />
      </section>
    </main>
  );
}
