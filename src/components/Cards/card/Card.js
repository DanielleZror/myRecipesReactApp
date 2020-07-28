import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";

class Card extends React.Component {
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
                <div className='all-card'>
                    <aside>
                        <div className="card-img" style={{ backgroundImage: `url(${this.props.oneRecipe.Img})` }}>
                            <div className="overlay">
                                <div className="overlay-content">
                                    {this.state.isSaved ? <FaHeart className="fa-icon" id={this.props.oneRecipe._id} onClick={this.handelUnlike} />
                                        : <FaRegHeart className="fa-icon" onClick={this.handelLike} id={this.props.oneRecipe._id} />}
                                    <Link to={`/recipe/${this.props.oneRecipe._id}`}> <GrView className="view-icon" /></Link>
                                </div>
                            </div>
                        </div>

                    </aside>
                    <article>
                        <div className="text-part">
                            <h3>{this.props.oneRecipe.Name || "Name"}</h3>
                            <h5>{this.props.oneRecipe.Description || "Description"}</h5>
                        </div>
                    </article>

                </div>
        )
    }
}

export default Card;

