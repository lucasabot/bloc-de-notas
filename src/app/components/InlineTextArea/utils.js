import React from 'react';

import styles from './styles.module.scss';

export const buttonsArray = [
  {
    buttonText: (
      <span role="img" aria-label="guardar" className={styles.spanFontSize}>
        💾
      </span>
    ),
    key: 'SAVE',
    className: styles.saveButton
  },
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

export const calcTextClassNames = textStyles =>
  `${textStyles.bold && styles.bold} ${textStyles.italic && styles.italic}`;
