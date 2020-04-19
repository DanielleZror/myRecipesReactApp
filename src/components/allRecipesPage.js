import React from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import {setSearchField, requestAllRecipes} from '../actions'
import CardsList from './cardsList.js'
import axios from 'axios';
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
    onRequestAllRecipes: () => dispatch(requestAllRecipes())
  }
}


class allRecipesPage extends React.Component  {
  componentDidMount() {
    this.props.onRequestAllRecipes();
  }

  render() {
    const { recipes, searchField,onSearchChange, isPending } = this.props;
    const filteredRecipes = recipes.filter((recipe) =>{
      return (recipe.Name.toLowerCase().includes(searchField.toLowerCase()))
    })
    return (
      <div >
        <Search onChange = {onSearchChange}/>
        {isPending ? <h1>loading</h1> :
        <CardsList recipes ={filteredRecipes} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

