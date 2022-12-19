import {combineReducers} from 'redux';

import discount from './discount';
import bonus from './bonus';

const rootReducer = combineReducers({
  discount,
  bonus
});

export default rootReducer;
