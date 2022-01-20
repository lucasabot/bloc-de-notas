import { createSelector } from 'reselect';

export const getNotesSelector = createSelector(
  state => state.notes,
  items => items
);
