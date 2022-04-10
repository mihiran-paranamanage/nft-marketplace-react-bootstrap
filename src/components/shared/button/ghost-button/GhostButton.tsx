import React from 'react';

import './GhostButton.scss';

import {ButtonProps} from '../primary-button/PrimaryButton';

export const GhostButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className="ghost-btn fw-bold"
                style={{width: props.width}}>
            {props.children}
        </button>
    )
}
