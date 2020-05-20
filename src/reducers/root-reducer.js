import { combineReducers } from "redux";

import categoriesReducer from "./categories/categories.reducer";
import drinksReducer from "./drinks/drinks.reducer";
import drinkDetailsReducer from "./drink-details/drink-details.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  drinks: drinksReducer,
  drinkDetails: drinkDetailsReducer,
});

export default rootReducer;
