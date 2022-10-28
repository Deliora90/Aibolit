import React, { PropsWithChildren } from 'react';
import { TitleProps } from './title.types';
import s from './title.module.scss';

export const Title = ({
  ellipsis = false,
  children,
}: PropsWithChildren<TitleProps>) => {
  return <h2 className={s.title}>{children}</h2>;
};
