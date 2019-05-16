import { clickReducer } from './clickReducer';
import { Categories } from './categories';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  getCategories: Categories
});
