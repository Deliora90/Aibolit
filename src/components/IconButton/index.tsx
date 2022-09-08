import React, { PropsWithChildren } from 'react';
import cs from 'classnames';
import s from './iconButton.module.scss';

type IconButtonProps = {
  classNames?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const IconButton = ({
  classNames,
  children,
  onClick,
}: PropsWithChildren<IconButtonProps>) => {
  return (
    <button className={cs(s.icon_button, classNames)} onClick={onClick}>
      {children}
    </button>
  );
};
