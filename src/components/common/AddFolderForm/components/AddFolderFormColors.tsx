import classNames from 'classnames';
import { ChangeEvent, FC } from 'react';
import { ColorProps } from '../AddFolderForm';
import styles from '../AddFolderForm.module.scss';

interface AddFolderFormColorsProps {
  colors: ColorProps[];
  activeColor: string;
  getColorFolder: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddFolderFormColors: FC<AddFolderFormColorsProps> = ({
  colors,
  getColorFolder,
  activeColor,
}) => {
  return (
    <div className={styles.colors}>
      {[] &&
        colors.map((color) => (
          <div
            key={color.id}
            className={classNames(styles.colors__wrap)}
          >
            <input
              type='radio'
              id={color.id}
              value={color.color}
              checked={activeColor === color.color}
              onChange={getColorFolder}
            />
            <label
              htmlFor={color.id}
              style={{ backgroundColor: color.color }}
            />
          </div>
        ))}
    </div>
  );
};
