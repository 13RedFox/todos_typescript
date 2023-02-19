import { FC } from 'react';
import { FolderType } from '../../../types/folder.type';
import styles from '../Tasks.module.scss';
import { TaskListItem } from './TaskListItem';

interface TaskCardProps {
  task: FolderType;
}
export const TaskCard: FC<TaskCardProps> = ({ task }): JSX.Element => {
  return (
    <div
      key={task.id}
      className={styles.tasks}
    >
      <h2
        className={styles.tasks__title}
        style={{ color: task.color }}
      >
        {task.title}
      </h2>
      <ul className={styles.tasks__list}>
        <TaskListItem tasks={task.tasks} />
      </ul>
    </div>
  );
};
