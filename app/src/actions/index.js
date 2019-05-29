import * as api from '../services/api';
import {
  GET_CATEGORIES,
  GET_POSTS,
  SET_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE,
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_ID,
  GET_COMMENTS,
  GET_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  SET_COMMENT } from "./types";

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
  const id = data.parentId;

  api.createComment(data).then(async (result) => {
    await api.getComments(id).then((result) => {
      dispatch({ type: GET_COMMENTS, comments: result })
    });

    dispatch({ type: SET_COMMENT });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleDeleteComment = (data) => (dispatch) => {
  const id = data.parentId;

  api.deleteComment(data.id).then(async (result) => {
    await api.getComments(id).then((result) => {
      dispatch({ type: GET_COMMENTS, comments: result })
    });

    dispatch({ type: DELETE_COMMENT });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetCommentById = (data) => (dispatch) => {
  api.getComment(data).then((res) => {
    dispatch({ type: GET_COMMENT, commentForEdit: res });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleEditComment = (data) => (dispatch) => {
  api.editComment(data).then((res) => {
    dispatch({ type: EDIT_COMMENT });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleVote = (id, obj, path) => (dispatch) => {
  api.votePost(id, obj, path).then((res) => {
    dispatch({ type: VOTE });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleSetPost = (data) => (dispatch) => {
  api.createPost(data).then((res) => {
    dispatch({ type: SET_POST });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleEditPost = (data) => (dispatch) => {
  api.editPost(data).then((res) => {
    dispatch({ type: EDIT_POST });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleDeletePost = (data) => (dispatch) => {
  api.deletePost(data).then((res) => {
    dispatch({ type: DELETE_POST });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};
