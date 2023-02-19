import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../components';
import styles from './AllTaskButton.module.scss';

interface AllTaskButtonProps {
  name: string;
}

export const AllTaskButton: FC<AllTaskButtonProps> = ({ name }): JSX.Element => {
  return (
    <NavLink
      to='/all'
      className={({ isActive }) =>
        isActive ? classNames(styles.all, styles.all__active) : styles.all
      }
    >
      <Icon
        name='all'
        className={styles.all__icon}
      />
      {name}
    </NavLink>
  );
};
