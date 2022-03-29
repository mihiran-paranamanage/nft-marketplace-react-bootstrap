import React from 'react';

import './PrimaryButton.scss';

export interface ButtonProps {
    color?: string;
    bgColor?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className="primary-btn"
                style={{color: props.color, backgroundColor: props.bgColor}}>
            {props.children}
        </button>
    )
}
