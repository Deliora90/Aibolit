import React, { useCallback } from 'react';
import { AuthForm } from './components/AuthForm';
import { Modal } from 'components/Modal';
import { AuthValues } from 'modules/AuthDialog/authDialog.types';

type AuthDialogProps = {
  open: boolean;
  onCancel: () => void;
  onOk?: () => void;
};

export const AuthDialog = ({ open, onCancel, onOk }: AuthDialogProps) => {
  const onSubmit = useCallback(
    (values: any) => {
      console.log({ values });
      onOk?.();
    },
    [onOk]
  );

  return (
    <Modal open={open} onCancel={onCancel} footer={null} title={'Sign up'}>
      <AuthForm onSubmit={onSubmit} />
    </Modal>
  );
};
