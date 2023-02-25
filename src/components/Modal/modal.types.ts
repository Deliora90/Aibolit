import React from 'react';

//FIXME: Properties repeat in other components
export interface IModalProps {
  open: boolean;
  okText?: string;
  cancelText?: string;
  title?: string;
  width?: string;
  height?: string;
  footer?: React.ReactNode;
}
export interface IModalEvents {
  onCancel: () => void;
  onOk?: () => void;
}
