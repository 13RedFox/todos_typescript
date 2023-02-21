import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { Button, Icon } from '../../components';
import { useTodos } from '../../utils/store';
import styles from './AddFolderForm.module.scss';
import { AddFolderFormColors } from './components/AddFolderFormColors';
import { FolderColor } from './types/color.type';

interface AddFolderFormProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const AddFolderForm: FC<AddFolderFormProps> = ({ setIsOpenModal }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [activeColor, setActiveColor] = useState<FolderColor>(FolderColor.Gray);
  const addFolder = useTodos((state) => state.addFolder);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddFolderSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    addFolder(inputValue, activeColor);
    setIsOpenModal(false);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleAddFolderSubmit}>
      <input
        type='text'
        placeholder='Название папки'
        className={styles.form__name}
        onChange={handleInputValue}
        value={inputValue}
      />
      <AddFolderFormColors
        setActiveColor={setActiveColor}
        activeColor={activeColor}
      />
      <Button
        size='default'
        type='submit'
        color='add'
        icon={false}
        className={styles.form__btn}>
        Добавить
      </Button>
      <div
        className={styles.form__close}
        onClick={() => setIsOpenModal(false)}>
        <Icon name='plus' />
      </div>
    </form>
  );
};
