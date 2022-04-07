import React from 'react';
import {Container, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'

import './NavBar.scss';

import {PrimaryButton} from '../button/primary-button/PrimaryButton';
import {Link} from 'react-router-dom';
import {SearchInput} from '../search-input/SearchInput';

export const NavBar: React.FC = () => {
    return (
        <Navbar className="nav-bar" bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand className="mx-5">
                    <Link className="text-decoration-none" to=''>
                        <img src={require('../../../assets/navbar-logo.png')} alt="Logo"/>
                    </Link>
                </Navbar.Brand>
                <Form className="search d-flex">
                    <SearchInput placeholder="Search for items, collections, creators..." />
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
