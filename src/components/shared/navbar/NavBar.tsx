import React from 'react';
import {Container, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'

import './NavBar.scss';

import {PrimaryButton} from '../button/primary-button/PrimaryButton';

export const NavBar: React.FC = () => {
    return (
        <Navbar className="nav-bar" bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand className="mx-5">
                    <img src={require('../../../assets/navbar-logo.png')} alt="Logo"/>
                </Navbar.Brand>
                <Form className="search d-flex">
                    <BsSearch className="searchIcon"/>
                    <FormControl
                        className="searchInput"
                        type="search"
                        placeholder="Search for items, collections, creators..."
                        aria-label="Search"/>
                </Form>
                <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
                <div className="mx-5 ms-lg-auto">
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="align-items-center" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href='/explore'>Explore</Nav.Link>
                            <Nav.Link href='/activity'>Activity</Nav.Link>
                            <Nav.Link href='/academy'>Academy</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                            <Nav.Link href='/sign-in'>
                                <PrimaryButton color="black">Sign in</PrimaryButton>
                            </Nav.Link>
                            <Nav.Link href='/sign-up'>
                                <PrimaryButton>Create</PrimaryButton>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
