import React from "react";
import { shallow } from "enzyme";
import Header from "./header.component";
import store from "../../reducers/store";

const setup = () => {
  const component = shallow(<Header store={store} />);
  return component;
};

describe("Header Component Tests", () => {
  let header;
  beforeEach(() => {
    header = setup();
  });

  const thunk = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    return next(action);
  };

  const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn(),
    };
    const next = jest.fn();

    const invoke = (action) => thunk(store)(next)(action);

    return { store, next, invoke };
  };

  it("renders correctly", () => {
    expect(header).toMatchSnapshot();
  });

  it("header component passes dispatch and getState", () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch("filterDrinks");
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith("filterDrinks");
    expect(store.getState).toHaveBeenCalled();
  });
});
