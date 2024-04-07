import styles from './ContactForm.module.sass';

export const ContactForm = () => {
  return (
    <section className={styles.Contact}>
      <h2>
        Want to get in touch?
        <br />
        Drop me a line!
      </h2>
      <p>
        Whether you want to reach me for a job offer or a specifically
        commissioned work, don&apos;t hesitate, I&apos;m right here for you.
      </p>
      <form action=''>
        <fieldset>
          <label htmlFor='form-name'>Name</label>
          <input
            type='text'
            name='name'
            id='form-name'
            placeholder='Enter your name'
            autoComplete='on'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='form-email'>Email Address</label>
          <input
            type='email'
            name='email'
            id='form-email'
            placeholder='Enter your email'
            autoComplete='on'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='form-message'>Message</label>
          <textarea
            name='message'
            id='form-message'
            placeholder='Enter your message'
            cols={30}
            rows={10}
          ></textarea>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};
