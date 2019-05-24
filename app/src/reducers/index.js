import { clickReducer } from './clickReducer';
import { categories } from './categories';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  categories: categories,
});
