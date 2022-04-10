import React from 'react';
import {Card} from 'react-bootstrap';

import './LiveCard.scss';

import {GhostButton} from '../../button/ghost-button/GhostButton';

export const LiveCard: React.FC = (props) => {
    return (
        <Card className="live-card">
            <Card.Body>
                <Card.Title className="text-muted my-3"><span>- </span>Exclusive Drops</Card.Title>
                <Card.Title className="mb-3">Lorem Ipsum Sit Dalet</Card.Title>
                <Card.Text className="mb-5">Join our waitlist to get early access to
                    exclusive drops as soon as we set sail!
                    Join our waitlist to get early access to
                    exclusive drops as soon as we set sail!</Card.Text>
                <GhostButton width="30%">Live</GhostButton>
            </Card.Body>
        </Card>
    )
}
