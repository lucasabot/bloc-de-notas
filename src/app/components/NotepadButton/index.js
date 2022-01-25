import React from 'react';
import { object, string, func, oneOfType } from 'prop-types';
import { UTButton } from '@widergy/energy-ui';

import styles from './styles.module.scss';

const NotepadButton = ({ buttonText, onClick, className = '', ...others }) => (
  <UTButton className={`${styles.button} ${className}`} onPress={onClick} {...others}>
    {buttonText}
  </UTButton>
);

NotepadButton.propTypes = {
  buttonText: oneOfType([object, string]),
  onClick: func,
  className: string
};

export default NotepadButton;
