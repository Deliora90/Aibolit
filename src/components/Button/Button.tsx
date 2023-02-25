import React, { PropsWithChildren } from 'react';
import cs from 'classnames';
import type { ButtonProps } from './button.types';
import s from './button.module.scss';

export const Button = ({
  htmlType,
  type,
  disabled,
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={cs(s.button, {
      [s.button_link]: type === 'link',
      [s.button_primary]: type === 'primary',
    })}
    type={htmlType}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
