import * as api from '../services/api';
import { GET_CATEGORIES, GET_POSTS, GET_POSTS_BY_CATEGORY } from "./actionTypes";

// export const clickButton = (value) => ({ type: CLICK_UPDATE_VALUE, newValue: value });

export const handleGetCategory = () => (dispatch) => {
  // dispatch(showLoading());
  api.getCategories().then((result) => {
    dispatch({ type: GET_CATEGORIES, list: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetPosts = () => (dispatch) => {
  api.getPosts().then((result) => {
    dispatch({ type: GET_POSTS, posts: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetPostsByCategory = (data) => (dispatch) => {
  api.getPostsByCategory(data).then((result) => {
    dispatch({ type: GET_POSTS_BY_CATEGORY, postsByCategory: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};
