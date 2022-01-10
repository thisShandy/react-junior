const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action ) => {
  switch (action.type) {
    default:
      return state;
  };
};