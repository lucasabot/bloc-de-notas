import { createSelector } from 'reselect';

export const loadingSelector = createSelector(
  state => state.notes.notesLoading,
  state => state.notes.saveNoteLoading,
  state => state.notes.deleteNoteLoading,
  (notesLoading, saveNoteLoading, deleteNoteLoading) => notesLoading || saveNoteLoading || deleteNoteLoading
);
