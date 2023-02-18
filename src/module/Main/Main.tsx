import { FC } from 'react';
import { TasksList } from '../../components';
import { FolderType } from '../../types/folder.type';
import styles from './Main.module.scss';

interface MainProps {
  data: FolderType[];
}

export const Main: FC<MainProps> = ({ data }): JSX.Element => {
  return (
    <main className={styles.main}>
      {!data.length && <h1 className={styles.main__title}>Задачи отсутствуют</h1>}
      <TasksList data={data} />
    </main>
  );
};
