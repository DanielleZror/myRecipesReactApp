import React, { useState } from 'react';
import './Card.css';
import LazyLoadImage from '../../LazyLoadImage'
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { STATIC_IMAGES_PATH } from '../../../constants'

const Card = (props) => {
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
        console.log(event)
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        setIsSaved(!isSaved)
        props.onUnlike(likeObj)
    }

    return (
        <div className='all-card'>
            <aside>
                <LazyLoadImage nameClass="card-img" src={ STATIC_IMAGES_PATH + props.oneRecipe.Img[0]}>
                    <div className="overlay">
                        <div className="overlay-content">
                            {isSaved ? <FaHeart className="fa-icon" id={props.oneRecipe._id} onClick={handelUnlike} />
                                : <FaRegHeart className="fa-icon" onClick={handelLike} id={props.oneRecipe._id} />}
                            <Link to={`/recipe/${props.oneRecipe._id}`}> <GrView className="view-icon" /></Link>
                        </div>
                    </div>
                </LazyLoadImage>
            </aside>
            <article>
                <div className="text-part">
                    <h3>{props.oneRecipe.Name || "Name"}</h3>
                    <h5>{props.oneRecipe.Description || "Description"}</h5>
                </div>
            </article>

        </div>
    )

}

export default Card;

