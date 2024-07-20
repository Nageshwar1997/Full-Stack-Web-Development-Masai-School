import { combineReducers } from "redux";
import matchesReducer from "./matchesReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  matches: matchesReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
