import { GET_COMMENTS } from "../actions/types";

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
    default:
      return state;
  }
};
