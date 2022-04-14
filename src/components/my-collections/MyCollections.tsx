import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

import './MyCollections.scss';

import {MyCollectionsLeftPanel} from '../my-collections-left-panel/MyCollectionsLeftPanel';
import {NewCollectionCard} from '../shared/card/new-collection-card/NewCollectionCard';
import {CollectionCard} from '../shared/card/collection-card/CollectionCard';
import AppContext from '../../context/app-context';

export const MyCollections: React.FC = (props) => {
    const appContext = useContext(AppContext);
    const toggleMyCollectionLeftPanel = () => appContext.toggleMyCollectionLeftPanel();

    return (
        <div className="my-collections">
            <MyCollectionsLeftPanel/>

            <button className="show-side-bar d-flex border-0 bg-transparent position-absolute"
                    onClick={toggleMyCollectionLeftPanel}>
                <h6 className="fw-bold">Show side bar</h6>
                <FontAwesomeIcon className="ms-2" icon={faAngleRight} />
            </button>

            <div className="body">
                <h3 className="fw-bold mb-5">My Collections</h3>
                <div className="list">
                    <div className="d-flex row justify-content-evenly">
                        <CollectionCard/>
                        <CollectionCard/>
                        <NewCollectionCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
