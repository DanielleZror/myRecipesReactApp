import React from 'react';
import logo from '../logo.png';
import '../styles/Navbar.css'
import { Link, Switch, Route, BrowserRouter, useHistory  } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import RecipePage from './ViewOneRecipePage/viewRecipePage'
import notFound from '../pageNotFound'
import All from './AllRecipesPage/allRecipesPage'
import Add from './AddRecipePage/addRecipePage'

const MyNavbar = () => {

    const history = useHistory();

    const logout = () => {
        sessionStorage.removeItem("userData")
        history.push('/Login')        
    }

    return (
        <BrowserRouter >
            <div>
                <Navbar className="Navbar navbar-dark" expand="lg">
                    <Navbar.Brand as={Link} to="/">
                        <img id="icon" src={logo} width="50px" height="50px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/all" >All</Nav.Link>
                            <Nav.Link as={Link} to="/add">Add</Nav.Link>
                            <Nav.Link href="#saved">Saved</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl id="searchInput" type="text" placeholder="Search in all recipes" className="mr-sm-2 submit_on_enter" />
                            <span id="userName" className="nav-link disabled">{JSON.parse(sessionStorage.userData).Name}</span>
                            <span id="logOut" className="nav-link" onClick={logout}>Logout</span>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </div>
            <Switch>
                <Route path='/All' component={All} />
                <Route path='/Add' component={Add} />
                <Route path={`/recipe/:id`} component={RecipePage}></Route>
                {/* <Route path='/Saved' component={Saved} /> */}
                {/* <Route component={notFound}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default MyNavbar