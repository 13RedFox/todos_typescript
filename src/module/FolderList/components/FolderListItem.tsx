import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Icon } from '../../../components';
import { FolderType } from '../../../types/folder.type';
import { useTodos } from '../../../utils/store';

import styles from '../FolderList.module.scss';

interface FolderListItemProps {
  folder: FolderType;
}

export const FolderListItem: FC<FolderListItemProps> = ({ folder }) => {
  const { title, color, id: folderId } = folder;

  const { id } = useParams();

  console.log(id);

  const [routeOnFolderDelete, setRouteOnFolderDelete] = useState<string>(`/${folderId}`);

  const cutTitle = title.length > 10 ? title.slice(0, 10) + '...' : title;

  const { deleteFolder /* folders */ } = useTodos((state) => state);

  const deleteBtnFolderHandler = (id: string): void => {
    deleteFolder(id);
  };

  useEffect(() => {
    setRouteOnFolderDelete(id === folderId ? '/' : `/${folderId}`);
  }, [id]);

  return (
    <li className={classNames(styles.item)}>
      <NavLink
        to={`/${folderId}`}
        className={({ isActive }) =>
          isActive ? classNames(styles.item__link, styles.item__active) : styles.item__link
        }>
        <div
          className={styles.item__color}
          style={{ backgroundColor: color }}
        />
        <span className={styles.title}>
          {cutTitle}
          <Icon
            name='plus'
            className={styles.icon}
            onClick={() => deleteBtnFolderHandler(folderId)}
          />
        </span>
      </NavLink>
    </li>
  );
};
