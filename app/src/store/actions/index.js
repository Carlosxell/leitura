import { CLICK_UPDATE_VALUE, GET_CATEGORIES } from './actionTypes';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const getCategories = (value) => {
  return (dispatch) => dispatch({ type: GET_CATEGORIES, allCategories: value });
};
