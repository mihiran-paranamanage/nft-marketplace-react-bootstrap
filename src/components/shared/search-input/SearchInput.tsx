import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {Form, Offcanvas} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';

import './SearchInput.scss';

interface Props {
    placeholder: string;
}

export const SearchInput: React.FC<Props> = (props) => {
    return (
        <div className="search-input">
            <BsSearch className="search-icon"/>
            <Form.Control type="text" placeholder={props.placeholder} />
        </div>
    )
}
