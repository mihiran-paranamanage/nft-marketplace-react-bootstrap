import React from 'react';
import {Carousel} from 'react-bootstrap';

import './CollectionCarousel.scss';

import {CollectionCard} from '../../card/collection-card/CollectionCard';

export const CollectionCarousel: React.FC = (props) => {
    return (
        <Carousel className="collection-carousel" variant="dark">
            <Carousel.Item>
                <Carousel.Caption className="d-flex">
                    <CollectionCard/>
                    <CollectionCard/>
                    <CollectionCard/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption className="d-flex">
                    <CollectionCard/>
                    <CollectionCard/>
                    <CollectionCard/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption className="d-flex">
                    <CollectionCard/>
                    <CollectionCard/>
                    <CollectionCard/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
