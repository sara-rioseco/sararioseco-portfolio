import styles from './Button.module.sass';
import { ButtonProps } from 'app/app/lib/definitions';

export const Button = (props: ButtonProps) => {
  const { type, label, handleClick } = props.params;

  return (
    <button
      type={type}
      className={styles.Button}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
