import React from 'react';
import logo from '../logo.png';
import '../styles/Navbar.css'
import {Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
    return (
        <Route>
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
                            <span id="userName" className="nav-link disabled">danielle</span>
                        </Form>
                    </Navbar.Collapse>  
                </Navbar>
            </div>
        </Route>
    )
}

export default MyNavbar