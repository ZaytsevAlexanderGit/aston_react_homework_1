import styles from './Header.module.css';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemSwitcher.tsx';
import { Modal } from '../../shared/ui/Modal/Modal.tsx';
import { useState } from 'react';
import { Button } from '../../shared/ui/Button/Button.tsx';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal((prev) => !prev);

  return (
    <div className={styles.headerWrapper}>
      <ThemeSwitcher />
      <h1 className={styles.header}>React интенсив: Домашнее Задание.</h1>
      <Button
        buttonType={'toggleModal'}
        buttonText={`${!showModal ? 'Показать' : 'Скрыть'} информацию о проекте.`}
        onClick={handleOpenModal}
      />
      {showModal && (
        <Modal>
          <h3>О Проекте</h3>
          <p>
            Приложение, с отрисовкой список постов. Посты пока с заглушками.
          </p>
        </Modal>
      )}
    </div>
  );
};
