import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { drinkDetailsActionTypes } from "./drink-details.types";
import { fetchDrinkDetails } from "./drink-details.actions";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Drink Details async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_DETAILS_SUCCESS when fetching drinks has been done", () => {
    fetchMock.getOnce(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007",
      {
        drinkDetails: {
          drinks: [
            {
              idDrink: "11007",
              strDrink: "Margarita",
            },
          ],
        },
      }
    );
    const expectedActions = [
      {
        payload: {
          drinkDetails: {
            drinks: [
              {
                idDrink: "11007",
                strDrink: "Margarita",
              },
            ],
          },
        },
        type: drinkDetailsActionTypes.FETCH_DETAILS_SUCCESS,
      },
    ];
    const store = mockStore({ drinks: [] });

    return store.dispatch(fetchDrinkDetails("11007")).then(() => {
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_DRINKS_FAILURE when fetching drinks has any error", () => {
    fetchMock.getOnce(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
      {
        drinkDetails: {
          drinks: [
            {
              idDrink: "11007",
              strDrink: "Margarita",
            },
          ],
        },
      }
    );
    const store = mockStore({ drinks: [] });

    return store.dispatch(fetchDrinkDetails("11007")).then(() => {
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()).toMatchObject([
        { type: drinkDetailsActionTypes.FETCH_DETAILS_FAILURE },
      ]);
    });
  });
});
