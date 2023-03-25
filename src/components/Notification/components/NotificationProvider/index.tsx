import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { v4 } from 'uuid';
import { Notification } from '../Notification';
import { NotificationContext } from '../../context';
import { INotification } from '../../notification.types';
import s from './notificationProvider.module.scss';

type NotificationProviderProps = {};

export const NotificationProvider = ({
  children,
}: PropsWithChildren<NotificationProviderProps>) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const addNotification = useCallback(
    (notification: Omit<INotification, 'id'>) => {
      const newNotification: INotification = { id: v4(), ...notification };
      setNotifications((items) => [...items, newNotification]);
    },
    []
  );
  const removeNotification = useCallback((id: INotification['id']) => {
    setNotifications((items) => items.filter((val) => val.id !== id));
  }, []);

  const value = useMemo(
    () => ({ addNotification, removeNotification }),
    [addNotification, removeNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      <div className={s.notificationBox}>
        {notifications.map((item) => (
          <Notification
            key={item.id}
            notification={item}
            onRemove={removeNotification}
          />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};
