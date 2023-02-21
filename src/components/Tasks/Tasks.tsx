import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from '../../utils/store';
import { TaskCard } from './components/TaskCard';

export const Tasks: FC = (): JSX.Element => {
  const { id } = useParams();
  const folderData = useTodos((state) => state.folders);

  return (
    <>
      {id === 'all'
        ? (folderData || []).map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))
        : (folderData || [])
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
