import React from "react";
import { shallow } from "enzyme";
import DrinkDetailModal from "./drink-detail-modal.component";
import store from "../../reducers/store";
import configureStore from "redux-mock-store";

const setup = () => {
  const component = shallow(<DrinkDetailModal store={store} />);
  return component;
};
const buildStore = configureStore();

describe("Drink Detail Component Tests", () => {
  let drinkDetailModal;
  let store;
  const initialState = {
    drinks: [
      {
        idDrink: "11007",
        strDrink: "Margarita",
      },
    ],
  };
  beforeEach(() => {
    store = buildStore(initialState);
    drinkDetailModal = setup();
  });

  it("renders correctly", () => {
    expect(drinkDetailModal).toMatchSnapshot();
  });
});
