import React, { useState } from 'react';
import './allDetailsCard.css';
import Ingredient from './Ingredient';
import Share from '../Share'
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { STATIC_IMAGES_PATH } from '../../constants'

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
                <img alt={props.oneRecipe.Name || "Name"} src={STATIC_IMAGES_PATH + props.oneRecipe.Img || "Photo"} />
            </aside>
            {isSaved ? <FaHeart className="fa-icon-recipe" id={props.oneRecipe._id} onClick={handelUnlike} />
                : <FaRegHeart className="fa-icon-recipe" onClick={handelLike} id={props.oneRecipe._id} />}
            <article>
                <h2>{props.oneRecipe.Name || "Name"}</h2>
                <h3>{props.oneRecipe.Description || "Description"}</h3>
                <ul>
                    <li ><FaRegClock /></li>
                    <li>{((parseInt(props.oneRecipe.TimeHours) || 0) !== 0 ? `${props.oneRecipe.TimeHours} Hours ` : " ") +
                        ((parseInt(props.oneRecipe.TimeMinutes) || 0) !== 0 ? `${props.oneRecipe.TimeMinutes} Minuts` : " ")} </li>
                    <li></li>
                    <li>  <FaRegHeart /></li>
                    <li>{props.oneRecipe.numOfSaves || 0}</li>
                </ul>
                <Share />
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
                    <div className="preparation-div">
                        <span className="text">{props.oneRecipe.Preparation || "Preparation"}</span>
                    </div>
                </p>
            </article>
        </div>
    )
}

export default DetailsCard;