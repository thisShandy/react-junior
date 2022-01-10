import { SET_CURRENT_CATEGORY } from "./types";
import { SET_CURRENCY } from "./types";

export const setCurrentCategory = payload => {
  return {
    type: SET_CURRENT_CATEGORY,
    payload
  };
};

export const setCurrency = payload => {
  return {
    type: SET_CURRENCY,
    payload
  };
};