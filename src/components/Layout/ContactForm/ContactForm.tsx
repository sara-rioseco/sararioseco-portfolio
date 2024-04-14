'use client';
import styles from './ContactForm.module.sass';
import { Button } from 'app/components/globals/Button/Button';
import { Modal } from 'app/components/globals/Modal';
import { handleContactSubmit } from 'app/actions';
import { ModalProps } from 'app/app/lib/definitions';

export const ContactForm = () => {
  console.log('variable de entorno', process.env.MAILGUN_DOMAIN);

  let modal = document.getElementById('modal-dialog') as HTMLDialogElement;
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const res = await handleContactSubmit(formData);
      if (res?.status !== 200) {
        console.log('Message failed');
      } else {
        console.log('Message sent successfully');
      }
      modal?.showModal();
    } catch (e) {
      console.error('error', e);
    }
  };

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
      <form
        action=''
        onSubmit={handleSubmit}
      >
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
        <Button
          params={{
            type: 'submit',
            label: 'Submit',
          }}
        />
      </form>
      <Modal
        params={{
          title: 'Message sent successfully',
          message: "I'll be getting in contact with you soon.",
          handleModalClick: () => modal.close(),
        }}
      />
    </section>
  );
};
