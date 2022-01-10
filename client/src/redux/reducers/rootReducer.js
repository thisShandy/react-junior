import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
});