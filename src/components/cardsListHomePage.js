import React from 'react';
import Card from './cardHomePage.js';
import '../styles/cardsListHomePage.css';

const CardsList = (props) => {
    return (        
            <div className="bestRecipes wow fadeIn">
                <div className='container'>
                {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} oneRecipe={oneRecipe}/>) }
                </div>
            </div>
    )
}

export default CardsList;