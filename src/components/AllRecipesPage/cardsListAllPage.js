import React from 'react';
import Card from '../Cards/card/Card';
import './CardsListAllPage.css';

const CardsList = (props) => {
    return (
        <div className="list-all-page">
            <div className='container'>
                {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} onLike={props.onLike}
                    onUnlike={props.onUnlike} oneRecipe={oneRecipe} />)}
            </div>
        </div>
    )
}

export default CardsList;