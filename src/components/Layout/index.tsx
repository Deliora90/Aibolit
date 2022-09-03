import React, { PropsWithChildren } from "react";
import { Navbar } from "components/Navbar";
import { Logo } from "components/Logo";
import s from "./Layout.module.scss";

type LayoutProps = {} & PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Logo />
        <Navbar />
      </header>
      <main className={s.main}>{children}</main>
      <footer className={s.footer}>Footer</footer>
    </div>
  );
};
