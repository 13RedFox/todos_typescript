import { FC } from 'react';
import { Icon } from '../..';
import { TaskType } from '../../../types/folder.type';
import styles from '../Tasks.module.scss';

interface TaskListItemProps {
  tasks: TaskType[];
}

export const TaskListItem: FC<TaskListItemProps> = ({ tasks }): JSX.Element => {
  return (
    <>
      {(tasks || []).map((task) => (
        <li
          key={task.id}
          className={styles.tasks__item}>
          <div className={styles.tasks__item_wrapper}>
            <input
              id={task.id}
              type='checkbox'
            />
            <label htmlFor={task.id}>
              <Icon
                name='checked'
                className={styles.icon}
              />
            </label>
          </div>
          <span className={styles.tasks__item_descr}>{task.title}</span>
        </li>
      ))}
    </>
  );
};
