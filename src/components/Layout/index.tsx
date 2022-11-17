import React, { PropsWithChildren } from 'react';
import s from './layout.module.scss';

type LayoutProps = {
  header?: JSX.Element;
  footer?: JSX.Element;
} & PropsWithChildren;

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <div className={s.wrapper}>
      {header}
      <main className={s.main}>{children}</main>
      {footer}
    </div>
  );
};
