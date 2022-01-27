import Immutable from 'seamless-immutable';
import { createReducer } from 'redux-recompose';

import { actions } from './actions';

export const defaultState = { notes: [] };

const reducerDescription = {
  [actions.SAVE_NOTE]: (state, action) => {
    console.log({ state });
    return state;
  },
  [actions.DELETE_NOTE]: (state, action) => state.filter(note => action.payload.id !== note.id),
  [actions.MODIFY_NOTE]: (state, action) =>
    state.map(note => {
      if (note.id === action.payload.id) {
        return Object.assign({ id: note.id }, action.payload);
      }
      return note;
    }),
  [actions.SAVE_USERNAME]: (state, action) => {
    console.log({ state });
    return { username: action.payload };
  }
};

export const reducer = createReducer(Immutable(defaultState), reducerDescription);
