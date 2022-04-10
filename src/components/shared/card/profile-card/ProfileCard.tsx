import React from 'react';
import {Card} from 'react-bootstrap'

import './ProfileCard.scss';

export const ProfileCard: React.FC = (props) => {
    return (
        <div className="profile-card">
            <Card>
                <Card.Img className="mb-3" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <Card.Body>
                    <div className="d-flex">
                        <Card.Img className="card-img-sm rounded-circle" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                        <div className="ms-auto text-end">
                            <div className="fw-bold h2">@8650DF</div>
                            <div className="fw-bold name h3">NFTabc</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
