import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider'
import { useEscapeKey } from '../../hooks'

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);

  useEscapeKey(dismissAllToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(toast => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
