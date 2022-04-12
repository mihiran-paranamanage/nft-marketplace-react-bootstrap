import React, {useContext} from 'react';
import {Offcanvas} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

import './MyCollectionsLeftPanel.scss';

import AppContext from '../../context/app-context';

export const MyCollectionsLeftPanel: React.FC = (props) => {
    const appContext = useContext(AppContext);
    const show = appContext.showMyCollectionLeftPanel;
    const handleClose = () => appContext.toggleMyCollectionLeftPanel();
    const toggleShow = () => appContext.toggleMyCollectionLeftPanel();

    const offCanvasOptions = {scroll: true, backdrop: false};

    return (
        <Offcanvas className="my-collections-left-panel fw-bold" show={show} onHide={handleClose} {...offCanvasOptions}>
            <Offcanvas.Body>
                <button className="d-flex border-0 bg-transparent" onClick={toggleShow}>
                    <FontAwesomeIcon className="me-2" icon={faAngleLeft} />
                    <h6 className="fw-bold">Hide side bar</h6>
                </button>

                <hr/>

                <div className="d-flex">
                    My collections
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>

                <hr/>

                <div className="d-flex">
                    My payouts
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>

                <hr/>

                <div className="d-flex">
                    Community and Support
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>

                <hr/>

                <div className="d-flex">
                    Wallet
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>

                <hr/>

                <div className="d-flex">
                    Academy
                    <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
