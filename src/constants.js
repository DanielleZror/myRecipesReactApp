module.exports = {
    CHANGE_SEARCH_FIELD: 'CHANGE_SEARCH_FIELD',

    REQUEST_RECIPES_BY_USER_PENDING: 'REQUEST_RECIPES_BY_USER_PENDING',
    REQUEST_RECIPES_BY_USER_SUCCESS: 'REQUEST_RECIPES_BY_USER_SUCCESS',
    REQUEST_RECIPES_BY_USER_FAILED: 'REQUEST_RECIPES_BY_USER_FAILED',

    REQUEST_BY_ID_RECIPES_PENDING: 'REQUEST_BY_ID_RECIPES_PENDING',
    REQUEST_BY_ID_RECIPES_SUCCESS: 'REQUEST_BY_ID_RECIPES_SUCCESS',
    REQUEST_BY_ID_RECIPES_FAILED: 'REQUEST_BY_ID_RECIPES_FAILED',
    REQUEST_BY_ID_RECIPES_RESET: 'REQUEST_BY_ID_RECIPES_RESET',

    ADD_RECIPES_PENDING: 'ADD_RECIPES_PENDING',
    ADD_RECIPES_SUCCESS: 'ADD_RECIPES_SUCCESS',
    ADD_RECIPES_FAILED: 'ADD_RECIPES_FAILED',
    ADD_RECIPES_RESET: 'ADD_RECIPES_RESET',

    UPDATE_RECIPES_PENDING: 'UPDATE_RECIPES_PENDING',
    UPDATE_RECIPES_SUCCESS: 'UPDATE_RECIPES_SUCCESS',
    UPDATE_RECIPES_FAILED: 'UPDATE_RECIPES_FAILED',
    UPDATE_RECIPES_RESET: 'UPDATE_RECIPES_RESET',

    DELETE_RECIPES_PENDING: 'DELETE_RECIPES_PENDING',
    DELETE_RECIPES_SUCCESS: 'DELETE_RECIPES_SUCCESS',
    DELETE_RECIPES_FAILED: 'DELETE_RECIPES_FAILED',
    DELETE_RECIPES_RESET: 'DELETE_RECIPES_RESET',

    ADD_USER_PENDING: 'ADD_USER_PENDING',
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    ADD_USER_FAILED: 'ADD_USER_FAILED',

    LIKE_RECIPE_PENDING: 'LIKE_RECIPE_PENDING',
    LIKE_RECIPE_SUCCESS: 'LIKE_RECIPE_SUCCESS',
    LIKE_RECIPE_FAILED: 'LIKE_RECIPE_FAILED',

    UNLIKE_RECIPE_PENDING: 'UNLIKE_RECIPE_PENDING',
    UNLIKE_RECIPE_SUCCESS: 'UNLIKE_RECIPE_SUCCESS',
    UNLIKE_RECIPE_FAILED: 'UNLIKE_RECIPE_FAILED',

    REQUEST_SAVED_RECIPES_PENDING: 'REQUEST_SAVED_RECIPES_PENDING',
    REQUEST_SAVED_RECIPES_SUCCESS: 'REQUEST_SAVED_RECIPES_SUCCESS',
    REQUEST_SAVED_RECIPES_FAILED: 'REQUEST_SAVED_RECIPES_FAILED',

    REQUEST_POPULAR_RECIPES_PENDING: 'REQUEST_POPULAR_RECIPES_PENDING',
    REQUEST_POPULAR_RECIPES_SUCCESS: 'REQUEST_POPULAR_RECIPES_SUCCESS',
    REQUEST_POPULAR_RECIPES_FAILED: 'REQUEST_POPULAR_RECIPES_FAILED',

    POPULAR_RECIPES_NUMBER: 3,
    RECIPES_COLLECTION: "recipes",
    USERS_COLLECTION: "users",
    SAVED_COLLECTION: "savedRecipes",
    PARAMS_COLLECTION: "params",

    REQUEST_RECIPES_PENDING: 'REQUEST_RECIPES_PENDING',
    REQUEST_RECIPES_SUCCESS: 'REQUEST_RECIPES_SUCCESS',
    REQUEST_RECIPES_FAILED: 'REQUEST_RECIPES_FAILED',

    REQUEST_SEARCH_PENDING: 'REQUEST_SEARCH_PENDING',
    REQUEST_SEARCH_SUCCESS: 'REQUEST_SEARCH_SUCCESS',
    REQUEST_SEARCH_FAILED: 'REQUEST_SEARCH_FAILED',

    REQUEST_USER_SEARCH_PENDING: 'REQUEST_USER_SEARCH_PENDING',
    REQUEST_USER_SEARCH_SUCCESS: 'REQUEST_USER_SEARCH_SUCCESS',
    REQUEST_USER_SEARCH_FAILED: 'REQUEST_USER_SEARCH_FAILED',

    REQUEST_USER_DATA_PENDING: 'REQUEST_USER_DATA_PENDING',
    REQUEST_USER_DATA_SUCCESS: 'REQUEST_USER_DATA_SUCCESS',
    REQUEST_USER_DATA_FAILED: 'REQUEST_USER_DATA_FAILED',

    REQUEST_PARAMS_PENDING: 'REQUEST_PARAMS_PENDING',
    REQUEST_PARAMS_SUCCESS: 'REQUEST_PARAMS_SUCCESS',
    REQUEST_PARAMS_FAILED: 'REQUEST_PARAMS_FAILED',

    STATIC_IMAGES_PATH: '/images/',
    MAX_FILES: 3,

    EDIT_MODE: "edit",
    ADD_MODE: "add",
    ROOT: {
        '& label.Mui-focused': {
            color: '#CB8EB2',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#CB8EB2',
        },
        '& .MuiTextField-root': {
            marginRight: '10px',
        },
        '& .MuiInputBase-input': {
            fontFamily: ['Quicksand', 'sans-serif'],
        },
        '& .MuiInputLabel-shrink': {
            transform: 'translate(0, 8.5px) scale(0.75)',
        },
        '& .MuiFormLabel-root': {
            fontFamily: ['Quicksand', 'sans-serif'],
        }
    }

}
