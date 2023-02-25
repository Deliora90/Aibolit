import React from 'react';
import cs from 'classnames';
import { InputProps } from './input.types';
import s from './input.module.scss';

export const InputText = ({
  id,
  name,
  type,
  value,
  disabled,
  className,
  errorText,
  onChange,
}: InputProps) => (
  <div className={cs(s.input, { [s.input_error]: errorText }, className)}>
    <input
      id={id}
      className={cs(s.input__text, { [s.input__text_error]: errorText })}
      name={name}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
    {errorText && <p className={cs(s.input__error_text)}>{errorText}</p>}
  </div>
);

export const Input = (props: InputProps) => {
  return <InputText {...props} />;
};

Input.Text = InputText;
