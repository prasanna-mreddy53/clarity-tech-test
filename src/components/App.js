import React, { Component } from "react";
import Header from "./header/header.component";
import CategoryPage from "./category-page/category-page.component";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={CategoryPage} />
          <Route path="/categories" component={CategoryPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
