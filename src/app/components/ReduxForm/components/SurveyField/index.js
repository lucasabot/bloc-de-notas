import React from 'react';
import { bool, objectOf, any, string, shape } from 'prop-types';

import { TEXTAREA_COLS, TEXTAREA_ROWS } from 'constants/textAreaSizing';

import { ALTERNATIVE_INPUT_TYPES } from './constants';
import styles from './styles.module.scss';

const SurveyField = ({ input, type, meta: { touched, error, warning }, className, placeholder }) => {
  const {
    textArea: { type: altType }
  } = ALTERNATIVE_INPUT_TYPES;

  return (
    <div className={styles.inputForm}>
      {type === altType ? (
        <textarea
          {...input}
          cols={TEXTAREA_ROWS}
          rows={TEXTAREA_COLS}
          className={`${className} ${touched && (error || warning) && styles.inputFormError}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          className={`${className} ${touched && (error || warning) && styles.inputFormError}`}
        />
      )}
      {touched &&
        ((error && <span className={styles.errorMessage}>{error}</span>) ||
          (warning && <span className={styles.errorMessage}>{warning}</span>))}
    </div>
  );
};

SurveyField.propTypes = {
  placeholder: string,
  component: string,
  className: string,
  type: string,
  meta: shape({ touched: bool, error: string, warning: string }),
  input: objectOf(any)
};

export default SurveyField;
