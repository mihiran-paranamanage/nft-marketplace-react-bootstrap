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
        </div>
    )
}
