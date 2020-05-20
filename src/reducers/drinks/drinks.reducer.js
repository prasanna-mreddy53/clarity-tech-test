import { drinksActionTypes } from "./drinks.types";
import { filterDrinks } from "./drinks.utils";

const INITIAL_STATE = {
  loading: false,
  drinks: [],
  filteredDrinks: [],
  error: "",
  drinkCategory: "Ordinary Drink",
};

const drinksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case drinksActionTypes.FETCH_DRINKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drinksActionTypes.FETCH_DRINKS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case drinksActionTypes.FETCH_DRINKS_SUCCESS:
      return {
        ...state,
        drinks: action.payload,
        filteredDrinks: action.payload,
      };
    case drinksActionTypes.FILTER_DRINKS:
      return {
        ...state,
        filteredDrinks: filterDrinks(state.drinks, action.payload),
      };
    case drinksActionTypes.SET_DRINK_CATEGORY:
      return {
        ...state,
        drinkCategory: action.payload,
      };
    default:
      return state;
  }
};

export default drinksReducer;
