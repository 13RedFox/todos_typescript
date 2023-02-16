import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { uid } from 'uid';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import styles from './AddFolderForm.module.scss';
import { AddFolderFormColors } from './components/AddFolderFormColors';

interface AddFolderFormProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

interface SubmitProps {
  id: string;
  value: string;
  color: string;
}

export interface ColorProps {
  id: string;
  color: string;
  isChecked: boolean;
}

const colors: ColorProps[] = [
  { id: 'c0', color: '#c9d1d3', isChecked: true },
  { id: 'c1', color: '#42b883', isChecked: false },
  { id: 'c2', color: '#64c4ed', isChecked: false },
  { id: 'c3', color: '#ffbbcc', isChecked: false },
  { id: 'c4', color: '#b6e6bd', isChecked: false },
  { id: 'c5', color: '#c355f5', isChecked: false },
  { id: 'c6', color: '#09011a', isChecked: false },
  { id: 'c7', color: '#ff6464', isChecked: false },
];

export const AddFolderForm: FC<AddFolderFormProps> = ({ setIsOpenModal }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [activeColor, setActiveColor] = useState<string>('#c9d1d3');
  const [data, setData] = useState<Array<SubmitProps>>([]);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getColorFolder = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveColor(e.target.value);
  };

  const handleAddFolderSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setData((prevState) => {
      return [...prevState, { id: uid(), value: inputValue, color: activeColor }];
    });
    setIsOpenModal(false);
    setInputValue('');
    setActiveColor('#c9d1d3');
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleAddFolderSubmit}
    >
      <input
        type='text'
        placeholder='Название папки'
        className={styles.form__name}
        onChange={handleInputValue}
        value={inputValue}
      />
      <AddFolderFormColors
        colors={colors}
        activeColor={activeColor}
        getColorFolder={getColorFolder}
      />
      <Button
        size='default'
        type='submit'
        color='add'
        icon={false}
        className={styles.form__btn}
      >
        Добавить
      </Button>
      <div
        className={styles.form__close}
        onClick={() => setIsOpenModal(false)}
      >
        <Icon name='plus' />
      </div>
    </form>
  );
};
