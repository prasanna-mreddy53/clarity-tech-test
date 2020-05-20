import { categoryActionTypes } from "./categories.types";

const INITIAL_STATE = {
  loading: false,
  categories: [],
  error: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryActionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case categoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
