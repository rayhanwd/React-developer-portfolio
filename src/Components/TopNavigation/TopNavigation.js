import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand><NavLink className="dev-logo" to="/">rayhan</NavLink><span className="special-spinner"></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/home">Home</NavLink>
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/about">About</NavLink>
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/service">Service</NavLink>
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/resume">Resume</NavLink>
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/portfolio">Portfolio</NavLink>
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/blog">Blog</NavLink>
                        <NavLink activeStyle={{color:'#28A745'}} className="ml-5 text-uppercase" to="/contact">Contact me</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default TopNavigation;