import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

interface IModal {
  children: React.ReactNode;
}

const modalElement = document.getElementById('modal') as HTMLElement;

export function Modal({ children }: IModal) {
  return createPortal(
    <div className={styles.modal}>{children}</div>,
    modalElement
  );
}
