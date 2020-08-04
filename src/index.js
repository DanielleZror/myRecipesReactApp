import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory as createHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  requestAddUser, requestAddRecipe, requestAllRecipesByUser, requestByIdRecipe,
  searchRecipes, requestSavedRecipes, requestPopularRecipes, requestAllRecipes, requestSearchRecipes
} from './reducers';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import './styles/index.css';

const history = createHistory();
const logger = createLogger()
const rootReducers = combineReducers({
  allByUser: requestAllRecipesByUser,
  search: searchRecipes,
  byid: requestByIdRecipe,
  add: requestAddRecipe,
  addUser: requestAddUser,
  saved: requestSavedRecipes,
  popular: requestPopularRecipes,
  all: requestAllRecipes,
  searchAll: requestSearchRecipes
})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger, routerMiddleware(history)))

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

