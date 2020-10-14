import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

class NavbarT extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg" className="Navbar-navbar mb-5">
                <Navbar.Brand href="/"><img className="Navbar-img" src="https://trello-attachments.s3.amazonaws.com/5ee24c86a36ad553774495fd/5ee2508e8bb9d55b1d8372de/8754c88ebb21f006040cc5669f8a15fe/logo256.png" alt="Team Tomato"></img>Team Tomato</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink exact to="/solutions" activeClassName="Navbar-active" className="Navbar-navlink">Our Solutions</NavLink>
                        <NavLink exact to="/contributions" activeClassName="Navbar-active" className="Navbar-navlink">Contributions</NavLink>
                        <NavLink exact to="/articles" activeClassName="Navbar-active" className="Navbar-navlink">Our Articles</NavLink>
                        <NavLink exact to="/about" activeClassName="Navbar-active" className="Navbar-navlink">About Us</NavLink>
                        <NavLink exact to="/contact" activeClassName="Navbar-active" className="Navbar-navlink">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarT;