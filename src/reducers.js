import * as CONST from './constants'

const initialStateSearch = {
  searchField: ''
}

export const searchRecipes = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CONST.CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state
  }
}

const initialStateRecipesByUser = {
  recipes: [],
  isPending: true,
  isSucess: false,
  error: ''
}

export const requestAllRecipesByUser = (state = initialStateRecipesByUser, action = {}) => {
  switch (action.type) {
    case CONST.REQUEST_RECIPES_BY_USER_PENDING:
      return Object.assign({}, state, { isPending: true, isSucess: false, recipes: [] })
    case CONST.REQUEST_RECIPES_BY_USER_SUCCESS:
      return Object.assign({}, state, { recipes: action.payload, isPending: false, isSucess: true })
    case CONST.REQUEST_RECIPES_BY_USER_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false, isSucess: false, recipes: [] })
    default:
      return state
  }
}

const initialStateRecipeById = {
  recipe: [],
  isPending: true,
  isSucess: false,
  error: ''
}

export const requestByIdRecipe = (state = initialStateRecipeById, action) => {
  switch (action.type) {
    case CONST.REQUEST_BY_ID_RECIPES_RESET:
      return Object.assign({}, state, { isPending: false, recipe: [], isSucess: false })
    case CONST.REQUEST_BY_ID_RECIPES_PENDING:
      return Object.assign({}, state, { isPending: true, isSucess: false })
    case CONST.REQUEST_BY_ID_RECIPES_SUCCESS:
      return Object.assign({}, state, { recipe: action.payload, isPending: false, isSucess: true })
    case CONST.REQUEST_BY_ID_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false, isSucess: false, recipe: [] })
    default:
      return state
  }
}


const initialStateAddRecipe = {
  newID: '',
  isPending: false,
  isSucess: false,
  error: ''
}

export const requestAddRecipe = (state = initialStateAddRecipe, action) => {
  switch (action.type) {
    case CONST.ADD_RECIPES_RESET:
      return Object.assign({}, state, { isSucess: false, isPending: false })
    case CONST.ADD_RECIPES_PENDING:
      return Object.assign({}, state, { isSucess: false, isPending: true })
    case CONST.ADD_RECIPES_SUCCESS:
      return Object.assign({}, state, { newID: action.payload, isSucess: true, isPending: false })
    case CONST.ADD_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload, isSucess: false, isPending: false })
    default:
      return state
  }
}

const initialStateAddUser = {
  newId: '',
  isSucess: false,
  error: ''
}

export const requestAddUser = (state = initialStateAddUser, action) => {
  switch (action.type) {
    case CONST.ADD_USER_PENDING:
      return Object.assign({}, state, { isSucess: false })
    case CONST.ADD_USER_SUCCESS:
      return Object.assign({}, state, { newId: action.payload, isSucess: true })
    case CONST.ADD_USER_FAILED:
      return Object.assign({}, state, { error: action.payload, isSucess: false })
    default:
      return state
  }
}

const initialStateLikeRecipe = {
  userID: '',
  isSucess: false,
  recipeID: ''
}

export const requestLikeRecipe = (state = initialStateLikeRecipe, action) => {
  switch (action.type) {
    case CONST.LIKE_RECIPE_PENDING:
      return Object.assign({}, state, { isSucess: false })
    case CONST.LIKE_RECIPE_SUCCESS:
      return Object.assign({}, state, { newId: action.payload, isSucess: true })
    case CONST.LIKE_RECIPE_FAILED:
      return Object.assign({}, state, { error: action.payload, isSucess: false })
    default:
      return state
  }
}


const initialStateUnLikeRecipe = {
  userID: '',
  isSucess: false,
  recipeID: ''
}

export const requestUnlikeRecipe = (state = initialStateUnLikeRecipe, action) => {
  switch (action.type) {
    case CONST.UNLIKE_RECIPE_PENDING:
      return Object.assign({}, state, { isSucess: false })
    case CONST.UNLIKE_RECIPE_SUCCESS:
      return Object.assign({}, state, { newId: action.payload, isSucess: true })
    case CONST.UNLIKE_RECIPE_FAILED:
      return Object.assign({}, state, { error: action.payload, isSucess: false })
    default:
      return state
  }
}

const initialStateSavedRecipes = {
  recipes: [],
  isPending: true,
  error: ''
}

