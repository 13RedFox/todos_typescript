import { FC } from 'react';
import styles from './Main.module.scss';

export const Main: FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Задачи отсутствуют</h1>
    </main>
  );
};
