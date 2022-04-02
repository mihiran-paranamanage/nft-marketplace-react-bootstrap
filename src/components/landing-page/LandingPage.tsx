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
            <div className="main-content row mb-5">
                <div className="col-6 align-self-center">
                    <div className="m-auto w-50">
                        <h3>That don't
                            <br/>
                            cost a fortune
                            <br/>
                            to mint & sell.
                        </h3>
                        <p>
                            Join our waitlist to get early access to
                            <br/>
                            exclusive drops as soon as we set sail!
                        </p>
                        <div className="d-flex">
                            <GhostButton>Explore</GhostButton>
                            <PrimaryButton>Create</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="m-auto w-50">
                        <ProfileCard/>
                    </div>
                </div>
            </div>

            <LiveCarousel/>

            <h5 className="mt-5">Featured Collection</h5>
            <CollectionCarousel/>

            <h5 className="mt-5 mb-3 d-flex top-category-title">
                Top
                <span className="mx-2">
                        <Form.Select size="lg">
                          <option>Sellers</option>
                        </Form.Select>
                    </span>
                in
                <span className="mx-2">
                        <Form.Select size="lg">
                          <option>1 day</option>
                        </Form.Select>
                    </span>
            </h5>
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

            <div className="process p-5 mt-5">
                <h5 className="mb-3">The process is simple</h5>
                <div className="row">
                    <div className="col-4 p-3">
                        <img className="mb-3" src={require('../../../src/assets/process-sample.png')} alt="img" />
                        <h6>Set up your wallet</h6>
                        <p className="w-75">
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                    </div>
                    <div className="col-4 p-3">
                        <img className="mb-3" src={require('../../../src/assets/process-sample.png')} alt="img" />
                        <h6>Let your creative juices flowing</h6>
                        <p className="w-75">
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                    </div>
                    <div className="col-4 p-3">
                        <img className="mb-3" src={require('../../../src/assets/process-sample.png')} alt="img" />
                        <h6>List your NFTs for sale</h6>
                        <p className="w-75">
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                            Join our waitlist to get early access to
                            exclusive drops as soon as we set sail!
                        </p>
                    </div>
                </div>
                <div className="join-section text-center">
                    <h4>Join our free academy and get started</h4>
                    <p className="w-25 mx-auto">
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                    </p>
                    <PrimaryButton color="red">Start Learning</PrimaryButton>
                </div>
            </div>

            <h3 className="why-section text-center p-5 w-75">Why is NFT Fisher different?</h3>

            <div className="row mb-5">
                <div className="col-6 text-center">
                    <img src={require('../../../src/assets/process-sample.png')} alt="img" />
                </div>
                <div className="col-6 my-auto">
                    <h6>We care about the planet</h6>
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
                    <h6>We care about the planet</h6>
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
                    <h6>We care about the planet</h6>
                    <p className="w-50">
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                        Join our waitlist to get early access to
                        exclusive drops as soon as we set sail!
                    </p>
                </div>
            </div>

            <div></div>
        </div>
    )
}
