import React from 'react';
import {Form} from 'react-bootstrap';

import './FilterSelect.scss';

interface Props {
    options: {id: string, value: string}[]
}

export const FilterSelect: React.FC<Props> = (props) => {
    return (
        <div className="filter-select">
            <Form.Select className="fw-bold">
                {props.options.map((option) => (
                    <option className="fw-bold" id={option.id}>{option.value}</option>
                ))}
            </Form.Select>
        </div>
    )
}
