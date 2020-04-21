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
    ADD_RECIPES_TRIGER
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
    newId: '',
    isSucess: false,
    error: ''
  }
  
  export const requestAddRecipe = (state=initialStateAddRecipe, action) => {
    console.log('action add', action)
    switch (action.type) {
      case ADD_RECIPES_PENDING:
        return Object.assign({}, state, {isSucess: false})
      case ADD_RECIPES_SUCCESS:
        return Object.assign({}, state, {newId: action.payload, isSucess: true})
      case ADD_RECIPES_FAILED:
        return Object.assign({}, state, {error: action.payload, isSucess: false})
      default:
        return state
    }
  }

//   const initialStateTrigerAddRecipe = {
//     recipe: []
//   }
  
// export const setRecipeToAdd = (state=initialStateTrigerAddRecipe, action) => {
//   console.log('action set', action)
//   switch (action.type) {
//     case ADD_RECIPES_TRIGER:
//       return Object.assign({}, state, {recipe: action.payload})
//     default:
//       return state
//   }
// }