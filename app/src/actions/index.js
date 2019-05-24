import * as api from '../services/api';
import { GET_CATEGORIES, CLICK_UPDATE_VALUE } from "./actionTypes";

export const clickButton = (value) => ({ type: CLICK_UPDATE_VALUE, newValue: value });

export const handleGetCategory = () => (dispatch) => {
  // dispatch(showLoading());
  api.getCategories().then((result) => {
    dispatch({ type: GET_CATEGORIES, list: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};
