import classNames from 'classnames';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '../..';
import { TaskType } from '../../../types/folder.type';
import { useTodos } from '../../../utils/store';
import styles from '../Tasks.module.scss';

interface TaskListItemProps {
  tasks: TaskType[];
}

export const TaskListItem: FC<TaskListItemProps> = ({ tasks }): JSX.Element => {
  const { id } = useParams();

  const toggleTask = useTodos((store) => store.toggleTaskComplete);
  const removeTask = useTodos((store) => store.removeTask);

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
              checked={task.isComplete}
              onChange={() => toggleTask(id, task.id)}
            />
            <label htmlFor={task.id}>
              <Icon
                name='checked'
                className={styles.icon}
              />
            </label>
          </div>
          <span className={styles.tasks__item_descr}>
            {task.title}
            <Icon
              name='plus'
              className={classNames(id !== 'all' ? styles.removeIcon : styles.hidden)}
              onClick={() => removeTask(id, task.id)}
            />
          </span>
        </li>
      ))}
    </>
  );
};
