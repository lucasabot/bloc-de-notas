import { createTypes, completeTypes } from 'redux-recompose';
import i18 from 'i18next';

import NotesService from 'services/NotesService';

export const actions = createTypes(
  completeTypes(['GET_NOTES', 'SAVE_NOTE', 'DELETE_NOTE', 'MODIFY_NOTE'], ['DELETE_IN_REDUX']),
  '@@NOTES'
);

const privateActionsCreators = {
  getNotesSuccess: payload => ({ type: actions.GET_NOTES_SUCCESS, payload, target: 'notes' }),
  getNotesFailure: () => ({ type: actions.GET_NOTES_FAILURE, target: 'notes' }),
  saveNoteSuccess: payload => ({ type: actions.SAVE_NOTE_SUCCESS, payload, target: 'saveNote' }),
  saveNoteFailure: () => ({ type: actions.SAVE_NOTE_FAILURE, target: 'saveNote' }),
  modifyNoteSuccess: payload => ({ type: actions.MODIFY_NOTE_SUCCESS, payload, target: 'modifiyNote' }),
  modifyNoteFailure: () => ({ type: actions.MODIFY_NOTE_FAILURE, target: 'modifiyNote' }),
  deleteNoteSuccess: payload => ({ type: actions.DELETE_NOTE_SUCCESS, payload, target: 'deleteNote' }),
  deleteNoteFailure: () => ({ type: actions.DELETE_NOTE_FAILURE, target: 'deleteNote' }),
  deleteInRedux: payload => ({ type: actions.DELETE_IN_REDUX, payload })
};

export const actionCreators = {
  getNotes: () => async dispatch => {
    dispatch({ type: actions.GET_NOTES, target: 'notes' });
    const response = await NotesService.getNotes();
    if (response.ok) {
      dispatch(privateActionsCreators.getNotesSuccess(response.data));
    } else {
      dispatch(privateActionsCreators.getNotesFailure(response.error));
    }
  },
  saveNote: payload => async dispatch => {
    dispatch({
      type: actions.SAVE_NOTE,
      target: 'saveNote'
    });
    const response = await NotesService.createNote(payload);
    const { addToast } = payload;
    if (response.ok) {
      dispatch(privateActionsCreators.saveNoteSuccess(response));
      addToast(i18.t('DefaultMessages:saveNoteSuccess', { title: payload.title }));
    } else {
      dispatch(privateActionsCreators.saveNoteFailure(response.error));
      addToast(i18.t('DefaultMessages:saveNoteFailure', { title: payload.title, error: response.error }), {
        style: 'danger'
      });
    }
  },
  deleteNote: payload => async dispatch => {
    dispatch({ type: actions.DELETE_NOTE, payload, target: 'deleteNote' });
    const response = await NotesService.deleteNote(payload.id);
    const { addToast } = payload;
    if (response.ok) {
      dispatch(privateActionsCreators.deleteNoteSuccess(response.data));
      dispatch(privateActionsCreators.deleteInRedux(payload));
      addToast(i18.t('DefaultMessages:deleteNoteSuccess', { title: payload.title }));
    } else {
      dispatch(privateActionsCreators.deleteNoteFailure(response.error));
      addToast(i18.t('DefaultMessages:deleteNoteFailure', { title: payload.title, error: response.error }), {
        style: 'danger'
      });
    }
  },
  modifyNote: payload => async dispatch => {
    dispatch({ type: actions.MODIFY_NOTE, payload, target: 'modifyNote' });
    const response = await NotesService.modifyNote(payload);
    const { addToast } = payload;
    if (response.ok) {
      dispatch(privateActionsCreators.modifyNoteSuccess(response.data));
      addToast(i18.t('DefaultMessages:saveNoteSuccess', { title: payload.title }));
    } else {
      dispatch(privateActionsCreators.modifyNotesFailure(response.error));
      addToast(i18.t('DefaultMessages:saveNoteFailure', { title: payload.title, error: response.error }), {
        style: 'danger'
      });
    }
  }
};

export default actionCreators;
