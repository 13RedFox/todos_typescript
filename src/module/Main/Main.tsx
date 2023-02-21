import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Tasks } from '../../components';
import { useTodos } from '../../utils/store';
import styles from './Main.module.scss';

export const Main: FC = (): JSX.Element => {
  const folderData = useTodos((state) => state.folders);

  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path='/'
          element={
            folderData.length < 1 ? (
              <h1 className={styles.main__title}>Задачи отсутствуют или не были выбраны...</h1>
            ) : null
          }
        />
        <Route
          path='/:id'
          element={<Tasks />}
        />
      </Routes>
    </main>
  );
};
