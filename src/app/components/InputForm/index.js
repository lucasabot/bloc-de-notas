import React from 'react';
import { Field } from 'redux-form';

import styles from './styles.module.scss';

const InputForm = ({ name, type, label, component, placeholder, ...others }) => {
  return (
    <div className={styles.inputForm}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} component={component} type={type} placeholder={placeholder} {...others} />
    </div>
  );
};

export default InputForm;
