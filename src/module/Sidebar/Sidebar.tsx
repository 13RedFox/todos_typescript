import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Button } from '../../components';
import { FolderType } from '../../types/folder.type';
import { AddFolderForm } from '../AddFolderForm/AddFolderForm';
import { FolderList } from '../FolderList/FolderList';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  setCurrentFolderId: Dispatch<SetStateAction<string>>;
}

export const Sidebar: FC<SidebarProps> = ({ setCurrentFolderId }) => {
  const [data, setData] = useState<FolderType[]>([]);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prevState) => !prevState);
    console.log('Add folder');
  };

  return (
    <aside className={styles.aside}>
      <FolderList data={data} />
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

      {isOpenModal && (
        <AddFolderForm
          setIsOpenModal={setIsOpenModal}
          setData={setData}
        />
      )}
    </aside>
  );
};
