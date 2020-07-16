import React from 'react';
import Nav from './navbar';
import { Link, Switch, Route, HashRouter, useHistory } from 'react-router-dom';
import RecipePage from './ViewOneRecipePage/viewRecipePage';
import All from './AllRecipesPage/allRecipesPage';
import Add from './AddRecipePage/addRecipePage';
import Home from './HomePage/homePage';

export class Dashboard extends React.Component {

    render() {
        return (
            <HashRouter >
                <header >
                    <Nav />
                </header>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/All' component={All} />
                    <Route path='/Add' component={Add} />
                    <Route path={`/recipe/:id`} component={RecipePage}></Route>
                    {/* <Route path='/Saved' component={Saved} /> */}
                </Switch>
            </HashRouter>
        )
    }
}

export default Dashboard;

