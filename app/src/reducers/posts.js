import { GET_POSTS, GET_POSTS_BY_CATEGORY } from '../actions/actionTypes';

const initialState = {
  posts: [],
  postsByCategory: []
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
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
