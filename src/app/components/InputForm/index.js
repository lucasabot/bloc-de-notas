import { func, bool, objectOf, any, string, arrayOf } from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

import { ALTERNATIVE_INPUT_TYPES } from './constants';
import styles from './styles.module.scss';

const InputForm = ({ name, type, placeholder, validate, component, warn, className }) => {
  console.log('RE-RENDER-INPUT ', name);
  const renderField = ({ input, type, meta: { touched, error, warning } }) => (
    <div className={styles.inputForm}>
      {component === ALTERNATIVE_INPUT_TYPES.textarea.type ? (
        <textarea
          {...input}
          cols={ALTERNATIVE_INPUT_TYPES.textarea.cols}
          rows={ALTERNATIVE_INPUT_TYPES.textarea.rows}
          className={`${className} ${touched && (error || warning) ? styles.inputFormError : ''}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          className={`${className} ${touched && (error || warning) ? styles.inputFormError : ''}`}
        />
      )}
      {touched &&
        ((error && <span className={styles.errorMessage}>{error}</span>) ||
          (warning && <span className={styles.errorMessage}>{warning}</span>))}
    </div>
  );

  return <Field name={name} type={type} component={renderField} validate={validate} warn={warn} />;
};

InputForm.propTypes = {
  name: string,
  placeholder: string,
  validate: arrayOf(func),
  component: string,
  warn: func,
  className: string,
  type: string
  // meta: shape({ touched: bool, error: bool, warning: bool }),
  // input: objectOf(any)
};

export default InputForm;
