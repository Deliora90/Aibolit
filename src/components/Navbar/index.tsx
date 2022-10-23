import React, { PropsWithChildren, useCallback, useRef } from 'react';
import cs from 'classnames';
import { NavbarLink } from './components/NavbarLink';
import { BurgerMenu } from 'components/BurgerMenu';
import { useToggle } from 'hooks/useToogle';
import { useClickOutside } from 'hooks/useClickOutside';
import s from './navbar.module.scss';

type NavbarProps = {};

export const Navbar = ({ children }: PropsWithChildren<NavbarProps>) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isOpen, toogleOpen] = useToggle();
  useClickOutside(navbarRef, () => {
    if (isOpen) {
      toogleOpen();
    }
  });
  if (!children) {
    throw new Error('Children is mandatory!');
  }

  const handleBurgerClick = useCallback(() => {
    toogleOpen();
  }, [toogleOpen]);

  const handleNavbarClick = useCallback(
    (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        toogleOpen();
      }
    },
    [toogleOpen]
  );

  return (
    <div className={s.menu} ref={navbarRef}>
      <BurgerMenu
        classNames={s.menu__button}
        isOpen={isOpen}
        onClick={handleBurgerClick}
      />
      <nav className={cs(s.menu__nav, s.nav, { [s.nav_active]: isOpen })}>
        <ul className={s.nav__body} onClick={handleNavbarClick}>
          {children}
        </ul>
      </nav>
    </div>
  );
};

Navbar.Link = NavbarLink;
