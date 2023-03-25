import React, { useCallback } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useNotification } from 'components/Notification';
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
  const [login, { error, isLoading }] = useLoginMutation();
  const notification = useNotification();
  const dispatch = useAppDispatch();
  const authState = useTypedSelector(authSelector);

  const onSubmit = useCallback(
    async (values: AuthValues) => {
      try {
        const credintals = {
          login: values.login,
          password: values.password,
        };
        await login(credintals).unwrap();
        onOk?.();
      } catch {
        console.log('we');
        notification.addNotification({
          type: 'error',
          message: 'eere',
        });
      }
    },
    [login, onOk, notification]
  );

  // console.log({ error });

  return (
    <Modal open={open} onCancel={onCancel} footer={null} title={'Sign up'}>
      <AuthForm isLoading={isLoading} onSubmit={onSubmit} />
    </Modal>
  );
};
