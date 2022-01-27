import React from 'react';
import { bool, objectOf, any, string, shape } from 'prop-types';

import { ALTERNATIVE_INPUT_TYPES } from './constants';
import styles from './styles.module.scss';

const SurveyField = ({ input, type, meta: { touched, error, warning }, className, placeholder }) => (
  <div className={styles.inputForm}>
    {type === ALTERNATIVE_INPUT_TYPES.textarea.type ? (
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

SurveyField.propTypes = {
  placeholder: string,
  component: string,
  className: string,
  type: string,
  meta: shape({ touched: bool, error: string, warning: string }),
  input: objectOf(any)
};

export default SurveyField;