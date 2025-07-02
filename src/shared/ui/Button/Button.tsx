import styles from './Button.module.css';
import React, { type SyntheticEvent } from 'react';
import clsx from 'clsx';

type ButtonType = 'primary' | 'secondary' | 'submit' | 'closeModalCross';

type ButtonProps = {
  buttonType: ButtonType;
  onClick: (event: SyntheticEvent) => void;
  children: React.ReactNode;
};

export function Button({ buttonType, onClick, children }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[`${buttonType}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
