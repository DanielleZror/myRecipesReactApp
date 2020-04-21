import React from 'react';
import '../styles/App.css';
import Nav from '../components/navbar';
import {Switch, Route ,BrowserRouter} from 'react-router-dom';
import All from '../components/AllRecipesPage/allRecipesPage'
import Add from '../components/AddRecipePage/addRecipePage'
import Home from '../components/HomePage/homePage'
import RecipePage from '../components/ViewOneRecipePage/viewRecipePage'
import notFound from '../pageNotFound'

class App extends React.Component  {
  render() { 
    return (
      <BrowserRouter >
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
      </BrowserRouter>
    );
  }
}


export default App