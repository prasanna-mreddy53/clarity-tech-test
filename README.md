## Clarity Software Technical Test

I have consumed the below public API to develop the application:

List cocktails and their ingredients using TheCocktailDB

homepage: https://www.thecocktaildb.com/api.php

APIs Used:

1. List all categories: https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
2. Fetch drinks by drink Category:
   https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink

3. Lookup drink details by drink Id:
   https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

## Running application

1. Once you cloned the repository, Run the below command to install node modules

### `npm install`

2. Once node modules are installed successfully then run the below command to launch the application in http://localhost:3000 url from project directory

### `npm start`

Which will open the home page and it has below functionalities implemented
a) it will load Categories on the left hand side
b) it will load drinks from Selected Category ( by Default 'Ordinary Drink')
c) Selction of any category, corresponding drinks list will be updated
d) Mouse over of any Drink, will have Quick View option to see more details about the drink
e) Once we click Quick View option then Modal popup will be displayed with more details about the drink
f) Also have search functionality in the header component. We should be able to search drinks from the selected drink category(left hand side)

3. Running Unit Tests

### `npm test`

I have written unit tests using Jest and enzyme

4. Production build

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
