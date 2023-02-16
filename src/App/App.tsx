import { FC, useState } from 'react';
import { Main } from '../module/Main/Main';
import { Sidebar } from '../module/Sidebar/Sidebar';
import styles from './App.module.scss';

export const App: FC = () => {
  const [currentFolderId, setCurrentFolderId] = useState<string>('');

  return (
    <div className={styles.app}>
      <Sidebar setCurrentFolderId={setCurrentFolderId} />
      <Main />
    </div>
  );
};
