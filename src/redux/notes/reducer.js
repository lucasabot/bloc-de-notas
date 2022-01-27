import Immutable from 'seamless-immutable';
import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

export const defaultState = { notes: [] };

const reducerDescription = {
  primaryActions: [actions.GET_NOTES, actions.SAVE_NOTE, actions.MODIFY_NOTE, actions.DELETE_NOTE],
  override: {
    [actions.DELETE_IN_REDUX]: (state, action) => ({
      ...state,
      notes: state.notes.filter(note => note.id !== action.payload.id)
    }),
    [actions.SAVE_USERNAME]: (state, action) => ({ ...state, username: action.payload })
  }
};

export const reducer = createReducer(Immutable(defaultState), completeReducer(reducerDescription));
