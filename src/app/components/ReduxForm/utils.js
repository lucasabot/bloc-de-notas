export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

export const justCharacters = value =>
  value && !/([A-Z])$/i.test(value) ? 'Invalid name, must be just characters.' : undefined;
