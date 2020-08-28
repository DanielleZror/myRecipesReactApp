import React from 'react';
import logo from '../../logo.png';
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import Search from '../Search/search'
import { Form, Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {

    const history = useHistory();

    const logout = () => {
        sessionStorage.removeItem("userData")
        history.push('/Login')
    }

    return (
        <div>
            <Navbar collapseOnSelect className="navbar-dark" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img id="icon" className="nav-icon" src={logo} width="50px" height="50px" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey="/">
                        <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to="/all">All</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to="/add">Add</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to="/saved">Saved</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Search />
                        <Link id="userName" to={`/user/${JSON.parse(sessionStorage.userData).userID}`} >
                            <span className="nav-link disabled">{JSON.parse(sessionStorage.userData).Name}</span>
                        </Link>
                        <span id="logOut" className="nav-link" onClick={logout}>Logout</span>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar