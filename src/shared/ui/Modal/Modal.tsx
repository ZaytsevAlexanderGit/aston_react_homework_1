import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import React from 'react';
import { Button } from '../Button/Button.tsx';

type ModalProps = {
  children: React.ReactNode;
  handleClose: () => void;
};

const modalElement = document.getElementById('modal') as HTMLElement;

export function Modal({ handleClose, children }: ModalProps) {
  return createPortal(
    <div onClick={handleClose} className={styles.overlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <>
          <Button buttonType={'closeModalCross'} onClick={handleClose}>
            ✖
          </Button>
          {children}
        </>
      </div>
    </div>,
    modalElement
  );
}
