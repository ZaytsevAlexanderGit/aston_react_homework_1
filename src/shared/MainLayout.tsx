import type { ReactNode } from 'react';

import styles from './MainLayout.module.css';
import { Header, Footer } from '../widgets';

interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
