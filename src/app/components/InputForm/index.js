import React from 'react';
import { func, string, arrayOf } from 'prop-types';
import { Field } from 'redux-form';

import SurveyField from './components/SurveyField';

const InputForm = ({ name, type, placeholder, validate, warn, className }) => (
  <Field
    name={name}
    type={type}
    component={SurveyField}
    validate={validate}
    warn={warn}
    className={className}
    placeholder={placeholder}
  />
);

InputForm.propTypes = {
  name: string,
  placeholder: string,
  validate: arrayOf(func),
  warn: func,
  className: string,
  type: string
};

export default InputForm;
