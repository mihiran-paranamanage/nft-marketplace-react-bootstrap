import React, {useState} from 'react';
import {Offcanvas} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

import './MyCollectionsLeftPanel.scss';

export const MyCollectionsLeftPanel: React.FC = (props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s: boolean) => !s);

    const offCanvasOptions = {scroll: true, backdrop: false};

    return (
        <Offcanvas className="my-collections-left-panel" show={show} onHide={handleClose} {...offCanvasOptions}>
            <Offcanvas.Body>
                <div className="d-flex" onClick={toggleShow}>
                    <FontAwesomeIcon className="me-2" icon={faAngleLeft} />
                    <h6>Hide side bar</h6>
                </div>

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
