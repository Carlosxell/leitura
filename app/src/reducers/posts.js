import { GET_POSTS, SET_POST, EDIT_POST, DELETE_POST, GET_POSTS_BY_CATEGORY, GET_POSTS_BY_ID } from '../actions/types';

const initialState = {
  posts: [],
  postsByCategory: [],
  post: null
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    case SET_POST:
      return {
        ...state
      };

    case EDIT_POST:
      return {
        ...state
      };

    case DELETE_POST:
      return {
        ...state
      };

    case GET_POSTS_BY_ID:
      return {
        ...state,
        post: action.post
      };

    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        postsByCategory: action.postsByCategory
      };

    default:
      return state;
  }
};
