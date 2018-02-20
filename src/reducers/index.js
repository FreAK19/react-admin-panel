// @flow

import { combineReducers } from 'redux';
import reducer from '../routes/home/reducer';

export default combineReducers({
  data: reducer
});
