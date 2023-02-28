import React, { useCallback } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useLoginMutation } from 'services/auth/auth';
import { authSelector } from 'state/slices/auth';
import { AuthForm } from './components/AuthForm';
import { Modal } from 'components/Modal';
import { AuthValues } from 'modules/AuthDialog/authDialog.types';

type AuthDialogProps = {
  open: boolean;
  onCancel: () => void;
  onOk?: () => void;
};

export const AuthDialog = ({ open, onCancel, onOk }: AuthDialogProps) => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const authState = useTypedSelector(authSelector);

  const onSubmit = useCallback(
    (values: AuthValues) => {
      login({ login: values.login, password: values.password });
      onOk?.();
    },
    [login, onOk]
  );

  return (
    <Modal open={open} onCancel={onCancel} footer={null} title={'Sign up'}>
      <AuthForm isLoading={authState.isLoading} onSubmit={onSubmit} />
    </Modal>
  );
};
