import React from 'react';
import {Card} from 'react-bootstrap';

import './AltLoginCard.scss';

interface Props {
    id: string;
    name: string;
    type: string;
}

export const AltLoginCard: React.FC<Props> = (props) => {
    const className = `d-flex flex-row rounded p-2 mb-3 ${props.type}`

    function logo(type: string) {
        switch(type) {
            case 'google':
                return require('../../../../assets/google-logo.png');
            case 'facebook':
                return require('../../../../assets/fb-logo.png');
            default:
                return require('../../../../assets/wallet-logo.png');
        }
    }

    return (
        <div className="alt-login-card">
            <Card className={className}>
                <Card.Img className="card-img-xs" src={logo(props.type)} alt="img" />
                <Card.Body className="p-0 align-self-center fw-bold">
                    Continue with {props.name}
                </Card.Body>
            </Card>
        </div>
    )
}
