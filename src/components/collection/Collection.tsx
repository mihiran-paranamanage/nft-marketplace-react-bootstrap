import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiamond, faHeart, faCalculator, faGamepad} from '@fortawesome/free-solid-svg-icons'

import './Collection.scss';

import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';
import {GhostButton} from '../shared/button/ghost-button/GhostButton';
import {TopCategoryCard} from '../shared/card/top-category-card/TopCategoryCard';
import {Card} from 'react-bootstrap';

export const Collection: React.FC = (props) => {
    const properties = [1, 2, 3];
    const details: {title: string; value: string; color?: string}[] = [
        {title: 'Contract Address:', value: '0x95f....7b43', color: 'light-blue'},
        {title: 'Token ID:', value: '9685994322048593...'},
        {title: 'Token Standard:', value: 'ERC-1193'},
        {title: 'Blockchain:', value: 'Ethereum'},
        {title: 'Metadata:', value: 'Centralized'}
    ];

    return (
        <div className="collection">
            <div className="d-flex mb-5">
                <img src={require('../../assets/nft-sample.png')} alt="Logo"/>
                <div className="w-50 ms-auto">
                    <div className="w-50">
                        <h4 className="light-blue fw-bold">Collection Name</h4>
                        <h4 className="fw-bold">NFT Name</h4>
                        <p>
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                        Owner: <span className="light-blue">Profile Name</span>
                        <div className="d-flex">
                            <FontAwesomeIcon className="me-2" icon={faHeart} size="lg" />
                            {'34'} Favorites
                        </div>

                        <hr className="mb-0" />

                        <div className="small text-end mb-4">Sale ends {'April 25, 2022'} at {'9.28pm'} {'CST'}</div>

                        <div className="d-flex">
                            <div>
                                Current Price
                                <div className="d-flex">
                                    <FontAwesomeIcon className="me-2" icon={faDiamond} size="lg" />
                                    <span className="fw-bold">{'3.5'}</span>
                                </div>
                                [{'$5,348.45'}]
                            </div>
                            <div className="ms-auto">
                                <PrimaryButton width="100%">Buy now</PrimaryButton>
                                <GhostButton width="100%">Make an offer</GhostButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="properties mb-3">
                        <Card body className="p-3">
                            <h5 className="mb-3">Properties</h5>
                            <div className="d-flex justify-content-between">
                                {properties.map((property) => (
                                    <div className="w-25 p-1 text-center property">
                                        <div className="light-blue">Name</div>
                                        <div className="fw-bold">Lorep Ipsum</div>
                                        <div className="text-muted">{'100'}% have this trait</div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="about mb-3">
                        <Card body className="p-3">
                            <h5 className="mb-3">About this collection</h5>
                            <div className="d-flex">
                                <Card.Img className="card-img-md me-2" variant="top" src={require('../../assets/nft-sample.png')} alt="img" />
                                <div className="w-50 mx-auto">
                                    <p>
                                        Join our waitlist to get early access to
                                        exclusive drops as soon as we set sail!
                                        Join our waitlist to get early access to
                                        exclusive drops as soon as we set sail!
                                    </p>
                                    <FontAwesomeIcon className="me-2" icon={faCalculator} size="lg" />
                                    <FontAwesomeIcon className="me-2" icon={faGamepad} size="lg" />
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="details mb-3">
                        <Card body className="p-3">
                            <h5 className="mb-3">Details</h5>
                            {details.map((detail) => (
                                <div className="row">
                                    <div className="col-6 fw-bold">
                                        {detail.title}
                                    </div>
                                    <div className={'col-6 ' + (detail.color ?? '')}>
                                        {detail.value}
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
                <div className="col-6">
                    <TopCategoryCard/>
                    <TopCategoryCard/>
                    <TopCategoryCard/>
                </div>
            </div>
        </div>
    )
}
