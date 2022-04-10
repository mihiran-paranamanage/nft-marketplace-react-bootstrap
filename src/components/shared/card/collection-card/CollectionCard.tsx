import React from 'react';

import './CollectionCard.scss';

import {Card} from 'react-bootstrap';

export const CollectionCard: React.FC = (props) => {
    return (
        <Card className="collection-card">
            <Card.Body>
                <Card.Img className="card-img-cover" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <Card.Img className="card-img-dp rounded-circle" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <div className="card-content">
                    <div className="text-center mb-3">
                        <h5 className="fw-bold mb-1">Lorem Ipsum Sit Dalet<br/>By <span className="user-name">{'Abcdefg'}</span></h5>
                    </div>
                    <p>Join our waitlist to get early access to exclusive drops as soon as we set sail!</p>
                </div>
            </Card.Body>
        </Card>
    )
}
