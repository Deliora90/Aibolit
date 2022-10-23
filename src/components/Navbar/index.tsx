import React, { PropsWithChildren, useCallback } from 'react';
import cs from 'classnames';
import { NavbarLink } from './components/NavbarLink';
import { BurgerMenu } from 'components/BurgerMenu';
import { useToggle } from 'hooks/useToogle';
import s from './navbar.module.scss';

type NavbarProps = {};

export const Navbar = ({ children }: PropsWithChildren<NavbarProps>) => {
  const [isOpen, toogleOpen] = useToggle();
  if (!children) {
    throw new Error('Children is mandatory!');
  }

  const handleClick = useCallback(() => {
    toogleOpen();
  }, [toogleOpen]);

  return (
    <div className={s.menu}>
      <BurgerMenu
        classNames={s.menu__button}
        isOpen={isOpen}
        onClick={handleClick}
      />
      <nav className={cs(s.menu__nav, s.nav, { [s.nav_active]: isOpen })}>
        <ul className={s.nav__body}>{children}</ul>
      </nav>
    </div>
  );
};

Navbar.Link = NavbarLink;
