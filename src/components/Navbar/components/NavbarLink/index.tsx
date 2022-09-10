import React, { PropsWithChildren } from 'react';
import cs from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './navbarLink.module.scss';

type NavbarLinkProps = {
  href: string;
};

export const NavbarLink = ({
  href,
  children,
}: PropsWithChildren<NavbarLinkProps>) => {
  const router = useRouter();
  return (
    <li
      className={cs(s.nav_item, {
        [s.nav_item_active]: router.asPath === href,
      })}
    >
      <Link href={href} className={s.nav_item__link}>
        {children}
      </Link>
    </li>
  );
};
