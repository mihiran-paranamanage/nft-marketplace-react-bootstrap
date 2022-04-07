import React from 'react';
import {Card, CloseButton} from 'react-bootstrap';

import './FilterCard.scss';

interface Props {
    id: string;
    name: string;
}

export const FilterCard: React.FC<Props> = (props) => {
    return (
        <div className="filter-card">
            <Card className="d-flex flex-row p-1 mb-1 me-3">
                <Card.Img className="card-img-xs" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <Card.Body className="p-0 ms-3 align-self-center">
                    {props.name}
                </Card.Body>
                <CloseButton className="align-self-center me-3" />
            </Card>
        </div>
    )
}
