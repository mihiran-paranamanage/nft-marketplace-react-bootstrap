import React from 'react';
import {Link} from 'react-router-dom';

import './SignUp.scss';

import {PrimaryButton} from '../shared/button/primary-button/PrimaryButton';

export const SignUp: React.FC = (props) => {
    return (
        <div className="sign-up d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="fw-bold">
                    Hi, Let's set up
                    <br/>
                    your wallet!
                </h1>
                <br/>
                <PrimaryButton>Select a wallet</PrimaryButton>
                <div className="my-3">
                    {/*Todo Change Link url for a relevant select wallet screen*/}
                    <Link className="text-decoration-none" to='/sign-up'>
                        Is this your first time setting up a wallet?
                    </Link>
                </div>
            </div>
        </div>
    )
}
