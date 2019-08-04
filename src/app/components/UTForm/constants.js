import { UTTextInput, UTLabel } from '@widergy/energy-ui';
import { FIELD_TEXT, FIELD_LABEL } from '@widergy/utilitygo-forms-web/dist/constants/fieldTypes';

export const DefaultMessages = {
  required: 'Campo requerido!',
  invalidFormat: 'Formato inválido'
};
export const Components = {
  [FIELD_LABEL]: UTLabel,
  [FIELD_TEXT]: UTTextInput
};
