import React from 'react';
import cs from 'classnames';
import { IDropdownHeaderProps } from 'components/Dropdown/dropdown.types';
import s from './dropdown.module.scss';

type DropdownHeaderProps = IDropdownHeaderProps & {
  value?: string;
  onClick?: () => void;
};

export const DropdownHeader = ({
  placeholder = 'Placeholder',
  value,
  headerClassName,
  onClick,
}: DropdownHeaderProps) => {
  return (
    <button
      type="button"
      className={cs(s.dropdownHeader, headerClassName)}
      onClick={onClick}
    >
      {value ?? placeholder}
    </button>
  );
};
