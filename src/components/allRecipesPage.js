import React from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import {setSearchField, requestAllRecipes} from '../actions'
import CardsList from './cardsList.js'
import axios from 'axios';
import Search from './searchInMyRecipes.js';

const mapStateToProps = (state) => {
  return {
    recipes: state.requestAllRecipes.recipes,
    isPending: state.requestAllRecipes.isPending,
    searchField: state.searchRecipes.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps", dispatch)
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
    console.log("before", this.props)
    const { recipes, searchField,onSearchChange, isPending } = this.props;
    console.log('reder', recipes)
    const filteredRecipes = recipes.filter((recipe) =>{
      return (recipe.Name.toLowerCase().includes(searchField.toLowerCase()))
    })
    return (
      <div >
        <header >
        <Search onChange = {onSearchChange}/>
        {isPending ? <h1>loading</h1> :
        <CardsList recipes ={filteredRecipes} />
        }
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(allRecipesPage)

