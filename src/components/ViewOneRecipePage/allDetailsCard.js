import React from 'react';
import './allDetailsCard.css';
import Ingredient from './Ingredient';

const Card = (props) => {
    console.log('detailscard', props.oneRecipe.Ingredients)
    return (
        <div className="recipe-card">
            <aside >
                <img alt={props.oneRecipe.Name} src={props.oneRecipe.Img}/>
                <article>
                    <h2>{props.oneRecipe.Name}</h2>
                    <h3>{props.oneRecipe.Description}</h3>
                    <ul>
                        <li ><i className="fas fa-clock"></i></li>
                        <li>{props.oneRecipe.TimeHours +" Hours " + props.oneRecipe.TimeMinutes + " Minuts"} </li>
                    </ul>
                    <div className="separator"></div>
                    <p className="preparation">
                        <span className="title">{props.oneRecipe.Preparation}</span>
                    </p>
                    <p className ="ingredients">
                        <span className="title" >Ingredients:</span>
                        <br/>
                        {/* {props.oneRecipe.Ingredients.map((oneIngredient,counter) => <Ingredient key={counter} oneIngredient={oneIngredient}/>) } */}
                    </p>
                    
                </article>   
            </aside>
        </div>
    )
}

export default Card;