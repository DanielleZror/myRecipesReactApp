import React from 'react';
import '../styles/App.css';
import CardsList from './cardsList.js'
import axios from 'axios';
import Search from './searchInMyRecipes.js';


export default class allRecipesPage extends React.Component  {

  constructor() {
    super()
    this.state = {
      recipes: [],
      searchField: ''
    }
  }
  

  componentDidMount() {
    axios.get(`/api/all`)
      .then(res => {
        const recipes = res.data;
        this.setState({ recipes });
      })
  }

   OnChangeSearch = (searchValue) => {
    console.log(searchValue.target.value)
    this.setState({searchField: searchValue.target.value})
  }

  render() {
    const { recipes, searchField } = this.state;
    console.log('reder', recipes)
    const filteredRecipes = recipes.filter((recipe) =>{
      return (recipe.Name.toLowerCase().includes(searchField.toLowerCase()))
    })
    return (
      <div >
        <header >
        <Search onChange = {this.OnChangeSearch}/>
        <CardsList recipes ={filteredRecipes} />
        </header>
      </div>
    );
  }
}


