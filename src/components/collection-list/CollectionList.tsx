import React from 'react';
import {Link} from 'react-router-dom';

import './CollectionList.scss';

import {CollectionLeftPanel} from '../collection-left-panel/CollectionLeftPanel';
import {FilterCard} from '../shared/card/filter-card/FilterCard';
import {Form} from 'react-bootstrap';
import {ListCard} from '../shared/card/list-card/ListCard';

export const CollectionList: React.FC = (props) => {
    const filters = [
        {id: '1', name: 'Filter 1'},
        {id: '2', name: 'Filter 2'},
        {id: '3', name: 'Filter 3'}
    ];

    return (
        <div className="collection-list">
            <CollectionLeftPanel/>

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
                            <Form.Select className="h5">
                              <option>Recently listed</option>
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
