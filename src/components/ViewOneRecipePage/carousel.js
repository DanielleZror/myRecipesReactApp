import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel'
import { STATIC_IMAGES_PATH } from '../../constants'

const mainCarousel = (props) => {
    return (
        <div className="carousel-backgound" >
            <Carousel controls={props.images.length > 1} indicators={props.images.length > 1} wrap={false}>
                {props.images.map((image, i) => <Carousel.Item><img src={STATIC_IMAGES_PATH + image} alt={i}/></Carousel.Item>)}
            </Carousel>
        </div>
    )
}

export default mainCarousel;