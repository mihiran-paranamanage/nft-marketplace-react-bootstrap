import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './NewCollectionCard.scss';

import {PrimaryButton} from '../../button/primary-button/PrimaryButton';

export const NewCollectionCard: React.FC = (props) => {
    return (
        <Card className="new-collection-card">
            <Card.Body>
                <div className="card-cover"/>
                <Card.Img className="card-img-dp rounded-circle" variant="top" src={require('../../../../assets/new-collection.png')} alt="img" />
                <div className="card-content">
                    <div className="text-center">
                        <h5 className="fw-bold">Create a new collection!</h5>
                        <PrimaryButton width="30%">Create</PrimaryButton>
                        <Link to='' className="text-decoration-none d-block mt-2">Or add an existing contract</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
