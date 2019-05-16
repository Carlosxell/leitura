import { GET_CATEGORIES } from '../actions/actionTypes';

const initialState = {
  allCategories: []
};

export const Categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, allCategories: action.allCategories };

    default:
      return state;
  }
};
