export type InputType = React.HTMLInputTypeAttribute;

export interface IInputEvents {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IInputProps {
  id?: string;
  name?: string;
  type?: InputType;
  disabled?: boolean;
  value?: string;
  className?: string;
  errorText?: string;
}

export type InputProps = IInputProps & IInputEvents & {};
