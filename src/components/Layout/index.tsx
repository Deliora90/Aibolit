import React, { PropsWithChildren } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import s from './layout.module.scss';

type LayoutProps = {} & PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};
