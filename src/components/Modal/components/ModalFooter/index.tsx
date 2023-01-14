import React from 'react';
import { PrimaryButton } from 'components/Button';
import { IModalEvents } from 'components/Modal/modal.types';
import s from './modalFooter.module.scss';

type ModalFooterProps = IModalEvents & { okText?: string };

export const ModalFooter = ({ okText, onOk }: ModalFooterProps) => {
  return (
    <div className={s.modal_footer}>
      {onOk && <PrimaryButton>{okText ?? 'OK'}</PrimaryButton>}
    </div>
  );
};
