import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {Form, Offcanvas} from 'react-bootstrap';

import './CollectionLeftPanel.scss';

import {SearchInput} from '../shared/search-input/SearchInput';
import {ArtistCard} from '../shared/card/artist-card/ArtistCard';
import AppContext from '../../context/app-context';

export const CollectionLeftPanel: React.FC = (props) => {
    const appContext = useContext(AppContext);
    const show = appContext.showCollectionLeftPanel;
    const handleClose = () => appContext.toggleCollectionLeftPanel();
    const toggleShow = () => appContext.toggleCollectionLeftPanel();

    const offCanvasOptions = {scroll: true, backdrop: false};
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
        <Offcanvas className="collection-left-panel fw-bold" show={show} onHide={handleClose} {...offCanvasOptions}>
            <Offcanvas.Body>
                <button className="d-flex border-0 bg-transparent" onClick={toggleShow}>
                    <FontAwesomeIcon className="me-2" icon={faAngleLeft} />
                    <h6 className="fw-bold">Hide side bar</h6>
                </button>

                <hr/>

                <div className="d-flex mb-3">
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

                <div className="d-flex mb-3">
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

                <div className="d-flex mb-3">
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
