import React, { useState } from 'react';
import './mainCard.css';
import { Link } from 'react-router-dom';
import LazyLoadImage from '../../LazyLoadImage'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { STATIC_IMAGES_PATH } from '../../../constants'

const MainCard = (props) => {

    const [isSaved, setIsSaved] = useState(props.oneRecipe.isSaved);

    const handelLike = (event) => {
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        setIsSaved(!isSaved)
        // this.setState({ isSaved: !this.state.isSaved })
        props.onLike(likeObj)
    }

    const handelUnlike = (event) => {
        console.log(event)
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        setIsSaved(!isSaved)
        // this.setState({ isSaved: !this.state.isSaved })
        props.onUnlike(likeObj)
    }

    return (
        <div className={props.index % 5 === 1 ? "main-card double-size-col" :
            (props.index % 10 === 2 ? "main-card double-size-row" : "main-card")}>
            <aside>
                <LazyLoadImage nameClass="imgBx" src={STATIC_IMAGES_PATH + props.oneRecipe.Img}>
                    <div className="overlay">
                        <div className="overlay-content">
                            {isSaved ? <FaHeart className="fa-icon" id={props.oneRecipe._id} onClick={handelUnlike} />
                                : <FaRegHeart className="fa-icon" onClick={handelLike} id={props.oneRecipe._id} />}
                            <Link to={`/recipe/${props.oneRecipe._id}`}> <GrView className="view-icon" /></Link>
                            <div className="details">
                                <h2>
                                    <Link to={`/recipe/${props.oneRecipe._id}`}>
                                        <span>{props.oneRecipe.Name}</span> </Link>
                                    <span>{props.oneRecipe.Description}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </LazyLoadImage>
            </aside>
        </div>
    )
}

export default MainCard;

