import { drinkDetailsActionTypes } from "./drink-details.types";

const INITIAL_STATE = {
  loading: false,
  drinkDetails: [],
  error: "",
};

const drinkDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case drinkDetailsActionTypes.FETCH_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case drinkDetailsActionTypes.FETCH_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case drinkDetailsActionTypes.FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        drinkDetails: action.payload,
      };
    default:
      return state;
  }
};

export default drinkDetailsReducer;
