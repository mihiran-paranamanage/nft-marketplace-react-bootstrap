import React, {useState} from 'react';
import {Card, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import './NewItem.scss';

import {CollectionCellCard} from '../shared/card/collection-cell-card/CollectionCellCard';
import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';
import {FormInlineInsertModal} from '../shared/modal/form-inline-insert-modal/FormInlineInsertModal';

export const NewItem: React.FC = (props) => {
    const [inlineInsertModalShow, setInlineInsertModalShow] = useState(false);
    const [inlineInsertModalTitle, setInlineInsertModalTitle] = useState('');

    function inlineInsertModalHandler(title: string) {
        setInlineInsertModalShow(true);
        setInlineInsertModalTitle(title);
    }

    return (
        <div className="new-item">
            <h2 className="fw-bold">Create a new item</h2>
            <div className="fw-bold">Image, video, audio or 3D model</div>
            <div>
                File types support: {'JPG, PNG, GIF, SVG, MP4, WEBM, MP3, MAV, OGG, GLB, GLTF'}
                Max size: {'40'} MB
            </div>

            <Card className="create-item-card mt-5 mx-auto">
                <Card.Body>
                    <Card.Img className="card-img-dp" variant="top" src={require('../../assets/new-collection.png')} alt="img" />
                </Card.Body>
            </Card>

            <Form className="mt-5">
                <Form.Group className="mb-5" controlId="form.name">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.externalLink">
                    <Form.Label className="fw-bold">External Link</Form.Label>
                    <Form.Text muted>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </Form.Text>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.description">
                    <Form.Label className="fw-bold">Description</Form.Label>
                    <Form.Text muted>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </Form.Text>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>

                <Form.Group className="mb-5 form-collection-select" controlId="form.collection">
                    <Form.Label className="fw-bold">Collection</Form.Label>
                    <Form.Select className="mb-5" aria-label="Collection">
                        <option value="1">
                            <CollectionCellCard id={'1'} name={'Lorep Ipsum 1'} />
                        </option>
                        <option value="2">
                            <CollectionCellCard id={'2'} name={'Lorep Ipsum 2'} />
                        </option>
                    </Form.Select>
                </Form.Group>

                <div className="d-flex mb-5 form-inline-insert">
                    <div>
                        <h5 className="fw-bold">Properties</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto insert align-items-center d-flex"
                         onClick={() => inlineInsertModalHandler('Property')}>
                        <FontAwesomeIcon className="mx-auto" icon={faPlus} />
                    </div>
                </div>
                <div className="d-flex mb-5 form-inline-insert">
                    <div>
                        <h5 className="fw-bold">Levels</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto insert align-items-center d-flex"
                         onClick={() => inlineInsertModalHandler('Level')}>
                        <FontAwesomeIcon className="mx-auto" icon={faPlus} />
                    </div>
                </div>
                <div className="d-flex mb-5 form-inline-insert">
                    <div>
                        <h5 className="fw-bold">Stats</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto insert align-items-center d-flex"
                         onClick={() => inlineInsertModalHandler('Stat')}>
                        <FontAwesomeIcon className="mx-auto" icon={faPlus} />
                    </div>
                </div>

                <div className="d-flex mb-5 form-inline-switch">
                    <div>
                        <h5 className="fw-bold">Unlockable content</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto">
                        <Form.Check
                            type="switch"
                            id="unlockable-content"
                        />
                    </div>
                </div>
                <div className="d-flex mb-5 form-inline-switch">
                    <div>
                        <h5 className="fw-bold">Explicit & sensitive content</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto">
                        <Form.Check
                            type="switch"
                            id="explicit-sensitive"
                            defaultChecked={true}
                        />
                    </div>
                </div>

                <Form.Group className="mb-5" controlId="form.supply">
                    <Form.Label className="fw-bold">Supply</Form.Label>
                    <Form.Text muted>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </Form.Text>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.blockchain">
                    <Form.Label className="fw-bold">Blockchain</Form.Label>
                    <Form.Text muted>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </Form.Text>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mb-5" controlId="form.freezeMetadata">
                    <Form.Label className="fw-bold">Freeze metadata</Form.Label>
                    <Form.Text muted>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </Form.Text>
                    <Form.Control/>
                </Form.Group>

                <Form.Group className="mb-5 form-sell-method" controlId="form.sellMethod">
                    <Form.Label className="fw-bold">Select your sell method</Form.Label>
                    <div className="d-flex justify-content-evenly">
                        <div className="method">
                            <div className="fw-bold">Set price</div>
                            <div className="small text-muted">Lorem ipsum sit dolor</div>
                        </div>
                        <div className="method">
                            <div className="fw-bold">Highest bid</div>
                            <div className="small text-muted">Lorem ipsum sit dolor</div>
                        </div>
                        <div className="method">
                            <div className="fw-bold">Bundle</div>
                            <div className="small text-muted">Lorem ipsum sit dolor</div>
                        </div>
                    </div>
                </Form.Group>

                <div className="d-flex mb-5 form-inline-select">
                    <div>
                        <h5 className="fw-bold">Price</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="ms-auto">
                        <Form.Select aria-label="Collection">
                            <option value="1">$1</option>
                            <option value="2">$10</option>
                            <option value="3">$100</option>
                            <option value="4">$1000</option>
                        </Form.Select>
                    </div>
                </div>

                <div className="d-flex mb-5 form-inline-switch">
                    <div>
                        <h5 className="fw-bold">Include ending price</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto">
                        <Form.Check
                            type="switch"
                            id="explicit-sensitive"
                        />
                    </div>
                </div>

                <div className="d-flex mb-5 form-inline-switch">
                    <div>
                        <h5 className="fw-bold">Privacy</h5>
                        Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                    </div>
                    <div className="p-2 ms-auto">
                        <Form.Check
                            type="switch"
                            id="explicit-sensitive"
                        />
                    </div>
                </div>

                <div className="summary p-5">
                    <h4 className="fw-bold mb-5">Summary</h4>

                    <div className="d-flex">
                        <div>
                            <div className="mb-5">
                                <h5 className="fw-bold">Listing</h5>
                                Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                            </div>

                            <div className="mb-5">
                                <h5 className="fw-bold">Bounties</h5>
                                Lorem ipsum dolor sit amet, consectetuer adipscing elit.
                            </div>

                            <div className="mb-5">
                                <h5 className="fw-bold">Fees</h5>
                                Lorem ipsum dolor sit amet, consectetuer adipscing elit.<br/>
                                To NFT Fisher...............................................................................................................1%
                                <p>
                                <span className="fw-bold">Total</span>................................................................................................................................1%
                                </p>
                            </div>
                        </div>
                        <div className="align-self-end ms-4 mb-5">
                            <PrimaryButton>Post your listing</PrimaryButton>
                        </div>
                    </div>
                </div>
            </Form>

            <FormInlineInsertModal
                title={inlineInsertModalTitle}
                show={inlineInsertModalShow}
                onHide={() => setInlineInsertModalShow(false)} />
        </div>
    )
}
