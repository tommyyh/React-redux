import { combineReducers } from 'redux';

import counterReducer from './counterReducer';

const allReducer = combineReducers({
  counter: counterReducer,
});

export default allReducer;
