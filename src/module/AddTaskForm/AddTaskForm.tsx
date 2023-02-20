import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { uid } from 'uid';
import { Button } from '../../components';
import { TaskType } from '../../types/folder.type';
import styles from './AddTaskForm.module.scss';

interface AddTaskFormProps {
  setShowTaskForm: Dispatch<SetStateAction<boolean>>;
}

export const AddTaskForm: FC<AddTaskFormProps> = ({ setShowTaskForm }): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [task, setTask] = useState<TaskType[]>([]);

  const addTaskFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setTask((prevState) => {
      return [
        ...prevState,
        {
          id: uid(),
          title: inputValue,
          isComplete: false,
        },
      ];
    });

    setShowTaskForm(false);
  };
  return (
    <form
      className={styles.form}
      onSubmit={addTaskFormSubmit}
    >
      <input
        type='text'
        value={inputValue}
        placeholder='Текст задачи'
        className={styles.form__input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <div className={styles.form__wrap}>
        <Button
          size='task'
          color='add'
          icon={false}
          type='submit'
          className={styles.form__wrap_btn}
        >
          Добавить задачу
        </Button>
        <Button
          size='task'
          icon={false}
          type='button'
          color='default'
          className={styles.form__wrap_btn}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
