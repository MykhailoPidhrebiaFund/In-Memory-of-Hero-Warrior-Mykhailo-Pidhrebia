import type React from 'react';
import { BtnType } from './types';
import clsx from 'clsx';
import './Button.scss';

type Props = {
  children: React.ReactNode;
  type?: BtnType;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ children, type = BtnType.PRIMARY, onClick }) => {
  return (
    <button
      className={clsx('btn', {
        [`btn--${type}`]: type,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
