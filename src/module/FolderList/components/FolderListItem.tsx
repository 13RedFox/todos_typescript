import { FC } from 'react';
import { Icon } from '../../../components';
import { FolderType } from '../../../types/folder.type';

import styles from '../FolderList.module.scss';

type FolderListItemProps = FolderType;

export const FolderListItem: FC<FolderListItemProps> = ({ title, color, id }) => {
  const cutTitle = title.length > 10 ? title.slice(0, 10) + '...' : title;

  return (
    <li className={styles.item}>
      <div
        className={styles.item__color}
        style={{ backgroundColor: color }}
      />
      <span className={styles.item__title}>
        {cutTitle}
        <Icon
          name='plus'
          className={styles.item__icon}
        />
      </span>
    </li>
  );
};
