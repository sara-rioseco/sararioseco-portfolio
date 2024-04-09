import styles from './ContactEmail.module.sass';

export const ContactEmail = () => {
  return (
    <section className={styles.Contact}>
      <h3>Want to have me on your team?</h3>
      <p>If you like what you see and want to work together, get in touch!</p>
      <h2>
        <a
          href='mailto:sara.rioseco@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          sara.rioseco@gmail.com
        </a>
      </h2>
    </section>
  );
};
