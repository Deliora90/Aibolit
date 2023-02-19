import React, { PropsWithChildren } from 'react';
import cs from 'classnames';
import type { LinkButtonProps } from './linkButton.types';
import g from '../button.module.scss';
import s from './linkButton.module.scss';

export const LinkButton = ({
  type,
  disabled,
  children,
  onClick,
}: PropsWithChildren<LinkButtonProps>) => (
  <button
    className={cs(g.button, s.linkButton)}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
