import { clickReducer } from './clickReducer';
import { otherReducer } from './otherReducer';
import { getCategoryReducer } from './categorieReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  otherState: otherReducer,
  getCategories: getCategoryReducer
});
