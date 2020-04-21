import React from 'react';
import './cardHomePage.css';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const CardHomePage = (props) => {    
    return (
        <div className='home-card'>
            <Card >
                <div className="imgBx">
                    <img src= {props.oneRecipe.Img} alt={props.oneRecipe.Name}/>
                </div>
                <div className="details">
                    <h2>
                    <Link to ={`/recipe/${props.oneRecipe._id}`}> {props.oneRecipe.Name} </Link><br/>
                    <span>{props.oneRecipe.Description}</span>
                    
                    </h2>
                </div>
            </Card>
         </div>
    )
}

export default CardHomePage;

