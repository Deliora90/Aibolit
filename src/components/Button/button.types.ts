import { MouseEventHandler } from 'react';

export type ButtonHTMLType = 'button' | 'submit' | 'reset';
export type ButtonType = 'primary' | 'link';
export interface IButtonEvents {
  onClick?: MouseEventHandler<HTMLElement>;
}

export interface IButtonProps {
  htmlType?: ButtonHTMLType;
  type?: ButtonType;
  disabled?: boolean;
}

export type ButtonProps = IButtonProps & IButtonEvents & {};
