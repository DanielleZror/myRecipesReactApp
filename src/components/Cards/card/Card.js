import React from 'react';
import './Card.css';
import { Route, Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const Card = (props) => {
    
    return (
        <Route>
            <div className='all-card'>
                <aside>
                    <div className="card-img" style={{ backgroundImage: `url(${props.oneRecipe.Img})` }}>
                        <div className="overlay">
                            <div className="overlay-content">
                                <Link className="hover" to={`/recipe/${props.oneRecipe._id}`}> View</Link>
                            </div>
                        </div>
                    </div>
                    <FaRegHeart className="fa-icon" name={props.oneRecipe._id}/>
                </aside>
                <article>
                    <div className="text-part">
                        <h3>{props.oneRecipe.Name || "Name"}</h3>
                        <h5>{props.oneRecipe.Description || "Description"}</h5>
                    </div>
                </article>

            </div>
        </Route>
    )
}

export default Card;

