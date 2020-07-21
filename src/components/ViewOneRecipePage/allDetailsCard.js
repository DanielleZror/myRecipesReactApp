import React from 'react';
import './allDetailsCard.css';
import Ingredient from './Ingredient';
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Card = (props) => {
    return (
        <div className="recipe-card">
            <aside >
                <img alt={props.oneRecipe.Name || "Name"} src={props.oneRecipe.Img || "Photo"} />
                <article>
                    <h2>{props.oneRecipe.Name || "Name"}</h2>
                    <h3>{props.oneRecipe.Description || "Description"}</h3>
                    <ul>
                        <li ><FaRegClock /></li>
                        <li>{(props.oneRecipe.TimeHours || 0 )+ " Hours " + (props.oneRecipe.TimeMinutes || 0) + " Minuts"} </li>
                        <li></li>
                        <li><FaRegHeart /></li>
                        <li>{props.oneRecipe.numberOfSaves || 0}</li>
                    </ul>
                    <div className="separator"></div>
                    <p className="ingredients">
                        <span className="title" >Ingredients:</span>
                        <br />
                        {props.oneRecipe.Ingredients ? 
                            props.oneRecipe.Ingredients.map((oneIngredient, counter) => <Ingredient key={counter} oneIngredient={oneIngredient} />) : null}
                    </p>
                    <p className="preparation">
                        <span className="title" >Preparation:</span>
                        <br />
                        <span className="text">{props.oneRecipe.Preparation || "Preparation"}</span>
                    </p>


                </article>
            </aside>
        </div>
    )
}

export default Card;