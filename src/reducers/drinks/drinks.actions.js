import { drinksActionTypes } from "./drinks.types";

export const fetchDrinksRequest = () => ({
  type: drinksActionTypes.FETCH_DRINKS_REQUEST,
});

export const fetchDrinksSuccess = (json) => ({
  type: drinksActionTypes.FETCH_DRINKS_SUCCESS,
  payload: json,
});

export const filterDrinks = (searchTerm) => ({
  type: drinksActionTypes.FILTER_DRINKS,
  payload: searchTerm,
});

export const fetchDrinksFailure = (error) => ({
  type: drinksActionTypes.FETCH_DRINKS_FAILURE,
  payload: error,
});

export const setDrinkCategory = (drink) => ({
  type: drinksActionTypes.SET_DRINK_CATEGORY,
  payload: drink,
});

export const fetchDrinks = (drink) => {
  return async (dispatch) => {
    dispatch(fetchDrinksRequest);
    try {
      let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`
      );
      let json = await response.json();
      dispatch(fetchDrinksSuccess(json.drinks));
      dispatch(setDrinkCategory(drink));
    } catch (error) {
      dispatch(fetchDrinksFailure(error));
    }
  };
};
