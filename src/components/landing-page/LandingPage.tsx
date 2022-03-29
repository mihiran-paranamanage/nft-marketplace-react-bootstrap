import React from 'react';

import './LandingPage.scss';

import {ProfileCard} from '../shared/card/profile-card/ProfileCard';
import {GhostButton} from '../shared/button/ghost-button/GhostButton';
import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';

export const LandingPage: React.FC = (props) => {
    return (
        <div className="landing-page row">
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
    )
}
