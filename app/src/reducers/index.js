import { categories } from './categories';
import { comments } from './comments';
import { posts } from './posts';
import { votes } from './votes';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  categories: categories,
  comments: comments,
  posts: posts,
  votes: votes,
});
