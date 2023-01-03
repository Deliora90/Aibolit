import { MouseEventHandler } from 'react';
import { IOption } from 'types/common/IOption';

export interface IDropdownEvents {
  onClick?: (key: number, label: string) => void;
}

export interface IDropdownHeaderProps {
  placeholder?: string;
  headerClassName?: string;
}

export interface IDropdownBodyProps {
  options: IOption<number, string>[];
  wrapperClassName?: string;
}

export interface IDropdownProps
  extends IDropdownBodyProps,
    IDropdownHeaderProps {
  value?: number;
}
