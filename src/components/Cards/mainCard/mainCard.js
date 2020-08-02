import React, { useState, useEffect } from 'react';
import './mainCard.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";


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

    const useProgressiveImage = (src) => {  
        const [sourceLoaded, setSourceLoaded] = useState(null)
      
        useEffect(() => {
          const img = new Image()
          img.src = src
          img.onload = () => setSourceLoaded(src)
        }, [src])
      
        return sourceLoaded 
      }

    const loaded = useProgressiveImage(props.oneRecipe.Img)
    return (
        <div className={props.index % 5 === 1 ? "main-card double-size-col" :
            (props.index % 10 === 2 ? "main-card double-size-row" : "main-card")}>
            <aside>
                <div className="imgBx" style={{ backgroundImage: `url(${loaded || "photo"})` }}>
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
                </div>
            </aside>
        </div>
    )
}

export default MainCard;

