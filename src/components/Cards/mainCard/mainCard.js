import React from 'react';
import './mainCard.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";

class mainCard extends React.Component {
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
        this.setState({ isSaved: !this.state.isSaved })
        this.props.onLike(likeObj)
    }

    handelUnlike = (event) => {
        console.log(event)
        let likeObj = {
            userID: JSON.parse(sessionStorage.userData).userID,
            recipeID: event.currentTarget.id
        }
        this.setState({ isSaved: !this.state.isSaved })
        this.props.onUnlike(likeObj)
    }

    render() {
        return (
            <div className={this.props.index % 5 === 2 ? " main-card double-size" : "main-card"}>
                <aside>
                    <div className="imgBx" style={{ backgroundImage: `url(${this.props.oneRecipe.Img})` }}>
                        <div className="overlay">
                            <div className="overlay-content">
                                {this.state.isSaved ? <FaHeart className="fa-icon" id={this.props.oneRecipe._id} onClick={this.handelUnlike} />
                                    : <FaRegHeart className="fa-icon" onClick={this.handelLike} id={this.props.oneRecipe._id} />}
                                <Link to={`/recipe/${this.props.oneRecipe._id}`}> <GrView className="view-icon" /></Link>
                                <div className="details">
                                    <h2>
                                        <Link to={`/recipe/${this.props.oneRecipe._id}`}>
                                            <span>{this.props.oneRecipe.Name}</span> </Link> 
                                        <span>{this.props.oneRecipe.Description}</span>

                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        )
    }
}

export default mainCard;

