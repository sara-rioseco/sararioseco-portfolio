import styles from './Footer.module.sass';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <ul className={styles.List}>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/sara-rioseco/?locale=en_US'
          rel='noopener noreferrer'
        >
          <li className={styles.ListItem}>LINKEDIN</li>
        </a>
        <a
          target='_blank'
          href='https://github.com/sara-rioseco/'
          rel='noopener noreferrer'
        >
          <li className={styles.ListItem}>GITHUB</li>
        </a>
        <li className={styles.ListItem}>DOWNLOAD CV</li>
      </ul>
    </footer>
  );
};
