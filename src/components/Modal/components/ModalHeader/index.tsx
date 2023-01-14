import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { IModalProps, IModalEvents } from 'components/Modal/modal.types';
import s from './modalHeader.module.scss';

type ModalHeaderProps = Pick<IModalEvents, 'onCancel'> & {
  title?: string;
};

export const ModalHeader = ({ title, onCancel }: ModalHeaderProps) => {
  return (
    <div className={s.modal_header}>
      <button type="button" className={s.modal_header__btn} onClick={onCancel}>
        <IoMdClose />
      </button>
      {title && <h3 className={s.modal_header__title}>{title}</h3>}
    </div>
  );
};
