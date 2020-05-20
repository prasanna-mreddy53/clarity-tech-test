import React from "react";
import { shallow } from "enzyme";
import DrinkList from "./drink-list.component";

const setup = (props) => {
  const component = shallow(<DrinkList {...props} />);
  return component;
};

describe("Drinks Component Tests", () => {
  const props = {
    drink: {
      strDrink: "410 Gone",
      idDrink: "13581",
      strDrinkThumb:
        "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
    },
  };

  let drinks = setup(props);

  it("renders correctly", () => {
    expect(drinks).toMatchSnapshot();
  });
});
