import React, { PropsWithChildren } from 'react';
import Title from 'components/Title';
import PrimaryButton from 'components/PrimaryButton';
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
      <PrimaryButton>{buttonText}</PrimaryButton>
    </header>
    <div className={s.navigationSlide__container}>{children}</div>
  </article>
);
