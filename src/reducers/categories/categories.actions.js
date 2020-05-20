import { categoryActionTypes } from "./categories.types";

export const fetchCategorieRequest = () => ({
  type: categoryActionTypes.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategorieSuccess = (json) => ({
  type: categoryActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: json,
});

export const fetchCategorieFailure = (error) => ({
  type: categoryActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategorieRequest);
    try {
      let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      let json = await response.json();
      dispatch(fetchCategorieSuccess(json));
    } catch (error) {
      dispatch(fetchCategorieFailure(error));
    }
  };
};
