import { FC, useState } from 'react';
import { AddFolderForm, AllTaskButton, FolderList } from '..';
import { Button } from '../../components';
import { useTodos } from '../../utils/store';
import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const folderData = useTodos((state) => state.folders);

  const handleOpenModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <aside className={styles.aside}>
      {folderData.length > 0 ? (
        <>
          <AllTaskButton name='Все задачи' />
          <FolderList />
        </>
      ) : null}

      {!isOpenModal ? (
        <Button
          size='default'
          color='default'
          type='button'
          icon
          onClick={handleOpenModal}>
          Добавить папку
        </Button>
      ) : null}

      {isOpenModal ? <AddFolderForm setIsOpenModal={setIsOpenModal} /> : null}
    </aside>
  );
};
