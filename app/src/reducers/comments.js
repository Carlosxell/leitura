import { GET_COMMENTS, SET_COMMENTS } from "../actions/types";

const initialState = {
  comments: []
};

export const comments = (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };

    case SET_COMMENTS:
      return {
        ...state
      };

    default:
      return state;
  }
};
