import * as api from '../services/api';
import { GET_CATEGORIES, CLICK_UPDATE_VALUE } from "./actionTypes";

export const clickButton = (value) => ({ type: CLICK_UPDATE_VALUE, newValue: value });
export const updateCategorie = (value) => ({ type: GET_CATEGORIES, list: value });

export function getCategories(dispatch) {
  api.getCategories().then(result => {
    dispatch(updateCategorie(result))
  });
}
