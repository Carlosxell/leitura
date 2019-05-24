import { GET_CATEGORIES } from "../actions/actionTypes";

const initialState = {
  list: []
};

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};
