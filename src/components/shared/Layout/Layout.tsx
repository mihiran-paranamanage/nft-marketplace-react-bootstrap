import React, {useContext} from 'react';

import './Layout.scss';

import AppContext from '../../../context/app-context';

export const Layout: React.FC = (props) => {
    const appContext = useContext(AppContext);
    const leftPanelOpened = appContext.showCollectionLeftPanel || appContext.showMyCollectionLeftPanel;
    const className = `layout ${leftPanelOpened ? 'align-right' : ''}`;

    return (
        <div className={className}>{props.children}</div>
    );
}
