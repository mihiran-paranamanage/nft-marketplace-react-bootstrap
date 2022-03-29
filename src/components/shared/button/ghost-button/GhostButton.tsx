import React from 'react';

import './GhostButton.scss';

import {ButtonProps} from '../primary-button/PrimaryButton';

export const GhostButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className="ghost-btn"
                style={{color: props.color, backgroundColor: props.bgColor}}>
            {props.children}
        </button>
    )
}
