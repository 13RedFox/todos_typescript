import { FC } from 'react';
import { FolderType } from '../../../types/folder.type';

type FolderListItemProps = FolderType;
export const FolderListItem: FC<FolderListItemProps> = ({ title, color, id }) => {
  return (
    <li>
      {title} {color}
    </li>
  );
};
