import React from 'react';
import './Card.css';
import photo from '../food1.jpg';

const Card = (props) => {
    
    return (
            <div className='cardStyle '>
                <div className="card-img" style={{backgroundImage:`url(${photo})`}}>
                    <div className="overlay">
                        <div className="overlay-content">
                            <a className="hover" > View</a>
                        </div>
                    </div>
                </div>
                <h3>Titel</h3>
                <h5>so yam</h5>
            </div>
    )
}

export default Card;
