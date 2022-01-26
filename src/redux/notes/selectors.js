import { createSelector } from 'reselect';

export const loadingSelector = createSelector(
  store => store.notes.deleteNoteLoading,
  deleteNoteLoading => deleteNoteLoading
);
