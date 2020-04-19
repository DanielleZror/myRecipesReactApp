import React from 'react';
import '../styles/allDetailsCard.css';
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
                    <p className ="ingredients">
                        <span className="title" >Ingredients:</span>
                        <br/>
                        {props.oneRecipe.Ingredients.map((oneIngredient,counter) => <Ingredient key={counter} oneIngredient={oneIngredient}/>) }
                    </p>
                    <p className="preparation">
                        <span className="title">Preparation method:</span>
                        <br/>
                        <span className="text">{props.oneRecipe.Preparation}</span>
                    </p>
                </article>   
            </aside>
        </div>
    )
}

export default Card;

