import React from 'react';
import '../styles/cardHomePage.css';
import {Route, Link} from 'react-router-dom';

const Card = (props) => {    
    return (
        // <div>
        //     <div className='box '>
                <div className="card" >
                    <div className="imgBx">
                        <img src= {props.oneRecipe.Img}/>
                    </div>
                    <div className="details">
                        <h2>
                        <Link to ={`/recipe/${props.oneRecipe._id}`}> {props.oneRecipe.Name} </Link><br/>
                        <span>{props.oneRecipe.Description}</span>
                        
                        </h2>
                    </div>
                </div>
        //     </div>
        // </div>
    )
}

export default Card;

