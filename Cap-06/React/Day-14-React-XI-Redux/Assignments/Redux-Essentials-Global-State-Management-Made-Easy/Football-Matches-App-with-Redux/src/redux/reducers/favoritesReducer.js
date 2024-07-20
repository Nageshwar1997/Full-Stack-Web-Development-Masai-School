const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((match) => match.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
