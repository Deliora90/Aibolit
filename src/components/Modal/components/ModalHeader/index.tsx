import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { IModalEvents } from 'components/Modal/modal.types';
import s from './modalHeader.module.scss';

type ModalHeaderProps = Pick<IModalEvents, 'onCancel'>;

export const ModalHeader = ({ onCancel }: ModalHeaderProps) => {
  return (
    <div className={s.modal_header}>
      <button type="button" className={s.modal_header__btn} onClick={onCancel}>
        <IoMdClose />
      </button>
    </div>
  );
};
