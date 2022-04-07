import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {Form, Offcanvas} from 'react-bootstrap';

import './CollectionLeftPanel.scss';

import {SearchInput} from '../shared/search-input/SearchInput';
import {ArtistCard} from '../shared/card/artist-card/ArtistCard';

export const CollectionLeftPanel: React.FC = (props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s: boolean) => !s);

    const offCanvasOptions = {scroll: false, backdrop: false};
    const categories = [
        {id: '1', name: 'Sports'},
        {id: '2', name: 'Events'},
        {id: '3', name: 'Music'},
        {id: '4', name: 'Photography'},
        {id: '5', name: 'Art'}
    ];
    const artists = [
        {id: '1', name: 'Artist 1'},
        {id: '2', name: 'Artist 2'},
        {id: '3', name: 'Artist 3'},
        {id: '4', name: 'Artist 4'},
        {id: '5', name: 'Artist 5'}
    ];

    return (
        <Offcanvas className="collection-left-panel" show={show} onHide={handleClose} {...offCanvasOptions}>
            <Offcanvas.Body>
                <div className="d-flex" onClick={toggleShow}>
                    <FontAwesomeIcon className="me-2" icon={faAngleLeft} />
                    <h6>Hide side bar</h6>
                </div>

                <hr/>

                <div className="d-flex">
                    Category
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>
                <div className="categories">
                    {categories.map((category: {id: string, name: string}) => (
                        <Form.Check
                            type="checkbox"
                            id={category.id}
                            label={category.name}/>
                    ))}
                </div>

                <hr/>

                <div className="d-flex">
                    Collections
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>

                <hr/>

                <div className="d-flex">
                    Artist
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>
                <Form className="artist-search">
                    <Form.Group className="mb-3" controlId="search">
                        <SearchInput placeholder="Lorep..." />
                    </Form.Group>
                </Form>
                <div className="artists">
                    {artists.map((artist: {id: string, name: string}) => (
                        <ArtistCard id={artist.id} name={artist.name} />
                    ))}
                </div>

                <hr/>

                <div className="d-flex">
                    Sale Status
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>

                <hr/>

                <div className="d-flex">
                    Price
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>
                <Form className="price-range d-flex align-items-center">
                    <Form.Group className="min" controlId="min">
                        <Form.Control className="input" type="text" placeholder="Min" />
                    </Form.Group>
                    to
                    <Form.Group className="max" controlId="max">
                        <Form.Control className="input" type="text" placeholder="Max" />
                    </Form.Group>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
