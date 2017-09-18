import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import movie from "./movie";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  movie: movie,
});
