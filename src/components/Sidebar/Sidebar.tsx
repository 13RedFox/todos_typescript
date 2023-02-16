import { FC, useState } from 'react';
import { AddFolderForm, Button } from '../common';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prevState) => !prevState);
    console.log('Add folder');
  };

  return (
    <aside className={styles.aside}>
      {!isOpenModal && (
        <Button
          size='default'
          color='default'
          type='button'
          icon
          onClick={handleOpenModal}
        >
          Добавить папку
        </Button>
      )}
      {isOpenModal && <AddFolderForm setIsOpenModal={setIsOpenModal} />}
    </aside>
  );
};
