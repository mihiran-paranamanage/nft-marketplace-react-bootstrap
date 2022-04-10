import React from 'react';

import './MyCollections.scss';

import {MyCollectionsLeftPanel} from '../my-collections-left-panel/MyCollectionsLeftPanel';
import {NewCollectionCard} from '../shared/card/new-collection-card/NewCollectionCard';
import {CollectionCard} from '../shared/card/collection-card/CollectionCard';

export const MyCollections: React.FC = (props) => {
    return (
        <div className="my-collections">
            <MyCollectionsLeftPanel/>

            <div className="body px-5">
                <h3 className="fw-bold mb-5">My Collections</h3>
                <div className="list">
                    <div className="d-flex row justify-content-between mb-5">
                        <CollectionCard/>
                        <CollectionCard/>
                        <NewCollectionCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
