import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Form} from 'react-bootstrap';

import './CollectionList.scss';

import {CollectionLeftPanel} from '../collection-left-panel/CollectionLeftPanel';
import {FilterCard} from '../shared/card/filter-card/FilterCard';
import {ListCard} from '../shared/card/list-card/ListCard';
import AppContext from '../../context/app-context';

export const CollectionList: React.FC = (props) => {
    const appContext = useContext(AppContext);
    const toggleCollectionLeftPanel = () => appContext.toggleCollectionLeftPanel();

    const filters = [
        {id: '1', name: 'Filter 1'},
        {id: '2', name: 'Filter 2'},
        {id: '3', name: 'Filter 3'}
    ];

    return (
        <div className="collection-list">
            <CollectionLeftPanel/>

            <button className="show-side-bar d-flex border-0 bg-transparent position-absolute"
                    onClick={toggleCollectionLeftPanel}>
                <h6 className="fw-bold">Show side bar</h6>
                <FontAwesomeIcon className="ms-2" icon={faAngleRight} />
            </button>

            <div className="body px-5">
                <div className="filters d-flex align-items-center">
                    {filters.map((filter: {id: string, name: string}) => (
                        <FilterCard id={filter.id} name={filter.name} />
                    ))}

                    <Link to='' className="ms-auto text-decoration-none fw-bold">Clear all</Link>
                </div>

                <hr/>

                <div className="sort d-flex my-5">
                    <h5 className="text-muted fw-bold">{'50,234'} items</h5>
                    <div className="ms-auto d-flex">
                        <h5 className="text-muted fw-bold">Sort by</h5>
                        <span className="mx-2">
                            <Form.Select className="h5 fw-bold">
                              <option className="h5 fw-bold">Recently listed</option>
                            </Form.Select>
                        </span>
                    </div>
                </div>

                <div className="list">
                    <div className="d-flex row justify-content-between mb-5">
                        <ListCard/>
                        <ListCard/>
                        <ListCard/>
                        <ListCard/>
                    </div>
                    <div className="d-flex row justify-content-between mb-5">
                        <ListCard/>
                        <ListCard/>
                        <ListCard/>
                        <ListCard/>
                    </div>
                    <div className="d-flex row justify-content-between mb-5">
                        <ListCard/>
                        <ListCard/>
                        <ListCard/>
                        <ListCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
