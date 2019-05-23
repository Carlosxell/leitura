import { clickReducer } from './clickReducer';
import { otherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Index = combineReducers({
  clickState: clickReducer,
  otherState: otherReducer
});
