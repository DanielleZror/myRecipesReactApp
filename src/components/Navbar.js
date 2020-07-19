import React from 'react';
import logo from '../logo.png';
import '../styles/Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import { Form, FormControl, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {

    const history = useHistory();

    const logout = () => {
        sessionStorage.removeItem("userData")
        history.push('/Login')
    }

    return (
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
    )
}

export default MyNavbar