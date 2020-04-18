import React from 'react';
import '../styles/App.css';
import Nav from '../components/Navbar';
import CardsList from '../components/CardsList'
import axios from 'axios';


const filteredRobot=[{id:1,
                name: 'danielle',
                user: 'something'},
                {id:2,
                  name: 'danielle',
                  user: 'something'}]
export default class App extends React.Component  {
  state = {
    recipes: []
  }

  componentDidMount() {
    axios.get(`/api/all`)
      .then(res => {
        const recipes = res.data;
        this.setState({ recipes });
        console.log(recipes)
      })
  }

  render() {
    return (
      <div >
        <header >
        <Nav />
        <CardsList recipes ={this.state.recipes} />
        </header>
      </div>
    );
  }
}


