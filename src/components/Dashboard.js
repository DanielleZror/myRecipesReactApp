import React from 'react';
import Nav from './Navbar/navbar';
import { Switch, Route, HashRouter } from 'react-router-dom';
import RecipePage from './ViewOneRecipePage/viewRecipePage';
import SearchPage from './Search/searchResultPage';
import All from './AllRecipesPage/allRecipesPage';
import Add from './AddRecipePage/addRecipePage';
import Home from './HomePage/homePage';
import Saved from './SavedRecipesPage/savedRecipesPage'
import User from './UserPage/UserDataPage'

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
                    <Route path={`/edit/:id`} component={Add}></Route>
                    <Route path={`/search/:search`} component={SearchPage}></Route>
                    <Route path='/Saved' component={Saved} />
                    <Route path={`/user/:id`} component={User}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default Dashboard;

