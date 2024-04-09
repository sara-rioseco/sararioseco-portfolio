'use client';
import styles from 'app/sass/error.module.sass';
import { ErrorPageProps } from './lib/definitions';
import { Button } from 'app/components/globals/Button/Button';
import { useRouter } from 'next/navigation';

export default function Error({ reset }: ErrorPageProps) {
  const router = useRouter();

  return (
    <main>
      <section className={styles.Error}>
        <h2 className={styles.Title}>There&apos;s been an error</h2>
        <p className={styles.Subtitle}>
          But don&apos;t worry, everything is fine.
        </p>
        <br />
        <div className={styles.Buttons}>
          <Button
            params={{
              type: 'submit',
              label: 'Try again',
              handleClick: reset,
            }}
          />
          <Button
            params={{
              type: 'button',
              label: 'Go back',
              handleClick: router.back,
            }}
          />
        </div>
      </section>
    </main>
  );
}