export const requestSavedRecipes = (state = initialStateSavedRecipes, action = {}) => {
  switch (action.type) {
    case CONST.REQUEST_SAVED_RECIPES_PENDING:
      return Object.assign({}, state, { isPending: true })
    case CONST.REQUEST_SAVED_RECIPES_SUCCESS:
      return Object.assign({}, state, { recipes: action.payload, isPending: false })
    case CONST.REQUEST_SAVED_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}

const initialStatePopularRecipes = {
  recipes: [],
  isPending: true,
  error: ''
}

export const requestPopularRecipes = (state = initialStatePopularRecipes, action = {}) => {
  switch (action.type) {
    case CONST.REQUEST_POPULAR_RECIPES_PENDING:
      return Object.assign({}, state, { isPending: true })
    case CONST.REQUEST_POPULAR_RECIPES_SUCCESS:
      return Object.assign({}, state, { recipes: action.payload, isPending: false })
    case CONST.REQUEST_POPULAR_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}

const initialStateRecipes = {
  recipes: [],
  isPending: true,
  error: ''
}

export const requestAllRecipes = (state = initialStateRecipes, action = {}) => {
  switch (action.type) {
    case CONST.REQUEST_RECIPES_PENDING:
      return Object.assign({}, state, { isPending: true })
    case CONST.REQUEST_RECIPES_SUCCESS:
      return Object.assign({}, state, { recipes: action.payload, isPending: false })
    case CONST.REQUEST_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}


const initialStateSearchRecipes = {
  recipes: [],
  isPending: true,
  error: ''
}

export const requestSearchRecipes = (state = initialStateSearchRecipes, action = {}) => {
  switch (action.type) {
    case CONST.REQUEST_SEARCH_PENDING:
      return Object.assign({}, state, { isPending: true })
    case CONST.REQUEST_SEARCH_SUCCESS:
      return Object.assign({}, state, { recipes: action.payload, isPending: false })
    case CONST.REQUEST_SEARCH_FAILED:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}

const initialStateDeleteRecipe = {
  isSucess: false,
  recipeID: '',
  images: []
}

export const requestDeleteRecipe = (state = initialStateDeleteRecipe, action) => {
  switch (action.type) {
    case CONST.DELETE_RECIPES_RESET:
      return Object.assign({}, state, { isSucess: false })
    case CONST.DELETE_RECIPES_PENDING:
      return Object.assign({}, state, { isSucess: false })
    case CONST.DELETE_RECIPES_SUCCESS:
      return Object.assign({}, state, { isSucess: true })
    case CONST.DELETE_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload, isSucess: false })
    default:
      return state
  }
}

const initialStateUpdateUser = {
  isSucess: false,
  recipeID: '',
  error: ''
}

export const requestUpdateRecipe = (state = initialStateUpdateUser, action) => {
  switch (action.type) {
    case CONST.UPDATE_RECIPES_RESET:
      return Object.assign({}, state, { isSucess: false })
    case CONST.UPDATE_RECIPES_PENDING:
      return Object.assign({}, state, { isSucess: false })
    case CONST.UPDATE_RECIPES_SUCCESS:
      return Object.assign({}, state, { recipeID: action.payload, isSucess: true })
    case CONST.UPDATE_RECIPES_FAILED:
      return Object.assign({}, state, { error: action.payload, isSucess: false })
    default:
      return state
  }
}

const initialStateUserById = {
  users: {}
  // data: {},
  // isPending: true,
  // isSucess: false,
  // error: ''
}

export const requestUserData = (state = initialStateUserById, action) => {
  switch (action.type) {
    case CONST.REQUEST_USER_DATA_PENDING:
      // state.users[action.userID] = { data: {}, isPending: true, isSucess: false }
      // return state
      // Object.assign(myState, myState, {users: {...myState.users, ["danielle2"]: amitPayload}})
      return Object.assign({},  { users: { ...state.users, [action.userID]: { data: {}, isPending: true, isSucess: false } } })
    case CONST.REQUEST_USER_DATA_SUCCESS:
      // state.users[action.userID] = { data: action.payload , isPending: false, isSucess: true }
      // return state
      return Object.assign({},  { users: { ...state.users, [action.userID]: { data: action.payload, isPending: false, isSucess: true } } })
    case CONST.REQUEST_USER_DATA_FAILED:
      // state.users[action.userID] = { error: action.payload, isPending: false, isSucess: false, data: {} }
      return Object.assign({},  { users: { ...state.users, [action.userID]: { error: action.payload, isPending: false, isSucess: false, data: {} } } })
    // return state
    default:
      return state
  }
}

