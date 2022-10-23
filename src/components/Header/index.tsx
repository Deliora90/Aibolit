import React from 'react';
import { Navbar } from 'components/Navbar';
import { Logo } from 'components/Logo';
import s from './header.module.scss';

export const Header = () => {
  return (
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
  );
};
