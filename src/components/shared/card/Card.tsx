import React from 'react';

import './Card.scss'

export const Card: React.FC = (props) => {
    return (
        <div className="card">{props.children}</div>
    );
}
