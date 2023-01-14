import React from 'react';
import cs from 'classnames';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import { PaginationOptions } from 'swiper/types';
import { NavigationSlide } from './components/NavigationSlide';
import { Modal } from 'components/Modal';
import { useToggle } from 'hooks/useToogle';
import OperatingModeImage from 'img/OperatingModeImage.png';
import EquipmentImage from 'img/EquipmentImage.png';
import s from './informationScrollingPanel.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

const pagination: PaginationOptions = {
  clickable: true,
  renderBullet: (index: number, className: string) =>
    `<span class="${cs(className, s.swiper__pagination)}">${index + 1}</span>`,
};

export const InformationScrollingPanel = () => {
  const [isOpen, toggleOpen] = useToggle();

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <>
      <Swiper
        direction="vertical"
        pagination={pagination}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className={s.swiper}
      >
        <SwiperSlide>
          <NavigationSlide
            title="aibolit is a round-the-clock vet clinic"
            buttonText="sign up"
            onClick={handleClick}
          >
            <Image
              src={OperatingModeImage}
              alt="Operation Mode Image"
              layout="fill"
              objectFit="contain"
            />
          </NavigationSlide>
        </SwiperSlide>
        <SwiperSlide>
          <NavigationSlide
            title="сomfortable equipped hospitals"
            buttonText="sign up"
            onClick={handleClick}
          >
            <Image
              src={EquipmentImage}
              alt="Equipment Image"
              layout="fill"
              objectFit="contain"
            />
          </NavigationSlide>
        </SwiperSlide>
      </Swiper>
      <Modal
        open={isOpen}
        onCancel={toggleOpen}
        title={'Sign up'}
        okText={'Next'}
        onOk={() => {
          console.log('OK');
        }}
      >
        This is Modal
      </Modal>
    </>
  );
};
