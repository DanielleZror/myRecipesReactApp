import React from 'react';
import '../styles/App.css';
import Nav from '../components/Navbar';
import CardsList from '../components/CardsList'
import axios from 'axios';
import Search from '../components/Search';



export default class App extends React.Component  {

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
        <Nav />
        <Search onChange = {this.OnChangeSearch}/>
        <CardsList recipes ={filteredRecipes} />
        </header>
      </div>
    );
  }
}


