import reducer from "./drink-details.reducer";
import { drinkDetailsActionTypes } from "./drink-details.types";

describe("Drink Details reducer", () => {
  it("Drink Details should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should return the initial state with default values", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      drinkDetails: [],
      error: "",
    });
  });

  it("should match FETCH_DETAILS_REQUEST action", () => {
    expect(
      reducer([], {
        type: drinkDetailsActionTypes.FETCH_DETAILS_REQUEST,
      })
    ).toEqual({
      loading: true,
    });
  });

  it("should match FETCH_DETAILS_SUCCESS action", () => {
    expect(
      reducer(
        { drinkDetails: [], loading: false, error: "" },
        {
          type: drinkDetailsActionTypes.FETCH_DETAILS_SUCCESS,
          drinkDetails: { drinks: [{ strDrink: "Margarita" }] },
        }
      )
    ).toEqual({
      drinkDetails: [],
      loading: false,
      error: "",
      drinkDetails: undefined,
    });
  });

  it("Drink Details FETCH_DETAILS_SUCCESS action", () => {
    expect(
      reducer(
        {
          drinkDetails: { drinks: [{ strDrink: "Margarita" }] },
        },
        drinkDetailsActionTypes.FETCH_DETAILS_SUCCESS
      )
    ).toMatchSnapshot();
  });

  it("should match FETCH_DETAILS_FAILURE action", () => {
    expect(
      reducer([{ drinkDetails: [], loading: false, error: "" }], {
        type: drinkDetailsActionTypes.FETCH_DETAILS_FAILURE,
        error: "could not load details",
      })
    ).toMatchSnapshot();
  });
});
