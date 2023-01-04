import React, { useMemo, PropsWithChildren } from 'react';
import cs from 'classnames';
import { isBrowser } from 'react-device-detect';
import ReactDOM from 'react-dom';
import { ModalHeader } from 'components/Modal/components/ModalHeader';
import { ModalFooter } from 'components/Modal/components/ModalFooter';
import { ModalBody } from 'components/Modal/components/ModalBody';
import { IModalProps, IModalEvents } from './modal.types';
import s from './modal.module.scss';

type ModalProps = IModalProps & IModalEvents;

export const Modal = ({
  open,
  children,
  onCancel,
  onOk,
}: PropsWithChildren<ModalProps>) => {
  const element = useMemo(() => document.getElementById('modal-root'), []);

  if (!isBrowser || !element || !open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={cs(s.modal, s.modal__wrapper)}>
      <ModalHeader onCancel={onCancel} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter onCancel={onCancel} onOk={onOk} />
    </div>,
    element
  );
};
