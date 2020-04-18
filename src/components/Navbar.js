import React from 'react';
import logo from '../logo.png';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
    return (
        <Navbar className="Navbar navbar-dark" expand="lg">
            <Navbar.Brand href="#home">
                    <img id="icon" src={logo} width="50px" height="50px" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#all">All</Nav.Link>
                    <Nav.Link href="#add">Add</Nav.Link>
                </Nav> 
                <Form inline>
                    <FormControl id="searchInput" type="text" placeholder="Search" className="mr-sm-2 submit_on_enter" />
                    <a id="userName" className="nav-link disabled">danielle</a>
                </Form>
            </Navbar.Collapse>  
        </Navbar>
    )
}

export default MyNavbar