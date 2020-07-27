import React from 'react';
import './mainCard.css';
import { Route, Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Card from 'react-bootstrap/Card'

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
            <div className='all-card'>
                <Card >
                    <div className="imgBx">
                        <img src={this.props.oneRecipe.Img} alt={this.props.oneRecipe.Name} />
                    </div>
                    <div className="details">
                        <h2>
                            <Link to={`/recipe/${this.props.oneRecipe._id}`}> {this.props.oneRecipe.Name} </Link><br />
                            <span>{this.props.oneRecipe.Description}</span>

                        </h2>
                    </div>
                </Card>
            </div>
        )
    }
}

export default mainCard;

