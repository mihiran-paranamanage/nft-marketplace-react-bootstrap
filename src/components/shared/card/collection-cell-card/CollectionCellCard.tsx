import React from 'react';
import {Card} from 'react-bootstrap';

import './CollectionCellCard.scss';

interface Props {
    id: string;
    name: string;
}

export const CollectionCellCard: React.FC<Props> = (props) => {
    return (
        <div className="collection-cell-card">
            <Card className="d-flex flex-row border-0 bg-transparent">
                <Card.Img className="card-img-xs" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <Card.Body className="p-0 ms-3 align-self-center">
                    {props.name}
                </Card.Body>
            </Card>
        </div>
    )
}
