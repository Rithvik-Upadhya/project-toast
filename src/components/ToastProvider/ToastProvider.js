import React from 'react';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback((message, variant) => {
    return setToasts((currentValue) => ([
      ...currentValue,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ]));
  }, [])

  const dismissToast = React.useCallback((id) => {
    return setToasts((currentValue) => currentValue.filter(toast => toast.id !== id));
  }, [])

  const dismissAllToasts = React.useCallback(() => setToasts([]))

  const value = React.useMemo(() => ({
    toasts,
    addToast,
    dismissToast,
    dismissAllToasts
  }), [toasts])

  return (
    <ToastContext value={value}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
