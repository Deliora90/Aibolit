import React from 'react';
import cs from 'classnames';
import { DropdownOption } from 'components/Dropdown/components/DropdownOption';
import {
  IDropdownBodyProps,
  IDropdownEvents,
} from 'components/Dropdown/dropdown.types';
import s from './dropdownBody.module.scss';

type DropdownBodyProps = IDropdownBodyProps &
  IDropdownEvents & {
    isShow?: boolean;
  };

export const DropdownBody = ({
  isShow = false,
  options,
  wrapperClassName,
  onClick,
}: DropdownBodyProps) => {
  return isShow ? (
    <ul className={cs(s.dropdownBody, wrapperClassName)}>
      {options.map(({ id, value }) => (
        <DropdownOption key={id} value={id} label={value} onClick={onClick} />
      ))}
    </ul>
  ) : (
    <></>
  );
};
