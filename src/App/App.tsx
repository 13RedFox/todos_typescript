import { FC, useState } from 'react';
import { Main } from '../module/Main/Main';
import { Sidebar } from '../module/Sidebar/Sidebar';
import { FolderType } from '../types/folder.type';
import styles from './App.module.scss';

export const App: FC = () => {
  const [currentFolderId, setCurrentFolderId] = useState<string>('');
  const [data, setData] = useState<FolderType[]>([
    {
      id: 'b1681e3b938',
      title: 'Products',
      color: '#64c4ed',
      tasks: [
        { id: '1', title: 'Изучить JavaScript', isComplete: false },
        { id: '2', title: 'Изучить React', isComplete: false },
        {
          id: '3',
          title: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)',
          isComplete: false,
        },
        { id: '4', title: 'Redux (redux-observable, redux-saga)', isComplete: false },
      ],
    },
    {
      id: '46bea30459d',
      title: 'Colors',
      color: '#64c4ed',
      tasks: [
        { id: '1', title: 'Red', isComplete: false },
        { id: '2', title: 'Blue', isComplete: false },
        { id: '3', title: 'Green', isComplete: false },
      ],
    },
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
