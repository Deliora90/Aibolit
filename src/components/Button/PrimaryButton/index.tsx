import React, { PropsWithChildren } from 'react';
import cs from 'classnames';
import type { PrimaryButtonProps } from './primaryButton.types';
import g from '../button.module.scss';
import s from './primaryButton.module.scss';

export const PrimaryButton = ({
  type,
  disabled,
  children,
  onClick,
}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button
      className={cs(g.button, s.primaryButton)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
