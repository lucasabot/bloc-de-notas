import React, { useState, useEffect, useCallback, createContext } from 'react';

import styles from './styles.module.scss';

const ToastContext = createContext();

export default ToastContext;

export const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [toastStyle, setToastStyle] = useState('');

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts(() => toasts.slice(1)), 4000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  /** addToast es la funcion que disparar un toast en nuestra applicacion
   * @param {*} toast - contenido de texto de nuestro toast.
   * @param {object} config - objeto de configuracion de nuestro toast.
   * @param {string} config.style - define el estilo de nuestro toast (succes o danger)
   */
  const addToast = useCallback(
    (toast, config = { style: 'success' }) => {
      setToasts([...toasts, toast]);
      setToastStyle(config.style);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className={styles.toastWrapper}>
        {toasts.map(toast => (
          <div className={`${toastStyle === 'success' ? styles.toastSuccess : styles.toastDanger}`}>
            {toast}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
