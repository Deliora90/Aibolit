import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import s from './navbarLink.module.scss';

type NavbarLinkProps = {
  href: string;
};

export const NavbarLink = ({
  href,
  children,
}: PropsWithChildren<NavbarLinkProps>) => (
  <li className={s.nav_item}>
    <Link href={href} className={s.nav_item__link}>
      {children}
    </Link>
  </li>
);
