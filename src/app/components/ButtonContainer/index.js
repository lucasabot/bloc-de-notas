import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

const ButtonContainer = ({ children, className }) => (
  <div className={`${styles.buttonContainer} ${className}`}>{children}</div>
);

ButtonContainer.propTypes = {
  className: string
};

export default ButtonContainer;
