import type { ReactNode } from 'react';

import styles from './MainLayout.module.css';
import { Header, Footer } from '../widgets';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>{children}</main>
      <Footer />
    </>
  );
};
