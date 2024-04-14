import { Button } from '../Button';
import styles from './Modal.module.sass';
import { ModalProps } from 'app/app/lib/definitions';

export const Modal = (props: ModalProps) => {
  const { title, message, handleModalClick } = props.params;

  return (
    <dialog
      className={styles.Modal}
      id='modal-dialog'
    >
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Text}>{message}</p>
      <Button
        params={{
          type: 'button',
          label: 'Ok',
          handleClick: handleModalClick,
        }}
      />
    </dialog>
  );
};
