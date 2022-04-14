import React from 'react';
import {Container, Navbar, Nav, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './NavBar.scss';

import {PrimaryButton} from '../button/primary-button/PrimaryButton';
import {SearchInput} from '../search-input/SearchInput';

export const NavBar: React.FC = () => {
    return (
        <Navbar className="nav-bar" bg="light" expand="lg" sticky="top">
            <Container fluid>
                <div className="w-100 d-flex align-items-center">
                    <Navbar.Brand>
                        <Link className="text-decoration-none" to=''>
                            <img src={require('../../../assets/navbar-logo.png')} alt="Logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Form className="search d-flex mx-md-5">
                        <SearchInput placeholder="Search for items, collections, creators..." />
                    </Form>
                </div>
                <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
                <div className="ms-auto w-100">
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="align-items-center text-center fw-bold ms-auto" style={{ maxHeight: '240px' }} navbarScroll>
                            <Link className="nav-link" to='/explore'>Explore</Link>
                            <Link className="nav-link" to='/activity'>Activity</Link>
                            <Link className="nav-link" to='/academy'>Academy</Link>
                            <Link className="nav-link" to='/blog'>Blog</Link>
                            <Link className="nav-link" to='/sign-in'>
                                <PrimaryButton color="black">Sign in</PrimaryButton>
                            </Link>
                            <Link className="nav-link" to='/sign-up'>
                                <PrimaryButton>Create</PrimaryButton>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
