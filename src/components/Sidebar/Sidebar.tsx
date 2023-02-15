import { FC } from 'react';
import { Button } from '../common';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const handleAddFolderClick = () => {
    console.log('Add folder');
  };

  return (
    <aside className={styles.aside}>
      <Button
        size='default'
        color='default'
        type='button'
        icon
        onClick={handleAddFolderClick}
      >
        Добавить папку
      </Button>
    </aside>
  );
};
