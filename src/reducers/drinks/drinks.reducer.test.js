import reducer from "./drinks.reducer";
import { drinksActionTypes } from "./drinks.types";

describe("Drinks reducer", () => {
  it("Drinks should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should return the initial state with default values", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      drinks: [],
      filteredDrinks: [],
      error: "",
      drinkCategory: "Ordinary Drink",
    });
  });

  it("should match FETCH_DRINKS_REQUEST action", () => {
    expect(
      reducer([], {
        type: drinksActionTypes.FETCH_DRINKS_REQUEST,
      })
    ).toEqual({
      loading: true,
    });
  });

  it("should match FETCH_DRINKS_SUCCESS action", () => {
    expect(
      reducer(
        { drinks: [], loading: false, error: "" },
        {
          type: drinksActionTypes.FETCH_DRINKS_SUCCESS,
          drinks: { drinks: [{ strDrink: "Margarita" }] },
        }
      )
    ).toEqual({
      drinks: [],
      loading: false,
      error: "",
      drinks: undefined,
    });
  });

  it("Drinks FETCH_DRINKS_SUCCESS action", () => {
    expect(
      reducer(
        {
          drinks: { drinks: [{ strDrink: "Margarita" }] },
        },
        drinksActionTypes.FETCH_DRINKS_SUCCESS
      )
    ).toMatchSnapshot();
  });

  it("should match FETCH_DRINKS_FAILURE action", () => {
    expect(
      reducer([{ drinks: [], loading: false, error: "" }], {
        type: drinksActionTypes.FETCH_DRINKS_FAILURE,
        error: "could not load drinks",
      })
    ).toMatchSnapshot();
  });
});
