import { FC, useState } from 'react';
import { Main } from '../module/Main/Main';
import { Sidebar } from '../module/Sidebar/Sidebar';
import { FolderType } from '../types/folder.type';
import styles from './App.module.scss';

export const App: FC = () => {
  const [currentFolderId, setCurrentFolderId] = useState<string>('');
  const [data, setData] = useState<FolderType[]>([
    { id: 'b1681e3b938', title: 'Products', color: '#64c4ed' },
  ]);

  return (
    <div className={styles.app}>
      <Sidebar
        setCurrentFolderId={setCurrentFolderId}
        data={data}
        setData={setData}
      />
      <Main data={data} />
    </div>
  );
};
