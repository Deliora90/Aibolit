import React, {
  useEffect,
  useRef,
  PropsWithChildren,
  CSSProperties,
} from 'react';
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
  width,
  height,
  title,
  okText,
  cancelText,
  children,
  onCancel,
  onOk,
}: PropsWithChildren<ModalProps>) => {
  const element = useRef<HTMLElement | null>(null);

  useEffect(() => {
    element.current = document.getElementById('modal-root');
  }, []);

  if (!isBrowser || !element.current || !open) {
    return null;
  }

  const modalSize: CSSProperties = {
    width: width,
    height: height,
  };

  return ReactDOM.createPortal(
    <div className={s.modal}>
      <div className={s.modal__mask} />
      <div className={s.modal__wrapper}>
        <div className={s.modal__container} style={modalSize}>
          <ModalHeader title={title} onCancel={onCancel} />
          <ModalBody>{children}</ModalBody>
          <ModalFooter
            onCancel={onCancel}
            onOk={onOk}
            okText={okText}
            cancelText={cancelText}
          />
        </div>
      </div>
    </div>,
    element.current
  );
};
