import React, {useState} from 'react';

import './CollectionList.scss';

import {CollectionLeftPanel} from '../collection-left-panel/CollectionLeftPanel';

export const CollectionList: React.FC = (props) => {
    return (
        <div className="collection-list">
            <CollectionLeftPanel/>

            <div>body</div>
        </div>
    )
}
