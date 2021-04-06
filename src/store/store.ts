import { createStore, compose } from 'redux';

import allReducers from '../reducers/allReducers';

// Set up redux devtoools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up the store
const store = createStore(allReducers, reduxDevTools());

export default store;
