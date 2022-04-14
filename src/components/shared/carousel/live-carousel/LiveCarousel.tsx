import React from 'react';
import {Carousel} from 'react-bootstrap';

import './LiveCarousel.scss';

import {LiveCard} from '../../card/live-card/LiveCard';

export const LiveCarousel: React.FC = (props) => {
    return (
        <div className="live-carousel-container overflow-auto">
            <Carousel className="live-carousel" variant="dark">
                <Carousel.Item>
                    <Carousel.Caption>
                        <LiveCard/>
                    </Carousel.Caption>
                    <img src={require('../../../../assets/carousel-background.jpg')} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <LiveCard/>
                    </Carousel.Caption>
                    <img src={require('../../../../assets/carousel-background.jpg')} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <LiveCard/>
                    </Carousel.Caption>
                    <img src={require('../../../../assets/carousel-background.jpg')} alt="img" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
