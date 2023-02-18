import { Dispatch, FC, SetStateAction, useState } from 'react';
import { AddFolderForm, AllTaskButton, FolderList } from '..';
import { Button } from '../../components';
import { FolderType } from '../../types/folder.type';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  data: FolderType[];
  setData: Dispatch<SetStateAction<FolderType[]>>;
  setCurrentFolderId: Dispatch<SetStateAction<string>>;
}

export const Sidebar: FC<SidebarProps> = ({ setCurrentFolderId, data, setData }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <aside className={styles.aside}>
      {data.length > 0 && (
        <>
          <AllTaskButton
            name='Все задачи'
            data={data}
          />
          <FolderList data={data} />
        </>
      )}
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
