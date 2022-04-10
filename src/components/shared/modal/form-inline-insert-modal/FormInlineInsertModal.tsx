import React from 'react';
import {Form, Modal} from 'react-bootstrap';

import './FormInlineInsertModal.scss';

import {PrimaryButton} from '../../button/primary-button/PrimaryButton';

interface Props {
    title: string;
    show: boolean;
    onHide: () => void;
}

export const FormInlineInsertModal: React.FC<Props> = (props) => {
    return (
        <Modal className="form-inline-insert-modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header className="border-0" closeButton>
                <h4 className="fw-bold mx-auto">Add {props.title}</h4>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Lorem ipsum sit dolor, lorem ipsum sit dolorlorem ipsum
                    sit dolorlorem ipsum sit dolor.
                </p>
                <div className="row">
                    <div className="col-6">
                        <Form.Group className="mb-5" controlId="form.type">
                            <Form.Label className="fw-bold">Type</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-5" controlId="form.name">
                            <Form.Label className="fw-bold">Name</Form.Label>
                            <Form.Control/>
                        </Form.Group>
                    </div>
                </div>
                <PrimaryButton color="dark-blue">Add</PrimaryButton>
            </Modal.Body>
        </Modal>
    )
}
