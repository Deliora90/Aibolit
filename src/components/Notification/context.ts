import { createContext } from 'react';
import { INotification } from './notification.types';

interface INotificationContext {
  addNotification: (notification: Omit<INotification, 'id'>) => void;
  removeNotification: (id: INotification['id']) => void;
}

const defaultState: INotificationContext = {
  addNotification: () => {
    throw new Error('method addNotification is not provided to context');
  },
  removeNotification: () => {
    throw new Error('method removeNotification is not provided to context');
  },
};

export const NotificationContext =
  createContext<INotificationContext>(defaultState);
