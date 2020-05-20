export const filterDrinks = (drinks, searchTerm) => {
  let updatedDrinks = drinks;
  return updatedDrinks.filter((drink) => {
    return drink.strDrink.toLowerCase().search(searchTerm.toLowerCase()) !== -1;
  });
};
