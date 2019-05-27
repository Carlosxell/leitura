import { GET_COMMENT, GET_COMMENTS, SET_COMMENT } from "../actions/types";

const initialState = {
  comments: [],
  commentForEdit: null
};

export const comments = (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };

    case GET_COMMENT:
      return {
        ...state,
        commentForEdit: action.commentForEdit
      };

    case SET_COMMENT:
      return {
        ...state
      };

    default:
      return state;
  }
};
