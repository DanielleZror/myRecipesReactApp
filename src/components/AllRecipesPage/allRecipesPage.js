import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestAllRecipesByUser, requestLikeRecipe, requestUnlikeRecipe } from '../../actions'
import CardsList from '../CardsList/CardsList.js'
import Search from './searchInMyRecipes.js';
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/notFound'

const mapStateToProps = (state) => {
  return {
    recipes: state.allByUser.recipes,
    isPending: state.allByUser.isPending,
    searchField: state.search.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestAllRecipesByUser: (userID, myUserID) => requestAllRecipesByUser(userID, myUserID, dispatch),
    onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
    onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
  }
}

class allRecipesPage extends React.Component {
  componentDidMount() {
    this.props.onRequestAllRecipesByUser(JSON.parse(sessionStorage.userData).userID, JSON.parse(sessionStorage.userData).userID);
  }

  render() {
    const { recipes, searchField, onSearchChange, isPending, onRequestLikeRecipe, onRequestUnlikeRecipe } = this.props;
    const filteredRecipes = !searchField ? recipes : recipes.filter((recipe) => {
      return (recipe.Name.toLowerCase().includes(searchField.toLowerCase()))
    })
    return (
      <div >
        {isPending ? <Loading /> : recipes.length === 0 ? <NotFound /> :
          <>
            <Search onChange={onSearchChange} />
            <CardsList recipes={filteredRecipes} nameClass="list-all-page" onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe} />
          </>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

