import { GET_POSTS } from '../actions/actionTypes';

const initialState = {
  posts: []
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
};
