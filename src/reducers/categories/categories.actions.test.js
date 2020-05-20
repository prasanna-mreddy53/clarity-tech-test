import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { categoryActionTypes } from "./categories.types";
import { fetchCategories } from "./categories.actions";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Categories async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_CATEGORIES_SUCCESS when fetching categories has been done", () => {
    fetchMock.getOnce(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
      {
        categories: {
          categories: {
            drinks: [
              {
                strCategory: "Ordinary Drink",
              },
            ],
          },
        },
      }
    );
    const expectedActions = [
      {
        payload: {
          categories: {
            categories: { drinks: [{ strCategory: "Ordinary Drink" }] },
          },
        },
        type: categoryActionTypes.FETCH_CATEGORIES_SUCCESS,
      },
    ];
    const store = mockStore({ categories: [] });

    return store.dispatch(fetchCategories()).then(() => {
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
