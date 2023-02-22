import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Tasks } from '../../components';
import styles from './Main.module.scss';

export const Main: FC = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path='/'
          element={
            <h1 className={styles.main__title}>Задачи отсутствуют или не были выбраны...</h1>
          }
        />
        <Route
          path=':id'
          element={<Tasks />}
        />
      </Routes>
    </main>
  );
};
