import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
} from 'react';
import { Button } from '../Button/Button.tsx';

type Modal = {
  title: ReactNode | string;
  body: ReactNode | string;
  footer: ReactNode | string;
};

type ModalContext = {
  modal: Modal;
  handleClose: () => void;
};

const ModalContext = createContext<ModalContext | undefined>(undefined);

function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within ModalContextProvider');
  }
  return context;
}

type ModalProps = PropsWithChildren & {
  modal: Modal;
  handleClose: () => void;
};

const modalElement = document.getElementById('modal') as HTMLElement;

export function Modal({ handleClose, children, modal }: ModalProps) {
  return createPortal(
    <ModalContext.Provider value={{ modal, handleClose }}>
      <div onClick={handleClose} className={styles.overlay}>
        <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    modalElement
  );
}

Modal.Title = function ModalTitle() {
  const { modal } = useModalContext();

  return <h3 className={styles.modalHeader}>{modal.title}</h3>;
};

Modal.Body = function ModalBody() {
  const { modal } = useModalContext();

  if (typeof modal.body === 'string')
    return <p className={styles.modalText}>{modal.body}</p>;
  else {
    return <div className={styles.modalBody}>{modal.body}</div>;
  }
};

Modal.Footer = function ModalFooter() {
  const { modal } = useModalContext();

  return <p className={styles.modalFooter}>{modal.footer}</p>;
};

Modal.CloseButton = function ModalCloseButton() {
  const { handleClose } = useModalContext();

  return (
    <Button buttonType={'closeModalCross'} onClick={handleClose}>
      ✖
    </Button>
  );
};
