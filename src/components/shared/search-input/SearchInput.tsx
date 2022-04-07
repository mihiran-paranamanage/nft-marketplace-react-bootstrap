import React from 'react';
import {Form} from 'react-bootstrap';
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
