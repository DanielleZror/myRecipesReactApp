import React from 'react';
import './cardHomePage.css';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const CardHomePage = (props) => {    
    return (
        // <div>
            <div className='box '>
                <Card >
                    <div className="imgBx">
                        <img src= {props.oneRecipe.Img}/>
                    </div>
                    <div className="details">
                        <h2>
                        <Link to ={`/recipe/${props.oneRecipe._id}`}> {props.oneRecipe.Name} </Link><br/>
                        <span>{props.oneRecipe.Description}</span>
                        
                        </h2>
                    </div>
                </Card>
         </div>
        // </div>
    )
}

export default CardHomePage;

