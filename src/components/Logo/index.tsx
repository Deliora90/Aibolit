import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from 'img/logo.svg';
import s from './logo.module.scss';

export const Logo = () => {
  return (
    <div className={s.logo}>
      <Link href="/">
        <a>
          <Image src={LogoImg} alt="logo" layout="fill" />
        </a>
      </Link>
    </div>
  );
};
