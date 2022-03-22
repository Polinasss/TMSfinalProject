import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import initialState from './initialState';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [thunkMiddleware];
const enhancers = [devtoolsExtension()];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  composedEnhancers
);
