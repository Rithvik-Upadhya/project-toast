import React from 'react';

import Button from '../Button';

import styles from './ToastForm.module.css';

import { ToastContext } from '../ToastProvider'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastForm() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const { addToast } = React.useContext(ToastContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    addToast(message, variant);
    setMessage('')
  }
  return (
    <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            className={styles.messageInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          {VARIANT_OPTIONS.map(option => (
            <label htmlFor={`variant-${option}`} key={option}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={(e) => setVariant(e.target.value)}
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          <Button type="submit">Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default React.memo(ToastForm);
