const validateCharacters = (permissedValues, value) =>
  value.split('').every(char => permissedValues.find(permissedChar => permissedChar === char));

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const phoneNumber = value =>
  value.length < 10 || !validateCharacters(numbers, value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export const justCharacters = value =>
  value && !/([A-Z])$/i.test(value) ? 'Invalid name, must be just characters.' : undefined;
