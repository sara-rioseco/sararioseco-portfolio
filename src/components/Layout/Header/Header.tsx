import Link from 'next/link';
import styles from './Header.module.sass';

export const Header = () => {
  console.log("I'm a header");

  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <Link
          href='/'
          className={styles.Title}
        >
          <h1>SaraRioseco</h1>
        </Link>
        <ul className={styles.List}>
          <Link href='/'>
            <li className={styles.ListItem}>HOME</li>
          </Link>
          <Link href='/resume'>
            <li className={styles.ListItem}>RESUME</li>
          </Link>
          <Link href='/about'>
            <li className={styles.ListItem}>ABOUT ME</li>
          </Link>
          <Link href='/projects'>
            <li className={styles.ListItem}>PROJECTS</li>
          </Link>
          <Link href='/contact'>
            <li className={styles.ListItem}>CONTACT ME</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
