import { categories } from './categories';
import { posts } from './posts';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  categories: categories,
  posts: posts,
});
