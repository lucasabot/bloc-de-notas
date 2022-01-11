import React from 'react';
import propTypes from 'prop-types';
import UTButton from '@widergy/energy-ui/dist/components/UTButton';

import styles from './styles.module.scss';

const MagicButton = ({ buttonText, onClick, className = '' }) => (
  <UTButton className={`${styles.button} ${className}`} onPress={onClick}>
    {buttonText}
  </UTButton>
);

MagicButton.propTypes = {
  buttonText: propTypes.oneOf([propTypes.object, propTypes.string]),
  onClick: propTypes.func,
  className: propTypes.string
};

export default MagicButton;
