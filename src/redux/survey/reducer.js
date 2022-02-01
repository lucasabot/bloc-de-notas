import Immutable from 'seamless-immutable';
import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

export const defaultState = {};

const reducerDescription = {
  primaryActions: [actions.SAVE_SURVEY],
  override: {
    [actions.SAVE_USERNAME]: (state, action) => ({ ...state, username: action.payload })
  }
};

export const reducer = createReducer(Immutable(defaultState), completeReducer(reducerDescription));
