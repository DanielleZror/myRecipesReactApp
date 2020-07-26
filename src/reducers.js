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
    REQUEST_POPULAR_RECIPES_PENDING,
    REQUEST_POPULAR_RECIPES_SUCCESS,
    REQUEST_POPULAR_RECIPES_FAILED
   } from './constants'

   const initialStateSearch = {
    searchField: ''
  }
  
  export const searchRecipes = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state, {searchField: action.payload})
      default:
        return state
    }
  }

const initialStateRecipes = {
    recipes: [],
    isPending: true,
    error: ''
  }
  
  export const requestAllRecipes = (state=initialStateRecipes, action={}) => {
    switch (action.type) {
      case REQUEST_RECIPES_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipes: action.payload, isPending: false})
      case REQUEST_RECIPES_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }

  const initialStateRecipeById = {
    recipe: [],
    isPending: true,
    error: ''
  }
  
  export const requestByIdRecipe = (state=initialStateRecipeById, action) => {
    switch (action.type) {
      case REQUEST_BY_ID_RECIPES_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_BY_ID_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipe: action.payload, isPending: false})
      case REQUEST_BY_ID_RECIPES_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }


  const initialStateAddRecipe = {
    newID: '',
    isSucess: false,
    error: ''
  }
  
  export const requestAddRecipe = (state=initialStateAddRecipe, action) => {
    switch (action.type) {
      case ADD_RECIPES_PENDING:
        return Object.assign({}, state, {isSucess: false})
      case ADD_RECIPES_SUCCESS:
        return Object.assign({}, state, {newID: action.payload, isSucess: true})
      case ADD_RECIPES_FAILED:
        return Object.assign({}, state, {error: action.payload, isSucess: false})
      default:
        return state
    }
  }

  const initialStateAddUser = {
    newId: '',
    isSucess: false,
    error: ''
  }
  
  export const requestAddUser = (state=initialStateAddUser, action) => {
    switch (action.type) {
      case ADD_USER_PENDING:
        return Object.assign({}, state, {isSucess: false})
      case ADD_USER_SUCCESS:
        return Object.assign({}, state, {newId: action.payload, isSucess: true})
      case ADD_USER_FAILED:
        return Object.assign({}, state, {error: action.payload, isSucess: false})
      default:
        return state
    }
  }

  const initialStateLikeRecipe = {
    userID: '',
    isSucess: false,
    recipeID: ''
  }
  
  export const requestLikeRecipe = (state=initialStateLikeRecipe, action) => {
    switch (action.type) {
      case LIKE_RECIPE_PENDING:
        return Object.assign({}, state, {isSucess: false})
      case LIKE_RECIPE_SUCCESS:
        return Object.assign({}, state, {newId: action.payload, isSucess: true})
      case LIKE_RECIPE_FAILED:
        return Object.assign({}, state, {error: action.payload, isSucess: false})
      default:
        return state
    }
  }

  
  const initialStateUnLikeRecipe = {
    userID: '',
    isSucess: false,
    recipeID: ''
  }
  
  export const requestUnlikeRecipe = (state=initialStateUnLikeRecipe, action) => {
    switch (action.type) {
      case UNLIKE_RECIPE_PENDING:
        return Object.assign({}, state, {isSucess: false})
      case UNLIKE_RECIPE_SUCCESS:
        return Object.assign({}, state, {newId: action.payload, isSucess: true})
      case UNLIKE_RECIPE_FAILED:
        return Object.assign({}, state, {error: action.payload, isSucess: false})
      default:
        return state
    }
  }

  const initialStateSavedRecipes = {
    recipes: [],
    isPending: true,
    error: ''
  }
  
  export const requestSavedRecipes = (state=initialStateSavedRecipes, action={}) => {
    switch (action.type) {
      case REQUEST_SAVED_RECIPES_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_SAVED_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipes: action.payload, isPending: false})
      case REQUEST_SAVED_RECIPES_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }

  const initialStatePopularRecipes = {
    recipes: [],
    isPending: true,
    error: ''
  }
  
  export const requestPopularRecipes = (state=initialStatePopularRecipes, action={}) => {
    switch (action.type) {
      case REQUEST_POPULAR_RECIPES_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_POPULAR_RECIPES_SUCCESS:
        return Object.assign({}, state, {recipes: action.payload, isPending: false})
      case REQUEST_POPULAR_RECIPES_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }