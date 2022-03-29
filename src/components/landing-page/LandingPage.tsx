import React from 'react';
import {Card} from 'react-bootstrap'

import './LandingPage.scss';

export const LandingPage: React.FC = (props) => {
    return (
        <div className="row">
            <div className="col-6 align-self-center">
                <h4>That don't cost a fortune to mint & sell.</h4>
                <p>Join our waitlist to get early access to exclusive drops as soon as we set sail!</p>
                <div className="d-flex">
                    <button className="btn explore">Explore</button>
                    <button className="btn create">Create</button>
                </div>
            </div>
            <div className="col-6">
                <Card>
                    <Card.Img variant="top" src={require('../../assets/nft-sample.png')} alt="Nft" />
                    <Card.Body>
                        <div className="d-flex">
                            <Card.Img style={{ width: '4rem' }} variant="top" src={require('../../assets/nft-sample.png')} alt="Nft" />
                            <div className="ms-auto">
                                <Card.Title>@8650DF</Card.Title>
                                <Card.Text>NFTabc</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
