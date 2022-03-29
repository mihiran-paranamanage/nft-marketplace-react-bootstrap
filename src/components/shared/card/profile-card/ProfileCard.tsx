import React from 'react';
import {Card} from 'react-bootstrap'

import './ProfileCard.scss';

export const ProfileCard: React.FC = (props) => {
    return (
        <div className="profile-card">
            <Card>
                <Card.Img variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <Card.Body>
                    <div className="d-flex">
                        <Card.Img className="card-img-sm" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                        <div className="ms-auto text-end">
                            <Card.Title>@8650DF</Card.Title>
                            <Card.Text>NFTabc</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
