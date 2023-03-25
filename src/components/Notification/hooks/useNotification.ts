import { useContext } from 'react';
import { NotificationContext } from '../context';

export const useNotification = () => {
  const { addNotification, removeNotification } =
    useContext(NotificationContext);

  return { addNotification };
};
