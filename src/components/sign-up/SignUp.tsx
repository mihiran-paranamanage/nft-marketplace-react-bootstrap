import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './SignUp.scss';

import {Card} from '../shared/card/Card';

export const SignUp: React.FC = (props) => {
    return (
        <Card>
            <div className="sign-up-container text-center">
                <h4>Hi, Let's set up your wallet!</h4>
                <br/>
                <Button className="btn" type="button">Select a wallet</Button>
                <div className="mt-1">
                    <Link className="text-decoration-none" to='/sign-up'>
                        Is this your first time setting up a wallet?
                    </Link>
                </div>
            </div>
        </Card>
    )
}
