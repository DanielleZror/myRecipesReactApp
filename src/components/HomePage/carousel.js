import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel'

const mainCarousel = () => {
    return (       
        <div className="carousel-backgound fadeOut" >
            {/* style={{backgroundImage:`url(https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg)`}} */}
                <Carousel className="fadeInDown">
                    <Carousel.Item>
                        <img src='https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg' alt=" first"/>
    
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src='https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg' alt=" first"/>
                    </Carousel.Item>
                </Carousel>
                </div>
    )
}

export default mainCarousel;