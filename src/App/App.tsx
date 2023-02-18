import { FC, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <Sidebar
          setCurrentFolderId={setCurrentFolderId}
          data={data}
          setData={setData}
        />
        <Main data={data} />
      </BrowserRouter>
    </div>
  );
};
