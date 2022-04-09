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
                <Card.Img className="card-img-dp" variant="top" src={require('../../../../assets/new-collection.png')} alt="img" />
                <div className="card-content">
                    <div className="text-center">
                        <h6 className="fw-bold">Create a new collection!</h6>
                        <PrimaryButton>Create</PrimaryButton>
                        <Link to='' className="text-decoration-none d-block" >Or add an existing contract</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
