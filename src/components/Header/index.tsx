import React from 'react';
import { Navbar } from 'components/Navbar';
import { Logo } from 'components/Logo';
import s from './header.module.scss';

export const Header = () => (
  <header className={s.header}>
    <Logo />
    <Navbar>
      <Navbar.Link href="/user/12222">Account</Navbar.Link>
      <Navbar.Link href="/aboutUs">About us</Navbar.Link>
      <Navbar.Link href="/news">News</Navbar.Link>
      <Navbar.Link href="/contacts">Contacts</Navbar.Link>
      <Navbar.Link href="/blog">The blog</Navbar.Link>
    </Navbar>
  </header>
);
