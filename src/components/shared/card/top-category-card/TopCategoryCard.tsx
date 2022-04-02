import React from 'react';
import {Card} from 'react-bootstrap'

import './TopCategoryCard.scss';

interface Props {
    index?: number;
}

export const TopCategoryCard: React.FC<Props> = (props) => {
    return (
        <div className="top-category-card mb-3">
            <Card body>
                {props.index ? (<span className="index align-self-center me-4">{props.index}.</span>)
                : null}
                <Card.Img className="card-img-sm me-4" variant="top" src={require('../../../../assets/nft-sample.png')} alt="img" />
                <div>
                    <h6>Lorem Ipsum Sit Dalet</h6>
                    <span className="text-muted">$15,364</span>
                </div>
                <span className="gain ms-auto">+140%</span>
            </Card>
        </div>
    )
}
