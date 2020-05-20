import React from "react";
import { shallow } from "enzyme";
import CategoryPage from "./category-page.component";
import store from "../../reducers/store";
import configureStore from "redux-mock-store";

const setup = (props) => {
  const component = shallow(<CategoryPage {...props} store={store} />);
  return component;
};
const buildStore = configureStore();

describe("Category Page Component Tests", () => {
  let categoryPage;
  let store;
  const initialState = {
    categories: {
      drinks: [
        {
          strCategory: "Ordinary Drink",
        },
      ],
    },
  };
  const props = {
    categories: [initialState],
  };
  beforeEach(() => {
    store = buildStore(initialState);
    categoryPage = setup(props);
  });

  it("renders correctly", () => {
    expect(categoryPage).toMatchSnapshot();
  });
});
