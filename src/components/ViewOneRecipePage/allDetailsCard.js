import React from 'react';
import './allDetailsCard.css';
import Ingredient from './Ingredient';
import Share from '../Share'
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

class DetailsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSaved: props.oneRecipe.isSaved
        };
    }

    handelLike = (event) => {
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        this.props.onLike(likeObj)
        this.setState({ isSaved: !this.state.isSaved })
    }

    handelUnlike = (event) => {
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        this.props.onUnlike(likeObj)
        this.setState({ isSaved: !this.state.isSaved })
    }

    render() {
        return (
            <div className="recipe-card">
                <aside >
                    <img alt={this.props.oneRecipe.Name || "Name"} src={this.props.oneRecipe.Img || "Photo"} />
                </aside>
                {this.state.isSaved ? <FaHeart className="fa-icon-recipe" id={this.props.oneRecipe._id} onClick={this.handelUnlike} />
                    : <FaRegHeart className="fa-icon-recipe" onClick={this.handelLike} id={this.props.oneRecipe._id} />}
                <article>
                    <h2>{this.props.oneRecipe.Name || "Name"}</h2>
                    <h3>{this.props.oneRecipe.Description || "Description"}</h3>
                    <ul>
                        <li ><FaRegClock /></li>
                        <li>{((this.props.oneRecipe.TimeHours || 0) != 0 ? `${this.props.oneRecipe.TimeHours} Hours ` : " ") +
                            ((this.props.oneRecipe.TimeMinutes || 0) != 0 ? `${this.props.oneRecipe.TimeMinutes} Minuts` : " ")} </li>
                        <li></li>
                        <li>  <FaRegHeart /></li>
                        <li>{this.props.oneRecipe.numOfSaves || 0}</li>
                    </ul>
                    <Share />
                    <div className="separator"></div>
                    <p className="ingredients">
                        <span className="title" >Ingredients:</span>
                        <br />
                        {this.props.oneRecipe.Ingredients ?
                            <Ingredient Ingredients={this.props.oneRecipe.Ingredients} /> : null}
                    </p>
                    <p className="preparation">
                        <span className="title" >Preparation:</span>
                        <br />
                        <div className="preparation-div">
                            <span className="text">{this.props.oneRecipe.Preparation || "Preparation"}</span>
                        </div>
                    </p>


                </article>
            </div>
        )
    }
}

export default DetailsCard;