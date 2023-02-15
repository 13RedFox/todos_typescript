import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { Icon } from '..';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  icon: boolean;
  size: 'default' | 'task';
  color: 'default' | 'add' | 'cancel';
  type: 'button' | 'submit' | 'reset';
}
export const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  onClick,
  size,
  color,
  icon = false,
}) => {
  return (
    <button
      type={type}
      className={classNames(styles.button, styles[size], styles[color], className)}
      onClick={onClick}
    >
      {icon && (
        <Icon
          name='plus'
          className={styles.icon}
        />
      )}
      {children}
    </button>
  );
};
