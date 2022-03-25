import React from 'react';
import {Container, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'

import './NavBar.scss'

export const NavBar: React.FC = () => {
    const searchPlaceholder = 'Search for items, collections, creators...';
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid className="navbar-container">
                <Navbar.Brand>
                    <img src={require('../../../assets/navbar-logo.png')} alt="Logo"/>
                </Navbar.Brand>
                <Form className="search d-flex">
                    <BsSearch className="searchIcon"/>
                    <FormControl
                        className="searchInput"
                        type="search"
                        placeholder={searchPlaceholder}
                        aria-label="Search"/>
                </Form>
                <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
                <div className="ms-lg-auto navigations">
                    <Navbar.Collapse id="navbarScroll">
                        <Nav style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="navLink" href='/explore'>Explore</Nav.Link>
                            <Nav.Link className="navLink" href='/activity'>Activity</Nav.Link>
                            <Nav.Link className="navLink" href='/academy'>Academy</Nav.Link>
                            <Nav.Link className="navLink" href='/blog'>Blog</Nav.Link>
                            <Nav.Link className="navLink signIn" href='/sign-in'>Sign in</Nav.Link>
                            <Nav.Link className="navLink signOut" href='/sign-up'>Create</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
