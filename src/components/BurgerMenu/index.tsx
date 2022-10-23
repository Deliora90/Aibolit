import React from 'react';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { IconButton } from 'components/IconButton';
import { useToggle } from 'hooks/useToogle';
import s from './burgerMenu.module.scss';

type BurgerMenuProps = {
  isOpen?: boolean;
  classNames?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const BurgerMenu = ({
  isOpen,
  classNames,
  onClick,
}: BurgerMenuProps) => {
  const [defaultIsOpen, toogleOpen] = useToggle();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    toogleOpen();
    onClick(event);
  };

  const burgerIsOpen = isOpen ?? defaultIsOpen;
  return (
    <IconContext.Provider value={{ className: s.burger }}>
      <IconButton classNames={classNames} onClick={handleClick}>
        {burgerIsOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
      </IconButton>
    </IconContext.Provider>
  );
};
