import { FC } from 'react';
import { useTodos } from '../../utils/store';
import { FolderListItem } from './components/FolderListItem';
import styles from './FolderList.module.scss';

export const FolderList: FC = () => {
  const todosData = useTodos((state) => state.folders);

  return (
    <ul className={styles.list}>
      {(todosData || []).map((folder) => (
        <FolderListItem
          key={folder.id}
          folder={folder}
        />
      ))}
    </ul>
  );
};
