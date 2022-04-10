import React from 'react';
import {Form} from 'react-bootstrap';

import './LandingPage.scss';

import {ProfileCard} from '../shared/card/profile-card/ProfileCard';
import {GhostButton} from '../shared/button/ghost-button/GhostButton';
import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';
import {LiveCarousel} from '../shared/carousel/live-carousel/LiveCarousel';
import {CollectionCarousel} from '../shared/carousel/collection-carousel/CollectionCarousel';
import {TopCategoryCard} from '../shared/card/top-category-card/TopCategoryCard';

export const LandingPage: React.FC = (props) => {
    const topCategories = ['category 1', 'category 2', 'category 3', 'category 4', 'category 5',
        'category 6', 'category 7', 'category 8', 'category 9', 'category 10'];

    return (
        <div className="landing-page">
            <div className="main-content row">
                <div className="col-6 align-self-center">
                    <div className="m-auto w-75">
                        <h1 className="display-3 fw-bold">That don't
                            <br/>
                            cost a fortune
                            <br/>
                            to mint & sell.
                        </h1>
                        <p className="h4 fw-normal mb-5">
                            Join our waitlist to get early access to
                            <br/>
                            exclusive drops as soon as we set sail!
                        </p>
                        <div className="d-flex">
                            <GhostButton width="40%">Explore</GhostButton>
                            <PrimaryButton width="40%">Create</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="w-50">
                        <ProfileCard/>
                    </div>
                </div>
            </div>

            <LiveCarousel/>

            <h3 className="mb-5 fw-bold">Featured Collection</h3>
            <CollectionCarousel/>

            <h3 className="mb-5 d-flex top-category-title fw-bold">
                Top
                <span className="mx-2">
                    <Form.Select size="lg" className="h3">
                      <option className="h3">Sellers</option>
                    </Form.Select>
                </span>
                in
                <span className="mx-2">
                    <Form.Select size="lg" className="h3">
                      <option className="h3">1 day</option>
                    </Form.Select>
                </span>
            </h3>
            <div className="d-flex row">
                <div className="col-6">
                    {topCategories.slice(0, 5).map((category: string, index: number) => (
                        <TopCategoryCard index={index + 1} />
                    ))}
                </div>
                <div className="col-6 ms-auto">
                    {topCategories.slice(5, 10).map((category: string, index: number) => (
                        <TopCategoryCard index={index + 6} />
                    ))}
                </div>
            </div>

            <div className="process p-5">
                <h3 className="mb-5 fw-bold">The process is simple</h3>
                <div className="row">
                    <div className="col-4 p-3">
                        <img className="mb-5 rounded" src={require('../../../src/assets/process-sample.png')} alt="img" />
                        <h5 className="fw-bold">Set up your wallet</h5>
                        <p className="w-75">
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                    </div>
                    <div className="col-4 p-3">
                        <img className="mb-5 rounded" src={require('../../../src/assets/process-sample.png')} alt="img" />
                        <h5 className="fw-bold">Let your creative juices flowing</h5>
                        <p className="w-75">
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                    </div>
                    <div className="col-4 p-3">
                        <img className="mb-5 rounded" src={require('../../../src/assets/process-sample.png')} alt="img" />
                        <h5 className="fw-bold">List your NFTs for sale</h5>
                        <p className="w-75">
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                    </div>
                </div>
                <div className="join-section text-center">
                    <h3 className="fw-bold">Join our free academy and get started</h3>
                    <p className="w-50 mx-auto">
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                    </p>
                    <PrimaryButton width="20%" color="red">Start Learning</PrimaryButton>
                </div>
            </div>

            <h3 className="why-section text-center fw-bold p-5 w-75">Why is NFT Fisher different?</h3>

            <div className="row mb-5">
                <div className="col-6 text-center">
                    <img src={require('../../../src/assets/process-sample.png')} alt="img" />
                </div>
                <div className="col-6 my-auto">
                    <h4 className="fw-bold">We care about the planet</h4>
                    <p className="w-50">
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                    </p>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-6 my-auto text-end">
                    <h4 className="fw-bold">We care about the planet</h4>
                    <p className="w-50 ms-auto">
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                    </p>
                </div>
                <div className="col-6 text-center">
                    <img src={require('../../../src/assets/process-sample.png')} alt="img" />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-6 text-center">
                    <img src={require('../../../src/assets/process-sample.png')} alt="img" />
                </div>
                <div className="col-6 my-auto">
                    <h4 className="fw-bold">We care about the planet</h4>
                    <p className="w-50">
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                    </p>
                </div>
            </div>

            <div className="unlock-section text-center">
                <h2 className="mb-5 fw-bold">Calling all creators!</h2>
                <p className="w-25 mx-auto mb-5">Learn about the secret and exclusive
                    benefits we have for our first 100
                    collections.
                </p>
                <PrimaryButton width="20%" color="red">Unlock now!</PrimaryButton>
            </div>

            <h3 className="mb-5 d-flex trending-title fw-bold">
                Trending in
                <span className="mx-2">
                    <Form.Select size="lg" className="h3">
                      <option className="h3">All categories</option>
                    </Form.Select>
                </span>
            </h3>
            <CollectionCarousel/>

            <div className="waitlist row p-5">
                <div className="col-8 my-auto">
                    <h3 className="fw-bold mb-3">Stay up to date!</h3>
                    <p className="w-50">
                        Join our waitlist to get early access to exclusive drops as soon as we set
                        sail! Join our waitlist to get early access to exclusive drops as soon as we
                        set sail!
                    </p>
                    <div className="d-flex w-75 justify-content-between">
                        <Form className="input-form">
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control className="input" type="email" placeholder="Your email address" />
                            </Form.Group>
                        </Form>
                        <PrimaryButton width="30%">Subscribe</PrimaryButton>
                    </div>
                </div>
                <div className="col-4">
                    <img className="mb-3" src={require('../../../src/assets/process-sample.png')} alt="img" />
                </div>
            </div>
        </div>
    )
}
