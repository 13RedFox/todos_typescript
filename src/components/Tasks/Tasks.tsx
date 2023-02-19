import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { FolderType } from '../../types/folder.type';
import { TaskCard } from './components/TaskCard';

interface TasksProps {
  data: FolderType[];
}

export const Tasks: FC<TasksProps> = ({ data }): JSX.Element => {
  const { id } = useParams();

  return (
    <>
      {id === 'all'
        ? (data || []).map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
        : (data || [])
            .filter((el) => el.id === id)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))}
    </>
  );
};
