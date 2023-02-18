import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../components';
import { FolderType } from '../../../types/folder.type';

import styles from '../FolderList.module.scss';

type FolderListItemProps = FolderType;

export const FolderListItem: FC<FolderListItemProps> = ({ title, color, id }) => {
  const cutTitle = title.length > 10 ? title.slice(0, 10) + '...' : title;

  return (
    <li className={styles.item}>
      <Link to={id}>
        <div
          className={styles.color}
          style={{ backgroundColor: color }}
        />
        <span className={styles.title}>
          {cutTitle}
          <Icon
            name='plus'
            className={styles.icon}
          />
        </span>
      </Link>
    </li>
  );
};
