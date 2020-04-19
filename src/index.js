import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { requestAllRecipes, searchRecipes, requestByIdRecipe } from './reducers'
// import { r, requestByIdRecipe } from './reducers'
import { createLogger } from 'redux-logger';

import './styles/index.css';
import './styles/animate.css'

const logger = createLogger()
const rootReducers = combineReducers({all:requestAllRecipes, search:searchRecipes, byid:requestByIdRecipe})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

