import axios from 'axios';
import * as CONST from './constants'

export const setSearchField = (text) => ({ type: CONST.CHANGE_SEARCH_FIELD, payload: text })

export const requestAllRecipesByUser = (userID, myUserID, dispatch) => {
  dispatch({ type: CONST.REQUEST_RECIPES_BY_USER_PENDING })
  axios.get(`/api/recipe/allByUser`, {
    params: {
      myUserID: myUserID,
      userID: userID
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_RECIPES_BY_USER_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_RECIPES_BY_USER_FAILED, payload: error }))
}

export const requestByIdRecipe = (id, userID, dispatch) => {
  dispatch({ type: CONST.REQUEST_BY_ID_RECIPES_PENDING })
  axios.get(`/api/recipe/recipeByID`, {
    params: {
      id: id, userID: userID
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_BY_ID_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_BY_ID_RECIPES_FAILED, payload: error }))
}

export const requestResetByIdRecipeState = (dispatch) => {
  dispatch({ type: CONST.REQUEST_BY_ID_RECIPES_RESET })
}

export const requestResetDeleteRecipeState = (dispatch) => {
  dispatch({ type: CONST.DELETE_RECIPES_RESET })
}

export const resetResetUpdateState = (dispatch) => {
  dispatch({ type: CONST.UPDATE_RECIPES_RESET })
}
export const requestAddRecipe = (recipe, dispatch) => {
  dispatch({ type: CONST.ADD_RECIPES_PENDING })
  axios.post(`/api/recipe/add`, recipe, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => dispatch({ type: CONST.ADD_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.ADD_RECIPES_FAILED, payload: error }))
}

export const requestDeleteRecipe = (id, images, userID, dispatch) => {
  dispatch({ type: CONST.DELETE_RECIPES_PENDING })
  axios.post(`/api/recipe/delete`, {
    id: id,
    images: images,
    userID: userID
  })
    .then(res => dispatch({ type: CONST.DELETE_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.DELETE_RECIPES_FAILED, payload: error }))
}

export const requestUpdateRecipe = (updateData, dispatch) => {
  dispatch({ type: CONST.UPDATE_RECIPES_PENDING })
  axios.post(`/api/recipe/update`, updateData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(res => dispatch({ type: CONST.UPDATE_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.UPDATE_RECIPES_FAILED, payload: error }))
}

export const requestResetAddState = (dispatch) => {
  dispatch({ type: CONST.ADD_RECIPES_RESET })
}

export const requestAddUser = (user, dispatch) => {
  dispatch({ type: CONST.ADD_USER_PENDING })
  axios.post(`/api/user/addUser`, {
    user: user
  })
    .then(res => dispatch({ type: CONST.ADD_USER_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.ADD_USER_FAILED, payload: error }))
}

export const requestLikeRecipe = (like, dispatch) => {
  dispatch({ type: CONST.LIKE_RECIPE_PENDING })
  axios.post(`/api/recipe/likeRecipe`, {
    like: like
  })
    .then(res => dispatch({ type: CONST.LIKE_RECIPE_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.LIKE_RECIPE_FAILED, payload: error }))
}

export const requestUnlikeRecipe = (unlike, dispatch) => {
  dispatch({ type: CONST.UNLIKE_RECIPE_PENDING })
  axios.post(`/api/recipe/unlikeRecipe`, {
    unlike: unlike
  })
    .then(res => dispatch({ type: CONST.UNLIKE_RECIPE_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.UNLIKE_RECIPE_FAILED, payload: error }))
}

export const requestSavedRecipes = (userID, dispatch) => {
  dispatch({ type: CONST.REQUEST_SAVED_RECIPES_PENDING })
  axios.get(`/api/recipe/allSavedByUser`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_SAVED_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_SAVED_RECIPES_FAILED, payload: error }))
}

export const requestPopularRecipes = (userID, dispatch) => {
  dispatch({ type: CONST.REQUEST_POPULAR_RECIPES_PENDING })
  axios.get(`/api/recipe/popularRecipes`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_POPULAR_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_POPULAR_RECIPES_FAILED, payload: error }))
}

export const requestAllRecipes = (userID, dispatch) => {
  dispatch({ type: CONST.REQUEST_RECIPES_PENDING })
  axios.get(`/api/recipe/allRecipes`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_RECIPES_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_RECIPES_FAILED, payload: error }))
}


export const requestSearchRecipes = (userID, search, dispatch) => {
  dispatch({ type: CONST.REQUEST_SEARCH_PENDING })
  axios.get(`/api/search`, {
    params: {
      userID: userID,
      search: search
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_SEARCH_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_SEARCH_FAILED, payload: error }))
}

export const requestSearchUsers = (search, dispatch) => {
  dispatch({ type: CONST.REQUEST_USER_SEARCH_PENDING })
  axios.get(`/api/user/search`, {
    params: {
      search: search
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_USER_SEARCH_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_USER_SEARCH_FAILED, payload: error }))
}

export const requestUserData = (userID, dispatch) => {
  dispatch({ type: CONST.REQUEST_USER_DATA_PENDING, userID: userID })
  axios.get(`/api/user`, {
    params: {
      userID: userID
    }
  })
    .then(res => dispatch({ type: CONST.REQUEST_USER_DATA_SUCCESS, userID: userID, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_USER_DATA_FAILED, userID: userID, payload: error }))
}

export const requestParams = (dispatch) => {
  dispatch({ type: CONST.REQUEST_PARAMS_PENDING })
  axios.get(`/api/params`)
    .then(res => dispatch({ type: CONST.REQUEST_PARAMS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: CONST.REQUEST_PARAMS_FAILED, payload: error }))
}