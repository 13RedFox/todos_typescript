import { FC } from 'react';
import { FolderType } from '../../types/folder.type';
import styles from './Main.module.scss';

interface MainProps {
  data: FolderType[];
}

export const Main: FC<MainProps> = ({ data }): JSX.Element => {
  return (
    // <RouterProvider router={router}>
    <main className={styles.main}>
      {!data.length ? (
        <h1 className={styles.main__title}>Задачи отсутствуют</h1>
      ) : (
        <>
          <span>
            {data.map((el) => (
              <div key={el.id}>{el.title}</div>
            ))}
          </span>
        </>
      )}
    </main>
    // </RouterProvider>
  );
};
