import React, { PropsWithChildren } from 'react';
import type { PrimaryButtonProps } from './primaryButton.types';
import s from './primaryButton.module.scss';

export const PrimaryButton = ({
  children,
}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button className={s.button} type="button">
      {children}
    </button>
  );
};
