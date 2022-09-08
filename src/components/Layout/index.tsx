import React, { PropsWithChildren } from 'react';
import { Navbar } from 'components/Navbar';
import { Logo } from 'components/Logo';
import { BurgerMenu } from 'components/BurgerMenu';
import s from './Layout.module.scss';

type LayoutProps = {} & PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Logo />
        <Navbar>
          <Navbar.Link href="/user/12222">Личный кабинет</Navbar.Link>
          <Navbar.Link href="/aboutUs">О нас</Navbar.Link>
          <Navbar.Link href="/news">Новости и акции</Navbar.Link>
          <Navbar.Link href="/contacts">Контакты</Navbar.Link>
          <Navbar.Link href="/blog">Блог</Navbar.Link>
        </Navbar>
      </header>
      <main className={s.main}>{children}</main>
      <footer className={s.footer}>Footer</footer>
    </div>
  );
};
