import React, { PropsWithChildren } from 'react';
import Title from 'components/Title';
import { Button } from 'components/Button';
import s from './navigationSlide.module.scss';

export type NavigationSlideProps = {
  title: string;
  buttonText: string;
  onClick?: () => void;
};

export const NavigationSlide = ({
  title,
  buttonText,
  children,
  onClick,
}: PropsWithChildren<NavigationSlideProps>) => (
  <article className={s.navigationSlide}>
    <header className={s.navigationSlide__header}>
      <Title>{title}</Title>
      <Button type="primary" onClick={onClick}>
        {buttonText}
      </Button>
    </header>
    <div className={s.navigationSlide__container}>
      <div className={s.navigationSlide__wrapper}>{children}</div>
    </div>
  </article>
);
