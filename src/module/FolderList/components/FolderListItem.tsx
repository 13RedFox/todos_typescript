import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../components';
import { FolderType } from '../../../types/folder.type';
import { useTodos } from '../../../utils/store';
import styles from '../FolderList.module.scss';

interface FolderListItemProps {
  folder: FolderType;
}

export const FolderListItem: FC<FolderListItemProps> = ({ folder }) => {
  const { title, color, id } = folder;
  const cutTitle = title.length > 10 ? title.slice(0, 10) + '...' : title;

  const { deleteFolder } = useTodos((state) => state);

  const deleteBtnFolderHandler = (id: string): void => {
    deleteFolder(id);
  };

  return (
    <li className={classNames(styles.item)}>
      <NavLink
        to={`${id}`}
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
            onClick={() => deleteBtnFolderHandler(id)}
          />
        </span>
      </NavLink>
    </li>
  );
};
