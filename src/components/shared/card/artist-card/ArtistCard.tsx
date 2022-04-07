import React from 'react';
import {Card} from 'react-bootstrap';

import './ArtistCard.scss';

interface Props {
    id: string;
    name: string;
}

export const ArtistCard: React.FC<Props> = (props) => {
    return (
        <div className="artist-card">
            <Card className="d-flex flex-row p-1 mb-1 border-0 bg-transparent">
                <Card.Img className="card-img-xs" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <Card.Body className="p-0 ms-3 align-self-center">
                    {props.name}
                </Card.Body>
            </Card>
        </div>
    )
}
