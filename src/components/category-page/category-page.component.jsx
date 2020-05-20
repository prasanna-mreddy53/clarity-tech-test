import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../reducers/categories/categories.actions";
import { CardColumns, Container } from "react-bootstrap";
import "./category-page.styles.scss";
import DrinkList from "../drink-list/drink-list.component";
import { fetchDrinks } from "../../reducers/drinks/drinks.actions";
import { setDrinkCategory } from "../../reducers/drinks/drinks.actions";

class CategoryPage extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
    const drink = "Ordinary Drink";
    this.props.fetchDrinks(drink);
  }
  render() {
    return this.props.categories.loading ? (
      <h2>Loading</h2>
    ) : this.props.categories.error ? (
      <h2>{this.props.categories.error}</h2>
    ) : (
      <main>
        <Container fluid className="d-flex">
          <aside className="categories  mt-3">
            <div className="cat_names border p-2 h-auto">
              <h5>
                <b>Categories</b>
              </h5>
              <ul data-test="categories">
                {this.props.categories.categories &&
                  this.props.categories.categories.drinks &&
                  this.props.categories.categories.drinks.map((drink) => (
                    <li
                      className={`category_name p-2 ${
                        this.props.drinks.drinkCategory === drink.strCategory
                          ? "category_name_selected"
                          : ""
                      }`}
                      key={drink.strCategory}
                      onClick={() => this.props.fetchDrinks(drink.strCategory)}
                    >
                      {drink.strCategory}
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
          <section className="drinks ml-auto">
            <CardColumns>
              {this.props.drinks.loading && <h2>Loading</h2>}
              {this.props.drinks.filteredDrinks &&
                this.props.drinks.filteredDrinks.map((drink) => (
                  <DrinkList
                    key={drink.idDrink}
                    drink={drink}
                    drinkCategory={this.props.drinks.drinkCategory}
                  />
                ))}
            </CardColumns>
          </section>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    drinks: state.drinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchDrinks: (drink) => dispatch(fetchDrinks(drink)),
    setDrinkCategory: (drink) => dispatch(setDrinkCategory(drink)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
