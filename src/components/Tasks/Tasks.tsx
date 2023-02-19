import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { FolderType } from '../../types/folder.type';
import { TaskListItem } from './components/TaskListItem/TaskListItem';
import styles from './Tasks.module.scss';

interface TasksProps {
  data: FolderType[];
}

export const Tasks: FC<TasksProps> = ({ data }): JSX.Element => {
  const { id } = useParams();

  return (
    <>
      {[] &&
        data
          .filter((el) => el.id === id)
          .map((el) => (
            <div
              key={el.id}
              className={styles.tasks}
            >
              <h2 className={styles.tasks__title}></h2>
              <ul className={styles.tasks__list}>
                <TaskListItem tasks={el.tasks} />
              </ul>
            </div>
          ))}
    </>
  );
};
