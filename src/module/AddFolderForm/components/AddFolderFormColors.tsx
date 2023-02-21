import classNames from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../AddFolderForm.module.scss';
import { FolderColor } from '../types/color.type';

interface AddFolderFormColorsProps {
  setActiveColor: Dispatch<SetStateAction<FolderColor>>;
  activeColor: FolderColor;
}

export const AddFolderFormColors: FC<AddFolderFormColorsProps> = ({
  activeColor,
  setActiveColor,
}) => {
  const colors = Array.from(Object.values(FolderColor));

  return (
    <div className={styles.colors}>
      {(colors || []).map((color) => (
        <div
          key={color}
          className={classNames(styles.colors__wrap)}>
          <input
            type='radio'
            id={color}
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />
          <label
            htmlFor={color}
            style={{ backgroundColor: color }}
          />
        </div>
      ))}
    </div>
  );
};
