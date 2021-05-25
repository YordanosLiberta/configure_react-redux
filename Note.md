$ npx create-react-app money-manager
$npm start
replace App.js with other code
=======================================
Setup: Add and configure react-redux
$ npm install redux react-redux
Create the folder src/store and place an index.js in it:
Replace your App.js code
Step 1: Adding dependencies
$ cd money-manager
$ yarn add redux react-redux
Step 2: Creating a Redux store
Create the folder src/store and place an index.js in it:
Step 3: Creating our first reducer
src/store/balance/reducer.js:
Step 4: Integrating the store with the React app
src/index.js
**_this is installed for crom Redux DevTools_**
===================================================
Dispatch Action: Sending data to the store
Step 1: Define an action creator
// src/store/balance/actions.js
Steps 2 & 3: Import useDispatch and dispatch the action
App.js
======================================================
Reducer: Intercept action and update the redux state
Step 1: Add a case to our reducer
// src/store/balance/reducer.js
