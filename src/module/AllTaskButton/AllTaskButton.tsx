import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components';
import styles from './AllTaskButton.module.scss';

interface AllTaskButtonProps {
  name: string;
}

export const AllTaskButton: FC<AllTaskButtonProps> = ({ name }): JSX.Element => {
  return (
    <button className={styles.all}>
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
