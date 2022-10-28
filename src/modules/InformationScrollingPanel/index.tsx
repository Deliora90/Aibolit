import React from 'react';
import cs from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import OperatingModeImage from 'img/OperatingModeImage.png';
import EquipmentImage from 'img/EquipmentImage.png';
import { NavigationSlide } from './components/NavigationSlide';
import s from './informationScrollingPanel.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

export const InformationScrollingPanel = () => {
  const pagination = {
    clickable: true,

    renderBullet: function (index: number, className: string) {
      console.log(className);
      return (
        '<span class="' +
        cs(className, s.swiper__pagination) +
        '">' +
        (index + 1) +
        '</span>'
      );
    },
  };
  return (
    <>
      <Swiper
        direction="vertical"
        pagination={pagination}
        modules={[Pagination]}
        className={s.swiper}
      >
        <SwiperSlide>
          <NavigationSlide
            title="aibolit is a round-the-clock vet clinic"
            buttonText="sign up"
          >
            <Image
              src={OperatingModeImage}
              alt="Operation Mode Image"
              layout="responsive"
            />
          </NavigationSlide>
        </SwiperSlide>
        <SwiperSlide>
          <NavigationSlide
            title="сomfortable equipped hospitals"
            buttonText="sign up"
          >
            <Image
              src={EquipmentImage}
              alt="Equipment Image"
              layout="responsive"
            />
          </NavigationSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
