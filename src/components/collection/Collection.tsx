import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiamond, faHeart, faCalculator, faGamepad, faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {Card, Form, Table} from 'react-bootstrap';
import {Chart, registerables} from 'chart.js';
import {MDBContainer} from "mdbreact";
import {Line} from "react-chartjs-2";

import './Collection.scss';

import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';
import {GhostButton} from '../shared/button/ghost-button/GhostButton';
import {FilterCard} from '../shared/card/filter-card/FilterCard';
import {Link} from 'react-router-dom';
import {ListCard} from '../shared/card/list-card/ListCard';

export const Collection: React.FC = (props) => {
    const properties = [1, 2, 3];
    const activities = [1, 2, 3, 4, 5];
    const details: {title: string; value: string; color?: string}[] = [
        {title: 'Contract Address:', value: '0x95f....7b43', color: 'font-light-blue'},
        {title: 'Token ID:', value: '9685994322048593...'},
        {title: 'Token Standard:', value: 'ERC-1193'},
        {title: 'Blockchain:', value: 'Ethereum'},
        {title: 'Metadata:', value: 'Centralized'}
    ];
    const priceGraph = {
        labels: ['7/17', '7/17', '7/17', '7/17', '7/17', '7/17', '7/17'],
        datasets: [
            {
                label: 'Price Graph',
                data: [1, 3, 5, 7, 9, 11, 13],
                fill: true,
                backgroundColor: 'rgba(6, 156,51, .3)',
                borderColor: '#02b844',
            }
        ]
    };
    const activityFilters = [
        {id: '1', name: 'Sales'},
        {id: '2', name: 'Transfers'}
    ];

    Chart.register(...registerables);

    return (
        <div className="collection">
            <div className="d-flex mb-5">
                <img src={require('../../assets/nft-sample.png')} alt="Logo"/>
                <div className="w-50 ms-auto">
                    <div className="w-50">
                        <h4 className="font-light-blue fw-bold">Collection Name</h4>
                        <h4 className="fw-bold">NFT Name</h4>
                        <p>
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                        Owner: <span className="font-light-blue">Profile Name</span>
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

            <div className="collection-stats">
                <div className="row">
                    <div className="col-6">
                        <div className="properties mb-3">
                            <Card body className="p-3">
                                <h5 className="mb-3 fw-bold">Properties</h5>
                                <div className="d-flex justify-content-between">
                                    {properties.map((property) => (
                                        <div className="w-25 p-1 text-center property">
                                            <div className="font-light-blue">Name</div>
                                            <div className="fw-bold">Lorep Ipsum</div>
                                            <div className="text-muted">{'100'}% have this trait</div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="about mb-3">
                            <Card body className="p-3">
                                <h5 className="mb-3 fw-bold">About this collection</h5>
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
                                <h5 className="mb-3 fw-bold">Details</h5>
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
                        <div className="price-graph mb-3">
                            <Card body className="p-3">
                                <div className="d-flex">
                                    <div className="d-flex">
                                        <h5 className="mb-3 fw-bold">Price graph</h5>
                                        <span className="mx-2">
                                        <Form.Select className="fw-bold">
                                          <option>All time</option>
                                        </Form.Select>
                                    </span>
                                    </div>

                                    <div className="d-flex ms-auto">
                                        <div className="font-light-blue me-2 fw-bold">All time avg. price</div>
                                        <div className="d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                                            <span className="fw-bold">{'415'}</span>
                                        </div>
                                    </div>
                                </div>

                                <MDBContainer>
                                    <Line data={priceGraph} />
                                </MDBContainer>

                            </Card>
                        </div>

                        <div className="listings mb-3">
                            <Card body className="p-3">
                                <h5 className="mb-3 fw-bold">Listings</h5>
                                <Table responsive>
                                    <thead>
                                    <tr className="text-muted">
                                        <th>Price</th>
                                        <th>USD</th>
                                        <th>Exp.</th>
                                        <th>From</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                                            <span className="fw-bold">{'415'}</span>
                                        </td>
                                        <td className="fw-bold">$5,430,211</td>
                                        <td className="fw-bold">1 month</td>
                                        <td className="font-light-blue fw-bold">Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                                            <span className="fw-bold">{'415'}</span>
                                        </td>
                                        <td className="fw-bold">$5,430,211</td>
                                        <td className="fw-bold">1 month</td>
                                        <td className="font-light-blue fw-bold">Lorem Ipsum</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>

                        <div className="offers mb-3">
                            <Card body className="p-3">
                                <h5 className="mb-3 fw-bold">Offers</h5>
                                <Table responsive>
                                    <thead>
                                    <tr className="text-muted">
                                        <th>Price</th>
                                        <th>USD</th>
                                        <th>Floor dif.</th>
                                        <th>Exp.</th>
                                        <th>From</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                                            <span className="fw-bold">{'415'}</span>
                                        </td>
                                        <td className="fw-bold">$5,430,211</td>
                                        <td className="fw-bold d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faArrowDown} size="xs" />
                                            <span className="fw-bold">{'100'}%</span>
                                        </td>
                                        <td className="fw-bold">1 month</td>
                                        <td className="font-light-blue fw-bold">Lorem Ipsum</td>
                                    </tr>
                                    <tr>
                                        <td className="d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                                            <span className="fw-bold">{'415'}</span>
                                        </td>
                                        <td className="fw-bold">$5,430,211</td>
                                        <td className="fw-bold d-flex">
                                            <FontAwesomeIcon className="mt-1 me-1" icon={faArrowUp} size="xs" />
                                            <span className="fw-bold">{'100'}%</span>
                                        </td>
                                        <td className="fw-bold">1 month</td>
                                        <td className="font-light-blue fw-bold">Lorem Ipsum</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="activity mb-3">
                    <Card body className="p-3">
                        <div className="d-flex mb-3">
                            <h5 className="fw-bold">Activity</h5>
                            <span className="mx-2">
                            <Form.Select className="fw-bold">
                              <option>Filter by</option>
                            </Form.Select>
                        </span>
                        </div>
                        <div className="d-flex align-items-center">
                            {activityFilters.map((filter: {id: string, name: string}) => (
                                <FilterCard id={filter.id} name={filter.name} showImage={false} />
                            ))}

                            <Link to='' className="text-decoration-none" >Clear all</Link>
                        </div>
                        <hr className='border-0' />
                        <Table responsive>
                            <thead>
                            <tr className="text-muted">
                                <th>Event</th>
                                <th>Price</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {activities.map((property) => (
                                <tr>
                                    <td className="fw-bold">Sale</td>
                                    <td className="d-flex">
                                        <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                                        <span className="fw-bold">{'415'}</span>
                                    </td>
                                    <td className="font-light-blue fw-bold">Lorem Ipsum</td>
                                    <td className="font-light-blue fw-bold">Lorem Ipsum</td>
                                    <td className="font-light-blue fw-bold">1 month ago</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Card>
                </div>
            </div>

            <div className="more">
                <h4 className="fw-bold">More from this collection</h4>
                <div className="d-flex row justify-content-between mb-5">
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                    <ListCard/>
                </div>
                <PrimaryButton color="dark-blue">View Collection</PrimaryButton>
            </div>
        </div>
    )
}
