import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../components';
import { FolderType } from '../../../types/folder.type';

import styles from '../FolderList.module.scss';

interface FolderListItemProps {
  el: FolderType;
}

export const FolderListItem: FC<FolderListItemProps> = ({ el }) => {
  const { title, color, id } = el;
  const cutTitle = title.length > 10 ? title.slice(0, 10) + '...' : title;

  console.log(id);

  return (
    <li className={classNames(styles.item)}>
      <NavLink
        to={`/${el.id}`}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <div
          className={styles.item__color}
          style={{ backgroundColor: color }}
        />
        <span className={styles.title}>
          {cutTitle}
          <Icon
            name='plus'
            className={styles.icon}
          />
        </span>
      </NavLink>
    </li>
  );
};
