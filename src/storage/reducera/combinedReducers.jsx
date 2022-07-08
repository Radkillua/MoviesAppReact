import { combineReducers } from "redux";
import favouriteReducer from "./FavoriteMovie";
import languageReducer from "./languages";
import movieListReducer from "./MoviesReducer";

export default combineReducers({
    lang: languageReducer,
    fav: favouriteReducer,
    listOfMovie : movieListReducer

})