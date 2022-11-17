import React from 'react';
import Image from 'next/image';
import InDevelopmentImage from 'img/InDevelopment.png';
import s from './inDevelopment.module.scss';

export const InDevelopment = () => (
  <div className={s.development}>
    <h3 className={s.development__title}>sorry, this page is in development</h3>
    <div className={s.development__image}>
      <Image
        src={InDevelopmentImage}
        alt="In Development Image"
        layout="intrinsic"
        objectFit="contain"
      />
    </div>
  </div>
);
