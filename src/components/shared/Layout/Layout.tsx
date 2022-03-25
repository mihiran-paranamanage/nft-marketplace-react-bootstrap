import React from 'react';

import './Layout.scss';

export const Layout: React.FC = (props) => {
    return (
        <div className="layout">{props.children}</div>
    );
}
