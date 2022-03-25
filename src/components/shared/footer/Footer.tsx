import React from 'react';
import {Container} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';

import './Footer.scss'

export const Footer: React.FC = () => {
    return (
        <footer>
            <Container fluid className="footer-container">
                <div className="row">
                    <div className="col-md-4 p-3">
                        <img src={require('../../../assets/navbar-logo.png')} alt="Logo"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-2 p-3">
                        <h6>Menu</h6>
                        <ul className="list-unstyled">
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                        </ul>
                    </div>
                    <div className="col-md-2 p-3">
                        <h6>My Account</h6>
                        <ul className="list-unstyled">
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-3">
                        <h6>Trending in all categories</h6>
                        <div className="d-flex">
                            <SocialIcon className="me-2" url="https://facebook.com/jaketrent" />
                            <SocialIcon className="me-2" url="https://twitter.com/jaketrent" />
                            <SocialIcon className="me-2" url="https://youtube.com/jaketrent" />
                            <SocialIcon className="me-2" url="https://instagram.com/jaketrent" />
                        </div>
                    </div>
                </div>

                <hr className="m-0" />

                <p className="text-center my-3">
                    © 2022 All right reserved for NFT Fishers
                </p>
            </Container>
        </footer>
    )
}
