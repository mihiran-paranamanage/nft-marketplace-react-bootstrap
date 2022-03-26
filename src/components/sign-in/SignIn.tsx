import React from 'react';
import {Button, Form} from 'react-bootstrap';

import './SignIn.scss';

import {Card} from '../shared/card/Card';
import {Link} from 'react-router-dom';

export const SignIn: React.FC = (props) => {
    return (
        <Card>
            <div className="sign-in-container text-center">
                <h4 className="text-center">Account Login</h4>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className="input" type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className="input" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="submitBtn" type="submit">Submit</Button>
                </Form>
                <div className="text-end mt-1">
                    <Link className="text-decoration-none" to='/sign-up'>Sign up</Link>
                    { ' / ' }
                    <Link className="text-decoration-none" to=''>Forgot your password?</Link>
                </div>
            </div>
        </Card>
    )
}
