import React, { PropsWithChildren } from 'react';
import { IDropdownEvents } from 'components/Dropdown/dropdown.types';
import s from './dropdownOption.module.scss';

type DropdownOptionProps = IDropdownEvents & {
  value: number;
  label: string;
};

export const DropdownOption = ({
  label,
  value,
  onClick,
}: DropdownOptionProps) => {
  const handleClick = () => {
    onClick?.(value, label);
  };

  return (
    <li className={s.dropdownItem} onClick={handleClick}>
      {label}
    </li>
  );
};
