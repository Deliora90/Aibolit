import React, { useState, useMemo } from 'react';
import { DropdownBody } from './components/DropdownBody';
import { DropdownHeader } from './components/DropdownHeader';
import {
  IDropdownEvents,
  IDropdownProps,
} from 'components/Dropdown/dropdown.types';
import { useToggle } from 'hooks/useToogle';
import s from './dropdown.module.scss';

//TODO: If a user clicks outside the component, dropdown will close

export type DropdownProps = IDropdownProps & IDropdownEvents;

export const Dropdown = ({
  options,
  placeholder,
  value,
  headerClassName,
  wrapperClassName,
  onClick,
}: DropdownProps) => {
  const [isOpen, setOpen] = useToggle(false);
  const [selectedOption, setSelectedOption] = useState<number>();

  const selectedValue = useMemo(() => {
    const key = value ?? selectedOption;
    return options.find((item) => item.id === key);
  }, [options, value, selectedOption]);

  const onSelect = (key: number, label: string) => {
    setSelectedOption(key);
    onClick?.(key, label);
    setOpen();
  };

  const onOpen = () => {
    setOpen();
  };

  return (
    <div className={s.dropdown}>
      <DropdownHeader
        placeholder={placeholder}
        value={selectedValue?.value}
        onClick={onOpen}
        headerClassName={headerClassName}
      />
      <DropdownBody
        options={options}
        isShow={isOpen}
        onClick={onSelect}
        wrapperClassName={wrapperClassName}
      />
    </div>
  );
};
