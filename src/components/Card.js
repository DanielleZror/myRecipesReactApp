import React from 'react';
import '../styles/Card.css';
import photo from '../food1.jpg';

const Card = (props) => {
    console.log('card', props.oneRecipe)
    
    return (
            <div className='cardStyle '>
                <div className="card-img" style={{backgroundImage:`url(${props.oneRecipe.Img})`}}>
                    <div className="overlay">
                        <div className="overlay-content">
                            <a className="hover" > View</a>
                        </div>
                    </div>
                </div>
                <h3>{props.oneRecipe.Name}</h3>
                <h5>{props.oneRecipe.Description}</h5>
            </div>
    )
}

export default Card;



{/* <div className="card-img" style={{backgroundImage:`url(${props.oneRecipe.Img})`}}>
                    <div className="overlay">
                        <div className="overlay-content">
                            <a className="hover" > View</a>
                        </div>
                    </div>
                </div>
                <h3>{props.oneRecipe.Name}</h3>
                <h5>{props.oneRecipe.Description}</h5> */}