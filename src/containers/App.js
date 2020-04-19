import React from 'react';
// import { connect } from 'react-redux';
// import {requestAllRecipes} from '../actions'
import '../styles/App.css';
import Nav from '../components/navbar';
import {Switch, Route } from 'react-router-dom';
import All from '../components/allRecipesPage'
import Add from '../components/addRecipePage'
import Home from '../components/homePage'
import RecipePage from '../components/viewRecipePage'
import notFound from '../pageNotFound'

class App extends React.Component  {
  render() { 
    return (
      <Route>
        <div >
          <header >
            <Nav />
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/All' component={All} />     
            <Route path='/Add' component={Add} />
            <Route path={`/recipe/:id`} component={RecipePage}></Route>
            {/* <Route path='/Saved' component={Saved} /> */}
            <Route component={notFound}/>
          </Switch>
        </div>
      </Route>
    );
  }
}


export default App