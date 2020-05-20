import reducer from "./categories.reducer";
import { categoryActionTypes } from "./categories.types";

describe("Categories reducer", () => {
  it("Categories should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should return the initial state with default values", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      categories: [],
      error: "",
    });
  });

  it("should match FETCH_CATEGORIES_REQUEST action", () => {
    expect(
      reducer([], {
        type: categoryActionTypes.FETCH_CATEGORIES_REQUEST,
      })
    ).toEqual({
      loading: true,
    });
  });

  it("should match FETCH_CATEGORIES_SUCCESS action", () => {
    expect(
      reducer(
        { categories: [], loading: false, error: "" },
        {
          type: categoryActionTypes.FETCH_CATEGORIES_SUCCESS,
          categories: { drinks: [{ strCategory: "Ordinary Drink" }] },
        }
      )
    ).toEqual({
      categories: [],
      loading: false,
      error: "",
      categories: undefined,
    });
  });

  it("Categories FETCH_CATEGORIES_SUCCESS action", () => {
    expect(
      reducer(
        {
          categories: { drinks: [{ strCategory: "Ordinary Drink" }] },
        },
        categoryActionTypes.FETCH_CATEGORIES_SUCCESS
      )
    ).toMatchSnapshot();
  });

  it("should match FETCH_CATEGORIES_FAILURE action", () => {
    expect(
      reducer([{ categories: [], loading: false, error: "" }], {
        type: categoryActionTypes.FETCH_CATEGORIES_FAILURE,
        error: "could not load categories",
      })
    ).toMatchSnapshot();
  });
});
