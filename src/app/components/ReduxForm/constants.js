import i18 from 'i18next';

import { required, phoneNumber, justCharacters } from './utils';
import styles from './styles.module.scss';

export const TEXTAREA_COLS = 10;
export const TEXTAREA_ROWS = 30;

export const inputsArray = [
  {
    name: 'name',
    placeholder: i18.t('Survey:nameInput'),
    type: 'text',
    validate: [required, justCharacters],
    className: styles.formInput
  },
  {
    name: 'lastName',
    placeholder: i18.t('Survey:lastNameInput'),
    type: 'text',
    validate: [required, justCharacters],
    className: styles.formInput
  },
  {
    name: 'phone',
    placeholder: i18.t('Survey:phoneInput'),
    type: 'number',
    validate: [required, phoneNumber],
    className: styles.formInput
  },
  {
    name: 'content',
    placeholder: i18.t('Survey:contentInput'),
    type: 'textarea',
    validate: [required],
    className: styles.formInput,
    rows: TEXTAREA_ROWS,
    cols: TEXTAREA_COLS
  }
];
