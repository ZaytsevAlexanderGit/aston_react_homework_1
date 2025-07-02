import styles from './Button.module.css';
import type { SyntheticEvent } from 'react';
import clsx from 'clsx';

type TButton = 'toggleModal' | 'submit';

interface IButton {
  buttonType: TButton;
  buttonText: string;
  onClick?: (event: SyntheticEvent) => void;
}

export function Button({ buttonType, buttonText, onClick }: IButton) {
  return (
    <button
      className={clsx(styles.button, styles[`${buttonType}`])}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
