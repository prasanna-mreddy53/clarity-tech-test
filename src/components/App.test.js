import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

describe("App Component Tests", () => {
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});
