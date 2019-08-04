import { shape, string, number, arrayOf } from 'prop-types';

export const applianceType = shape({
  icon: string.isRequired,
  iconGray: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  gas: number.isRequired,
  electric: number.isRequired,
  description: string.isRequired
});

export const appliancesListType = arrayOf(applianceType);
