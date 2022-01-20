import React from 'react';
import { object, string, func, oneOfType } from 'prop-types';
import UTButton from '@widergy/energy-ui/dist/components/UTButton';

import styles from './styles.module.scss';

const MagicButton = ({ buttonText, onClick, className = '', ...others }) => (
  <UTButton className={`${styles.button} ${className}`} onPress={onClick} {...others}>
    {buttonText}
  </UTButton>
);

MagicButton.propTypes = {
  buttonText: oneOfType([object, string]),
  onClick: func,
  className: string
};

export default MagicButton;
