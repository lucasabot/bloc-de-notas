import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';

import AnalyticsMiddleware from '../services/AnalyticsService';

import { reducer as characters } from './characters/reducer';

export const history = createBrowserHistory();

const reducers = combineReducers({
  characters,
  form: formReducer,
  router: connectRouter(history)
});

const middlewares = [routerMiddleware(history)];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Analytics Middleware ------------- */
middlewares.push(AnalyticsMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  (process.env.REACT_APP_ENV === 'local' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
