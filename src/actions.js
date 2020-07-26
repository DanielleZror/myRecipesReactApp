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
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED, 
  LIKE_RECIPE_PENDING,
  LIKE_RECIPE_SUCCESS,
  LIKE_RECIPE_FAILED,
  UNLIKE_RECIPE_PENDING,
  UNLIKE_RECIPE_SUCCESS,
  UNLIKE_RECIPE_FAILED,
  REQUEST_SAVED_RECIPES_PENDING,
  REQUEST_SAVED_RECIPES_SUCCESS,
  REQUEST_SAVED_RECIPES_FAILED,
  REQUEST_FAVORITE_RECIPES_PENDING,
  REQUEST_FAVORITE_RECIPES_SUCCESS,
  REQUEST_FAVORITE_RECIPES_FAILED
} from './constants'

export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text })

export const requestAllRecipes = (userID, dispatch) => {
  dispatch({ type: REQUEST_RECIPES_PENDING })
  axios.get(`/api/recipe/allByUser`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: REQUEST_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: REQUEST_RECIPES_FAILED, payload: error }))
}

export const requestByIdRecipe = (id, userID, dispatch) => {
  dispatch({ type: REQUEST_BY_ID_RECIPES_PENDING })
  axios.get(`/api/recipe/recipeByID`, {
    params: {
      id: id, userID: userID
    }
  })
    .then(res => dispatch({ type: REQUEST_BY_ID_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: REQUEST_BY_ID_RECIPES_FAILED, payload: error }))
}

export const requestAddRecipe = (recipe, dispatch) => {
  dispatch({ type: ADD_RECIPES_PENDING })
  axios.post(`/api/recipe/add`, {
    recipe: recipe
  })
    .then(res => dispatch({ type: ADD_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: ADD_RECIPES_FAILED, payload: error }))
}

export const requestResetAddState = (dispatch) => {
  dispatch({ type: ADD_RECIPES_PENDING })
}

export const requestAddUser = (user, dispatch) => {
  dispatch({ type: ADD_USER_PENDING })
  axios.post(`/api/user/addUser`, {
    user: user
  })
    .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: ADD_USER_FAILED, payload: error }))
}

export const requestLikeRecipe = (like, dispatch) => {
  dispatch({ type: LIKE_RECIPE_PENDING })
  axios.post(`/api/recipe/likeRecipe`, {
    like: like
  })
    .then(res => dispatch({ type: LIKE_RECIPE_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: LIKE_RECIPE_FAILED, payload: error }))
}

export const requestUnlikeRecipe = (unlike, dispatch) => {
  dispatch({ type: UNLIKE_RECIPE_PENDING })
  axios.post(`/api/recipe/unlikeRecipe`, {
    unlike: unlike
  })
    .then(res => dispatch({ type: UNLIKE_RECIPE_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: UNLIKE_RECIPE_FAILED, payload: error }))
}

export const requestSavedRecipes = (userID, dispatch) => {
  dispatch({ type: REQUEST_SAVED_RECIPES_PENDING })
  axios.get(`/api/recipe/allSavedByUser`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: REQUEST_SAVED_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: REQUEST_SAVED_RECIPES_FAILED, payload: error }))
}

export const requestFavoriteRecipes = (userID, dispatch) => {
  dispatch({ type: REQUEST_FAVORITE_RECIPES_PENDING })
  axios.get(`/api/recipe/favoriteRecipes`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: REQUEST_FAVORITE_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: REQUEST_FAVORITE_RECIPES_FAILED, payload: error }))
}