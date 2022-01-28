import { createSelector } from 'reselect';

export const loadingSelector = createSelector(
  state => state.notes.notesLoading || state.notes.saveNoteLoading || state.notes.deleteNoteLoading,
  deleteNoteLoading => deleteNoteLoading
);
