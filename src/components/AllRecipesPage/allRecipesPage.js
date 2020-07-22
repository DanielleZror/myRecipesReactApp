import React from 'react';
import { connect } from 'react-redux';
import {setSearchField, requestAllRecipes, requestLikeRecipe, requestUnlikeRecipe} from '../../actions'
import CardsList from './cardsListAllPage.js'
import Search from './searchInMyRecipes.js';

const mapStateToProps = (state) => {
  return {
    recipes: state.all.recipes,
    isPending: state.all.isPending,
    searchField: state.search.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestAllRecipes: (userID) => requestAllRecipes(userID, dispatch),
    onRequestLikeRecipe: (like) => requestLikeRecipe(like, dispatch),
    onRequestUnlikeRecipe: (unlike) => requestUnlikeRecipe(unlike, dispatch)
  }
}

class allRecipesPage extends React.Component  {
  componentDidMount() {
    this.props.onRequestAllRecipes(JSON.parse(sessionStorage.userData).userID);
  }

  render() {
    const { recipes, searchField,onSearchChange, isPending, onRequestLikeRecipe, onRequestUnlikeRecipe } = this.props;
    const filteredRecipes = !searchField ? recipes : recipes.filter((recipe) =>{
      return (recipe.Name.toLowerCase().includes(searchField.toLowerCase()))
    })
    return (
      <div >
        <Search onChange = {onSearchChange}/>
        {isPending ? <h1>loading</h1> :
        <CardsList recipes ={filteredRecipes} onLike={onRequestLikeRecipe} onUnlike={onRequestUnlikeRecipe}/>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

