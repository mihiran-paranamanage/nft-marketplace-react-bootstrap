import React from 'react';

import './PrimaryButton.scss';

export interface ButtonProps {
    color?: string;
    width?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
    const className = `primary-btn ${props.color}`
    return (
        <button className={className}
                style={{width: props.width}}>
            {props.children}
        </button>
    )
}
