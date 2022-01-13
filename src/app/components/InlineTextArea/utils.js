import React from 'react';

import styles from './styles.module.scss';

export const buttonsArray = [
  {
    buttonText: <b className={styles.spanFontSize}>CLEAR</b>,
    key: 'CLEAR',
    className: styles.clearButton
  },
  {
    buttonText: <i className={styles.spanFontSize}>Italic</i>,
    key: 'ITALIC'
  },
  {
    buttonText: <b className={styles.spanFontSize}>Bold</b>,
    key: 'BOLD'
  },
  {
    buttonText: <b className={styles.spanFontSize}>◄</b>,
    key: 'DELETE',
    className: styles.deleteButton
  }
];
