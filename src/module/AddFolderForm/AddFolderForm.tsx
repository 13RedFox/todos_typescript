import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { uid } from 'uid';
import { Button, Icon } from '../../components';
import { FolderType } from '../../types/folder.type';
import styles from './AddFolderForm.module.scss';
import { AddFolderFormColors } from './components/AddFolderFormColors';
import { FolderColor } from './types/color.type';

interface AddFolderFormProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<FolderType[]>>;
}

export const AddFolderForm: FC<AddFolderFormProps> = ({ setIsOpenModal, setData }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [activeColor, setActiveColor] = useState<FolderColor>(FolderColor.Gray);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddFolderSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newFolder: FolderType = { id: uid(), title: inputValue, color: activeColor };
    setData((prevState) => [...prevState, newFolder]);
    setIsOpenModal(false);
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
        setActiveColor={setActiveColor}
        activeColor={activeColor}
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
