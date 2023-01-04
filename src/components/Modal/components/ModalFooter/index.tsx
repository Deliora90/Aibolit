import React from 'react';
import { IModalEvents } from 'components/Modal/modal.types';
import s from './modalFooter.module.scss';

type ModalFooterProps = IModalEvents;

export const ModalFooter = ({ onCancel, onOk }: ModalFooterProps) => {
  return <div className={s.modal_footer}>ModalFooter</div>;
};
