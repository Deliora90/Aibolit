import React, { PropsWithChildren } from 'react';
import { Header } from 'components/Header';
import { BurgerMenu } from 'components/BurgerMenu';
import s from './Layout.module.scss';

type LayoutProps = {} & PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{children}</main>
      <footer className={s.footer}>Footer</footer>
    </div>
  );
};
