import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddTaskForm } from '../../../module';
import { FolderType } from '../../../types/folder.type';
import { Button } from '../../Button/Button';
import styles from '../Tasks.module.scss';
import { TaskListItem } from './TaskListItem';

interface TaskCardProps {
  task: FolderType;
}
export const TaskCard: FC<TaskCardProps> = ({ task }): JSX.Element => {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const { id } = useParams();

  const toggleTaskForm = () => {
    setShowTaskForm((prevState) => !prevState);
  };

  return (
    <div
      key={task.id}
      className={styles.tasks}>
      <h2
        className={styles.tasks__title}
        style={{ color: task.color }}>
        {task.title}
      </h2>
      <ul className={styles.tasks__list}>
        <TaskListItem tasks={task.tasks} />
      </ul>
      {!showTaskForm && id !== 'all' ? (
        <Button
          type='button'
          icon
          size='task'
          color='cancel'
          className={styles.tasks__btn}
          onClick={toggleTaskForm}>
          Новая задача
        </Button>
      ) : null}
      {showTaskForm ? <AddTaskForm setShowTaskForm={setShowTaskForm} /> : null}
    </div>
  );
};
