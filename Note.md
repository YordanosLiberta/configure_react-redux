$ npx create-react-app money-manager
$npm start
=======================================
Replace your **App.js** code with the given

**Setup: Add and configure react-redux**
Step 1: Adding dependencies
$ cd money-manager
$ npx install redux react-redux

Step 2: Creating a Redux store
Create the folder src/store and place an index.js in it:(src/store/index.js :index.js name should not be changed unless you will get error.the export function in index.js will be added to root index.js later on)

Step 3: Creating our first reducer
src/store/balance/reducer.js: (this file called in src/store/index.js)

Step 4: Integrating the store with the React app
src/index.js (in this file we call store which means we call the index.js file inside of it)

N.B chrom Redux DevTools\_ installed as devtool

**_Dispatch Action: Sending data to the store_**
Step 1: Define an action creator
// src/store/balance/actions.js

Steps 2 & 3: Import useDispatch and dispatch the action
App.js

**_Reducer: Intercept action and update the redux state_**
Step 1: Add a case to our reducer
// src/store/balance/reducer.js

**_Selector: Get data from the store_**
Step 1: Create our selector function
// src/store/balance/selectors.js

Step 2: Use the selector in a component
// App.js
