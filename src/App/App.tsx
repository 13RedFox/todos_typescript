import { FC } from 'react';
import { Main } from '../module/Main/Main';
import { Sidebar } from '../module/Sidebar/Sidebar';
import styles from './App.module.scss';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
};
