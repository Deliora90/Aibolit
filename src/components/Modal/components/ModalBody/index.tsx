import React, { PropsWithChildren } from 'react';
import s from './modalBody.module.scss';

type ModalBodyProps = {};

export const ModalBody = ({ children }: PropsWithChildren<ModalBodyProps>) => {
  return <div className={s.modal_body}>{children}</div>;
};
