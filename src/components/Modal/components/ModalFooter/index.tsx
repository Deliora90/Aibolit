import React, { PropsWithChildren, useMemo } from 'react';
import { Button } from 'components/Button';
import { IModalEvents } from 'components/Modal/modal.types';
import s from './modalFooter.module.scss';

type ModalFooterProps = IModalEvents & { okText?: string; cancelText?: string };

export const ModalFooter = ({
  okText,
  cancelText,
  children,
  onOk,
  onCancel,
}: PropsWithChildren<ModalFooterProps>) => {
  if (children === null) return <></>;

  return (
    <div className={s.modal_footer}>
      {children !== undefined ? (
        children
      ) : (
        <div className={s.modal_footer__control}>
          {onOk && (
            <Button type="primary" htmlType="submit" onClick={onOk}>
              {okText ?? 'OK'}
            </Button>
          )}
          <Button type="link" htmlType="reset" onClick={onCancel}>
            {cancelText ?? 'Cancel'}
          </Button>
        </div>
      )}
    </div>
  );
};
