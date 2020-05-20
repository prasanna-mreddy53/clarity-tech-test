import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { drinksActionTypes } from "./drinks.types";
import { fetchDrinks } from "./drinks.actions";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Drinks async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_DRINKS_SUCCESS when fetching drinks has been done", () => {
    fetchMock.getOnce(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink",
      {
        drinks: {
          drinks: [
            {
              strDrink: "410 Gone",
              idDrink: "13581",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
            },
          ],
        },
      }
    );
    const expectedActions = [
      {
        payload: {
          drinks: [
            {
              strDrink: "410 Gone",
              idDrink: "13581",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
            },
          ],
        },
        type: drinksActionTypes.FETCH_DRINKS_SUCCESS,
      },
      {
        payload: "Ordinary Drink",
        type: drinksActionTypes.SET_DRINK_CATEGORY,
      },
    ];
    const store = mockStore({ drinks: [] });

    return store.dispatch(fetchDrinks("Ordinary Drink")).then(() => {
      expect(store.getActions().length).toBe(2);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_DRINKS_FAILURE when fetching drinks has any error", () => {
    fetchMock.getOnce(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
      {
        drinks: {
          drinks: [
            {
              strDrink: "155 Belmont",
              idDrink: "15346",
              strDrinkThumb:
                "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
            },
          ],
        },
      }
    );
    const expectedActions = [
      {
        payload: `[Error: fetch-mock: No fallback response defined for GET to https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=error]`,
        type: drinksActionTypes.FETCH_DRINKS_FAILURE,
      },
    ];
    const store = mockStore({ drinks: [] });

    return store.dispatch(fetchDrinks("error")).then(() => {
      expect(store.getActions().length).toBe(1);
      expect(store.getActions()).toMatchObject([
        { type: drinksActionTypes.FETCH_DRINKS_FAILURE },
      ]);
    });
  });
});
