import React from 'react';
import './allDetailsCard.css';
import Ingredient from './Ingredient';
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Card = (props) => {
    return (
        <div className="recipe-card">
            <aside >
                <img alt={props.oneRecipe.Name} src={props.oneRecipe.Img} />
                <article>
                    <h2>{props.oneRecipe.Name}</h2>
                    <h3>{props.oneRecipe.Description}</h3>
                    <ul>
                        <li ><FaRegClock /></li>
                        <li>{props.oneRecipe.TimeHours + " Hours " + props.oneRecipe.TimeMinutes + " Minuts"} </li>
                        <li></li>
                        <li><FaRegHeart /></li>
                        <li>{props.oneRecipe.numberOfSaves || 300}</li>
                    </ul>
                    <div className="separator"></div>
                    <p className="ingredients">
                        <span className="title" >Ingredients:</span>
                        <br />
                        {props.oneRecipe.Ingredients.map((oneIngredient, counter) => <Ingredient key={counter} oneIngredient={oneIngredient} />)}
                    </p>
                    <p className="preparation">
                        <span className="title">{props.oneRecipe.Preparation}</span>
                    </p>


                </article>
            </aside>
        </div>
    )
}

export default Card;