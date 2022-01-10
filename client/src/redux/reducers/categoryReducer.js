import { SET_CURRENT_CATEGORY } from "../types";
import { SET_CURRENCY } from "../types";

const initialState = {
  currentCategory: "",
  currency: {},
};

export const categoryReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.name,
      }
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }
    default:
      return state;
  };
};