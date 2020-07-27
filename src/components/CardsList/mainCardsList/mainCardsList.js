import React from 'react';
import Card from '../../Cards/mainCard/mainCard';
import './mainCardsList.css';

const mainCardsList = (props) => {
    return (
        <div className={props.className}>
            <div className='container'>
                {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} onLike={props.onLike}
                    onUnlike={props.onUnlike} oneRecipe={oneRecipe} />)}
            </div>
        </div>
    )
}

export default mainCardsList;