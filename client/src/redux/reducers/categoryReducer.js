import { LOAD_DATA } from "../types"

const initialState = {

}

export const categoryReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  };
};