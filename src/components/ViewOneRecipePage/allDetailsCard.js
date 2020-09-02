import React, { useState } from 'react';
import './allDetailsCard.css';
import Ingredient from './Ingredient';
import Preparation from './Preparation'
import Share from '../Share/Share'
import { FaRegHeart, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { GiHotMeal, GiCookingPot } from "react-icons/gi";
import { RiKnifeLine } from "react-icons/ri";
import Carousel from './carousel'
import EditDelete from './EditDeleteRecipe'
import User from '../UserPage/UserName'

const DetailsCard = (props) => {
    const [isSaved, setIsSaved] = useState(props.oneRecipe.isSaved);

    const handelLike = (event) => {
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        setIsSaved(!isSaved)
        props.onLike(likeObj)
    }

    const handelUnlike = (event) => {
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        setIsSaved(!isSaved)
        props.onUnlike(likeObj)
    }

    return (
        <div className="recipe-card">
            <aside >
                <Carousel images={props.oneRecipe.Img} />
            </aside>
            {isSaved ? <FaHeart className="fa-icon-recipe" id={props.oneRecipe._id} onClick={handelUnlike} />
                : <FaRegHeart className="fa-icon-recipe" onClick={handelLike} id={props.oneRecipe._id} />}
            <article>
                <h2>{props.oneRecipe.Name || "Name"}</h2>
                <h3>{props.oneRecipe.Description || "Description"}</h3>
                <ul>
                    <li> <RiKnifeLine title="prep time" className="icon-list" />{((parseInt(props.oneRecipe.PrepTimeHours) || 0) !== 0 ? `${props.oneRecipe.PrepTimeHours}:` : " ") +
                        ((parseInt(props.oneRecipe.PrepTimeMinutes) || 0) !== 0 ? `${('0' + props.oneRecipe.PrepTimeMinutes).slice(-2)}` : " ")} </li>
                     <li> <GiCookingPot title="cook time" className="icon-list" />{((parseInt(props.oneRecipe.CookTimeHours) || 0) !== 0 ? `${props.oneRecipe.CookTimeHours}:` : " ") +
                        ((parseInt(props.oneRecipe.CookTimeMinutes) || 0) !== 0 ? `${('0' + props.oneRecipe.CookTimeMinutes).slice(-2)}` : " ")} </li>
                    <li><FaRegHeart className="icon-list" /> {props.oneRecipe.numOfSaves || 0}</li>
                    <li><GiHotMeal className="icon-list" />{props.oneRecipe.NumberOfDishes || 0}</li>
                    <li><FaRegUserCircle className="icon-list" /><User userID={props.oneRecipe.userID} /></li>

                </ul>
                <Share recipeName={props.oneRecipe.Name} />
                {props.oneRecipe.userID === JSON.parse(sessionStorage.userData).userID ?
                    <EditDelete oneRecipe={props.oneRecipe} onDelete={props.onDelete} /> : null}
                <div className="separator"></div>
                <p className="ingredients">
                    <span className="title" >Ingredients:</span>
                    <br />
                    {props.oneRecipe.Ingredients ?
                        <Ingredient Ingredients={props.oneRecipe.Ingredients} /> : null}
                </p>
                <p className="preparation">
                    <span className="title" >Preparation:</span>
                    <br />
                    {props.oneRecipe.Preparation ?
                        <Preparation Preparation={props.oneRecipe.Preparation} /> : null}
                </p>
            </article>
        </div>
    )
}

export default DetailsCard;