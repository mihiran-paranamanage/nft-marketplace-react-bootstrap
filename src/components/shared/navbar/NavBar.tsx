import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap'

import './NavBar.scss'

export const NavBar: React.FC = () => {
    const searchPlaceholder = 'Serch for items, collections, creators...';
    return (
        <header className="header">
            <img className="logo" src={require('../../../assets/navbar-logo.png')} alt="Logo"/>
            <Form className="w-180 ml-2">
                <Form.Group controlId="search">
                    <Form.Control className="w-180" type="text" placeholder={searchPlaceholder} />
                </Form.Group>
            </Form>
            <nav className="navigations">
                <ul>
                    <li>
                        <Link to='/explore'>Explore</Link>
                    </li>
                    <li>
                        <Link to='/activity'>Activity</Link>
                    </li>
                    <li>
                        <Link to='/academy'>Academy</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/sign-in'>Sign in</Link>
                    </li>
                    <li>
                        <Link to='/sign-up'>Create</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
