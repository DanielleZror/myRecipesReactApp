import axios from 'axios';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_RECIPES_PENDING,
    REQUEST_RECIPES_SUCCESS,
    REQUEST_RECIPES_FAILED,
    REQUEST_BY_ID_RECIPES_PENDING,
    REQUEST_BY_ID_RECIPES_SUCCESS,
    REQUEST_BY_ID_RECIPES_FAILED,
    ADD_RECIPES_PENDING,
    ADD_RECIPES_SUCCESS,
    ADD_RECIPES_FAILED,
    ADD_RECIPES_TRIGER,
    LOGIN_SUCCESS,
    LOGIN_FAILED
   } from './constants'


   export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text })

   export const requestAllRecipes = () => (dispatch) => {
    dispatch({ type: REQUEST_RECIPES_PENDING })
    axios.get(`/api/all`)
      .then(res => dispatch({ type: REQUEST_RECIPES_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: REQUEST_RECIPES_FAILED, payload: error }))
  }

  export const requestByIdRecipe = (id) => (dispatch) => {
    dispatch({ type: REQUEST_BY_ID_RECIPES_PENDING })
    axios.get(`/api/byID`, {params: {
                    id: id}})
      .then(res => dispatch({ type: REQUEST_BY_ID_RECIPES_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: REQUEST_BY_ID_RECIPES_FAILED, payload: error }))
  }

  export const requestAddRecipe = (recipe) => (dispatch) =>{
    dispatch({ type: ADD_RECIPES_PENDING })
    axios.post(`/api/add`,{
      recipe: recipe})
      .then(res => dispatch({ type: ADD_RECIPES_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: ADD_RECIPES_FAILED, payload: error }))
  }


  // export const requestLogin =()=> (dispatch) => {
  //  axios.post(`/api/add`,{
  //     recipe: recipe})
  //     .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
  //     .catch(error => dispatch({ type: LOGIN_FAILED, payload: error }))
  // }


  