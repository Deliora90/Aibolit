import React from 'react';
import { AuthForm } from './components/AuthForm';
import { Modal } from 'components/Modal';

type AuthDialogProps = {
  open: boolean;
  onCancel: () => void;
  onOk?: () => void;
};

export const AuthDialog = ({ open, onCancel, onOk }: AuthDialogProps) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={'Sign up'}
      okText={'Next'}
      onOk={onOk}
    >
      <AuthForm />
    </Modal>
  );
};
