import { FC } from 'react';
import { Icon } from '../../components';
import { FolderType } from '../../types/folder.type';
import styles from './AllTask.module.scss';

interface AllTaskProps {
  name: string;
  data: FolderType[];
}

export const AllTask: FC<AllTaskProps> = ({ name, data }): JSX.Element => {
  const showAllTask = () => {
    console.log('All tasks...');
  };
  return (
    <button
      className={styles.all}
      onClick={showAllTask}
    >
      <Icon
        name='all'
        className={styles.all__icon}
      />
      {name}
    </button>
  );
};
