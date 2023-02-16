import classNames from 'classnames';
import { FC } from 'react';

interface IconProps {
  name: IconNameProp;
  className?: string;
}

type IconNameProp = 'all' | 'plus';

export const Icon: FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'plus':
      return (
        <svg
          className={classNames(className)}
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 1V11'
            stroke='#868686'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1 6H11'
            stroke='#868686'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    default:
      return null;
  }
};
