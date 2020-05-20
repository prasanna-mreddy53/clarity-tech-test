import { drinkDetailsActionTypes } from "./drink-details.types";

export const fetchDetailsRequest = () => ({
  type: drinkDetailsActionTypes.FETCH_DETAILS_REQUEST,
});

export const fetchDetailsSuccess = (json) => ({
  type: drinkDetailsActionTypes.FETCH_DETAILS_SUCCESS,
  payload: json,
});

export const fetchDetailsFailure = (error) => ({
  type: drinkDetailsActionTypes.FETCH_DETAILS_FAILURE,
  payload: error,
});

export const fetchDrinkDetails = (drinkId) => {
  return async (dispatch) => {
    dispatch(fetchDetailsRequest);
    try {
      let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      );
      let json = await response.json();
      dispatch(fetchDetailsSuccess(json));
    } catch (error) {
      dispatch(fetchDetailsFailure(error));
    }
  };
};
