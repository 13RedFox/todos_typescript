import { FC } from 'react';
import { FolderType } from '../../types/folder.type';
import { FolderListItem } from './components/FolderListItem';

interface FolderListProps {
  data: FolderType[];
}
export const FolderList: FC<FolderListProps> = ({ data }) => {
  return (
    <ul>
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
