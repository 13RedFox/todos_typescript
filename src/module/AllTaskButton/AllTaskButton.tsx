import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components';
import { FolderType } from '../../types/folder.type';
import styles from './AllTaskButton.module.scss';

interface AllTaskButtonProps {
  name: string;
  data: FolderType[];
}

export const AllTaskButton: FC<AllTaskButtonProps> = ({ name, data }): JSX.Element => {
  const showAllTask = () => {
    console.log('All tasks...');
  };
  return (
    <button
      className={styles.all}
      onClick={showAllTask}
    >
      <Link to='/all'>
        <Icon
          name='all'
          className={styles.all__icon}
        />
        {name}
      </Link>
    </button>
  );
};
