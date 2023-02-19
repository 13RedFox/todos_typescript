import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Tasks } from '../../components';
import { FolderType } from '../../types/folder.type';
import styles from './Main.module.scss';

interface MainProps {
  data: FolderType[];
}

export const Main: FC<MainProps> = ({ data }): JSX.Element => {
  return (
    <main className={styles.main}>
      <>
        <Routes>
          <Route
            path='/'
            element={!data.length && <h1 className={styles.main__title}>Задачи отсутствуют</h1>}
          />
          <Route
            path='/:id'
            element={<Tasks data={data} />}
          />
        </Routes>
      </>
    </main>
  );
};
