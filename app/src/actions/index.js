import * as api from '../services/api';
import {
  GET_CATEGORIES,
  GET_POSTS,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_ID,
  GET_COMMENTS,
  SET_COMMENTS } from "./types";

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

export const handleGetPostsById = (data) => (dispatch) => {
  api.getPost(data).then((result) => {
    dispatch({ type: GET_POSTS_BY_ID, post: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetPostsByCategory = (data) => (dispatch) => {
  api.getPostsByCategory(data).then((result) => {
    dispatch({ type: GET_POSTS_BY_CATEGORY, postsByCategory: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetComments = (data) => (dispatch) => {
  api.getComments(data).then((result) => {
    dispatch({ type: GET_COMMENTS, comments: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleSetComment = (data) => (dispatch) => {
  api.createComment(data).then(async (result) => {
    dispatch({ type: SET_COMMENTS, comments: result });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};
