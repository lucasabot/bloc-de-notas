import { createTypes } from 'redux-recompose';

import { handleAutoId } from 'utils/functionUtils';

export const actions = createTypes(['SAVE_NOTE', 'DELETE_NOTE', 'MODIFY_NOTE', 'SAVE_USERNAME'], '@@NOTES');

export const notesCreators = {
  saveNote: payload => dispatch =>
    dispatch({
      type: actions.SAVE_NOTE,
      payload: Object.assign({}, payload, { id: handleAutoId() }),
      target: 'notes'
    }),
  deleteNote: payload => dispatch => dispatch({ type: actions.DELETE_NOTE, payload, target: 'notes' }),
  modifyNote: payload => dispatch => dispatch({ type: actions.MODIFY_NOTE, payload, target: 'notes' }),
  saveUsername: payload => dispatch => dispatch({ type: actions.SAVE_USERNAME, payload, target: 'username' })
};

export default notesCreators;
