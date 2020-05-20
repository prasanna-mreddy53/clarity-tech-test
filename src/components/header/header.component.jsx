import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { filterDrinks } from "../../reducers/drinks/drinks.actions";

class Header extends React.Component {
  constructor() {
    super();
    this.filterList = this.filterList.bind(this);
  }

  filterList(e) {
    this.props.filterDrinks(e.target.value);
  }

  render() {
    return (
      <header className="App-header">
        <div className="head-name">
          <Navbar expand="lg" className="bg-color">
            <Navbar.Brand href="/categories">
              Clarity Software Tech Test
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav_category">
                {
                  <div className="nav_categories">
                    <h5>Categories</h5>
                    {this.props.categories &&
                      this.props.categories.categories &&
                      this.props.categories.categories.drinks &&
                      this.props.categories.categories.drinks.map(
                        (category, i) => (
                          <Nav.Link
                            key={category.strCategory}
                            href="/categories"
                          >
                            {category.strCategory}
                          </Nav.Link>
                        )
                      )}
                  </div>
                }
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search drinks in selected Category.."
                  onChange={this.filterList}
                />
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <div className="head_search text-center">
            <input
              type="text"
              placeholder="Search drinks in selected Category.."
              onChange={this.filterList}
              className="border"
            />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.drinks,
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterDrinks: (searchTerm) => dispatch(filterDrinks(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
