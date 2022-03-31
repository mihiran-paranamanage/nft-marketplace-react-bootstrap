import React from 'react';

import './LandingPage.scss';

import {ProfileCard} from '../shared/card/profile-card/ProfileCard';
import {GhostButton} from '../shared/button/ghost-button/GhostButton';
import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';
import {LiveCarousel} from '../shared/carousel/live-carousel/LiveCarousel';
import {CollectionCarousel} from '../shared/carousel/collection-carousel/CollectionCarousel';

export const LandingPage: React.FC = (props) => {
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
        </div>
    )
}
