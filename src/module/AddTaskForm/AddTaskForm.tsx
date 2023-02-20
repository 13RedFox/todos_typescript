import { FC } from 'react';
import { Button } from '../../components';
import styles from './AddTaskForm.module.scss';

export const AddTaskForm: FC = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <input
        type='text'
        placeholder='Текст задачи'
        className={styles.form__input}
      />
      <div className={styles.form__wrap}>
        <Button
          type='submit'
          size='task'
          color='add'
          icon={false}
          className={styles.form__wrap_btn}
        >
          Добавить задачу
        </Button>
        <Button
          type='button'
          size='task'
          color='default'
          icon={false}
          className={styles.form__wrap_btn}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};
