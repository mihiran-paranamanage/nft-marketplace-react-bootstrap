import React from 'react';
import {Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faDiamond} from '@fortawesome/free-solid-svg-icons'

import './ListCard.scss';

export const ListCard: React.FC = (props) => {
    return (
        <Card className="list-card">
            <Card.Body>
                <Card.Img className="mb-3" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <div className="d-flex fw-bold">
                    <div>
                        <div>NFT name</div>
                        <div>Collection name</div>
                        <div>
                            <FontAwesomeIcon icon={faHeart} size="lg" />
                            <span className="ms-2">3</span>
                        </div>
                    </div>
                    <div className="ms-auto text-end">
                        <div>Price status</div>
                        <div>
                            <FontAwesomeIcon icon={faDiamond} size="xs" />
                            <span className="ms-2">0.17</span>
                        </div>
                        <div className="owner">Owner</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
