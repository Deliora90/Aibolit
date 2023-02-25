import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { AuthValues } from 'modules/AuthDialog/authDialog.types';
import s from './authForm.module.scss';

type AuthFormProps = {
  onSubmit: (values: any) => void;
};

const init: AuthValues = {
  login: '',
  password: '',
};

const validate = (values: AuthValues) => {
  const errors: { [key: string]: string } = {};
  if (!values.login) {
    errors.login = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const form = useFormik({ initialValues: init, validate, onSubmit });

  return (
    <form className={s.auth_form} onSubmit={form.handleSubmit}>
      <Input
        id="login"
        name="login"
        type="text"
        value={form.values.login}
        errorText={form.errors.login}
        onChange={form.handleChange}
      />
      <Input
        id="password"
        name="password"
        type="text"
        value={form.values.password}
        errorText={form.errors.password}
        onChange={form.handleChange}
      />
      <div className={s.auth_form__control}>
        <Button type="primary" htmlType="submit">
          Next
        </Button>
        <Button type="link" htmlType="reset">
          Cancel
        </Button>
      </div>
    </form>
  );
};
