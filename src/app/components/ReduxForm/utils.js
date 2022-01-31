import i18 from 'i18next';

import { numbers, phoneLength } from './constants';

const validateCharacters = (permissedValues, value) =>
  value.split('').every(char => permissedValues.find(permissedChar => permissedChar === char));

export const required = (field, value) => {
  if (!value || typeof value === 'number')
    return {
      [field]: i18.t('SurveyForm:requiredValidation')
    };
  return null;
};

export const phoneNumber = (field, value) => {
  if (value.length < phoneLength || !validateCharacters(numbers, value))
    return { [field]: i18.t('SurveyForm:phoneValidation') };
  return null;
};

export const justCharacters = (field, value) => {
  if (value && !/([A-Z])$/i.test(value))
    return {
      [field]: i18.t('SurveyForm:charactersValidation')
    };
  return null;
};

export const validateSubmit = values => {
  let errors = {};
  Object.entries(values).forEach(inputValue => {
    errors = { ...errors, ...required(inputValue[0], inputValue[1]) };
    if (inputValue[0] === 'phone') errors = { ...errors, ...phoneNumber(inputValue[0], inputValue[1]) };
    if (inputValue[0] === 'name') errors = { ...errors, ...justCharacters(inputValue[0], inputValue[1]) };
    if (inputValue[0] === 'lastName') errors = { ...errors, ...justCharacters(inputValue[0], inputValue[1]) };
  });
  return errors;
};
