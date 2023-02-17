import { FC } from 'react';
import { FolderType } from '../../types/folder.type';
import { FolderListItem } from './components/FolderListItem';
import styles from './FolderList.module.scss';

interface FolderListProps {
  data: FolderType[];
}
export const FolderList: FC<FolderListProps> = ({ data }) => {
  return (
    <ul className={styles.list}>
      {[] &&
        data.map((el) => (
          <FolderListItem
            key={el.id}
            title={el.title}
            color={el.color}
            id={el.id}
          />
        ))}
    </ul>
  );
};
