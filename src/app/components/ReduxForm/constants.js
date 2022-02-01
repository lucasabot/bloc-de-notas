import i18 from 'i18next';

import { TEXTAREA_ROWS, TEXTAREA_COLS } from 'constants/textAreaSizing';

import styles from './styles.module.scss';

export const inputsArray = [
  {
    name: 'name',
    placeholder: i18.t('Survey:nameInput'),
    type: 'text',
    className: styles.formInput
  },
  {
    name: 'lastName',
    placeholder: i18.t('Survey:lastNameInput'),
    type: 'text',
    className: styles.formInput
  },
  {
    name: 'phone',
    placeholder: i18.t('Survey:phoneInput'),
    type: 'number',
    className: styles.formInput
  },
  {
    name: 'content',
    placeholder: i18.t('Survey:contentInput'),
    type: 'textarea',
    className: styles.formInput,
    rows: TEXTAREA_ROWS,
    cols: TEXTAREA_COLS
  }
];

export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const phoneLength = 10;
