import React, {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  useCallback,
} from 'react';
import cs from 'classnames';
import { INotification, NotificationType } from '../../notification.types';
import s from './notification.module.scss';

type NotificationProps = {
  notification: INotification;
  onRemove: (id: INotification['id']) => void;
};

const NotificationComponent = ({
  notification,
  onRemove,
}: PropsWithChildren<NotificationProps>) => {
  const { id, type, message } = notification;
  const [width, setWidth] = useState(0);
  const [exit, setExit] = useState(false);
  const intervalId = useRef<NodeJS.Timer | undefined>(undefined);

  const handleStartBar = () => {
    const id = setInterval(() => {
      setWidth((val) => {
        if (val < 100) {
          return val + 0.5;
        }
        return val;
      });
    }, 30);
    intervalId.current = id;
  };

  const resetTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = undefined;
  };

  const handleRemove = useCallback(() => {
    resetTimer();
    setExit(true);
    setTimeout(() => {
      onRemove(id);
    }, 400);
  }, [id, onRemove]);

  useEffect(() => {
    handleStartBar();
    return () => {
      resetTimer();
    };
  }, []);

  useEffect(() => {
    if (width === 100) {
      handleRemove();
    }
  }, [width, handleRemove]);

  useEffect(() => {
    console.log('render', { notification });
  }, [notification]);

  return (
    <div
      onMouseEnter={resetTimer}
      onMouseLeave={handleStartBar}
      className={cs(s.notification, s[`notification_${type}`], {
        [s.notification_exiting]: exit,
      })}
    >
      <p className={s.notification__content}>{message}</p>
      <div className={s.notification__bar} style={{ width: `${width}%` }} />
    </div>
  );
};

export const Notification = React.memo(NotificationComponent, (prev, next) => {
  console.log(prev === next, { prev }, { next });
  return true;
});
