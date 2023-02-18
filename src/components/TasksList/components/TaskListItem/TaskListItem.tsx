import { FC } from 'react';
import { Icon } from '../../..';
import styles from '../../TasksList.module.scss';

interface TaskListItemProps {
  id: string;
  title: string;
}

export const TaskListItem: FC<TaskListItemProps> = ({ title, id }): JSX.Element => {
  return (
    <li className={styles.tasks__item}>
      <div className={styles.tasks__item_wrapper}>
        <input
          type='checkbox'
          id={id}
        />
        <label htmlFor={id}>
          <Icon
            name='checked'
            className={styles.icon}
          />
        </label>
      </div>
      <span className={styles.tasks__item_descr}>{title}</span>
    </li>
  );
};
