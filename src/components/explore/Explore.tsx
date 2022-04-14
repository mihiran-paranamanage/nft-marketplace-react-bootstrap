import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Explore.scss';

export const Explore: React.FC = (props) => {
    return (
        <div className="explore">
            <h3 className="fw-bold">Explore</h3>
            <p>To be implemented</p>

            <hr className="mb-5" />

            <h4 className="fw-bold">Other Pages</h4>
            <ListGroup className="fw-bold">
                <ListGroup.Item>
                    <Link to='/' >Home</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to='/new-item' >New Item</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to='/collection/list' >Collection List</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to='/collection/table' >Collection Table</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to='/collection/1' >Collection Details</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to='/collection/my-collections' >My Collections</Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
