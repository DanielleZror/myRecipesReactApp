import axios from 'axios';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_RECIPES_PENDING,
    REQUEST_RECIPES_SUCCESS,
    REQUEST_RECIPES_FAILED,
    REQUEST_BY_ID_RECIPES_PENDING,
    REQUEST_BY_ID_RECIPES_SUCCESS,
    REQUEST_BY_ID_RECIPES_FAILED
   } from './constants'


   export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text })

   export const requestAllRecipes = () => (dispatch) => {
    dispatch({ type: REQUEST_RECIPES_PENDING })
    axios.get(`/api/all`)
      .then(res => dispatch({ type: REQUEST_RECIPES_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: REQUEST_RECIPES_FAILED, payload: error }))
  }

  export const requestByIdRecipe = () => (dispatch, id) => {
    dispatch({ type: REQUEST_BY_ID_RECIPES_PENDING })
    axios.get(`/api/byID`, {params: {
                    id: id}})
      .then(res => dispatch({ type: REQUEST_BY_ID_RECIPES_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: REQUEST_BY_ID_RECIPES_FAILED, payload: error }))
  }
