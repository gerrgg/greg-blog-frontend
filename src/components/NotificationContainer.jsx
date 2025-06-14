import { useEffect, useState } from 'react';
import { subscribe } from './notificationBus';

export default function NotificationContainer() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const unsub = subscribe((n) => {
      setNotification(n);
      setTimeout(() => setNotification(null), 3000);
    });
    return unsub;
  }, []);

  if (!notification) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      padding: '1rem',
      backgroundColor: notification.type === 'error' ? '#f44336' : '#4caf50',
      color: 'white',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      {notification.message}
    </div>
  );
}
