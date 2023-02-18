import { FC } from 'react';
import { FolderType } from '../../types/folder.type';
import { TaskListItem } from './components/TaskListItem/TaskListItem';
import styles from './TasksList.module.scss';

interface TasksListProps {
  data: FolderType[];
}

export const TasksList: FC<TasksListProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.tasks}>
      <h2 className={styles.tasks__title}>Фронтенд</h2>
      <ul className={styles.tasks__list}>
        <TaskListItem
          id='01'
          title='Изучить JavaScript'
        />
        <TaskListItem
          id='02'
          title='Изучить React'
        />
        <TaskListItem
          id='03'
          title='ReactJS Hooks (useState, useReducer, useEffect и т.д.)'
        />
        <TaskListItem
          id='04'
          title='Redux (redux-observable, redux-saga)'
        />
      </ul>
    </div>
  );
};
