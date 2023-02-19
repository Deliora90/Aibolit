import React from 'react';
import { PrimaryButton, LinkButton } from 'components/Button';
import { IModalEvents } from 'components/Modal/modal.types';
import s from './modalFooter.module.scss';

type ModalFooterProps = IModalEvents & { okText?: string; cancelText?: string };

export const ModalFooter = ({
  okText,
  cancelText,
  onOk,
  onCancel,
}: ModalFooterProps) => {
  return (
    <div className={s.modal_footer}>
      <div className={s.modal_footer__control}>
        {onOk && (
          <PrimaryButton type="submit" onClick={onOk}>
            {okText ?? 'OK'}
          </PrimaryButton>
        )}
        <LinkButton type="reset" onClick={onCancel}>
          {cancelText ?? 'Cancel'}
        </LinkButton>
      </div>
    </div>
  );
};
