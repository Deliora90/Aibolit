import { MouseEventHandler } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonEvents {
  onClick?: MouseEventHandler<HTMLElement>;
}

export interface IButtonProps {
  type?: ButtonType;
  disabled?: boolean;
}
