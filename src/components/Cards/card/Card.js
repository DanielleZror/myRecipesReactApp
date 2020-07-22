import React from 'react';
import './Card.css';
import { Route, Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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
            <Route>
                <div className='all-card'>
                    <aside>
                        <div className="card-img" style={{ backgroundImage: `url(${this.props.oneRecipe.Img})` }}>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <Link className="hover" to={`/recipe/${this.props.oneRecipe._id}`}> View</Link>
                                </div>
                            </div>
                        </div>
                        {this.state.isSaved ? <FaHeart className="fa-icon" id={this.props.oneRecipe._id} onClick={this.handelUnlike} />
                            : <FaRegHeart className="fa-icon" onClick={this.handelLike} id={this.props.oneRecipe._id} />}
                    </aside>
                    <article>
                        <div className="text-part">
                            <h3>{this.props.oneRecipe.Name || "Name"}</h3>
                            <h5>{this.props.oneRecipe.Description || "Description"}</h5>
                        </div>
                    </article>

                </div>
            </Route>
        )
    }
}

export default Card;

