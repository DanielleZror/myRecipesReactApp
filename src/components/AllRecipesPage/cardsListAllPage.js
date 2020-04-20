import React from 'react';
import Card from './cardAllPage.js';
import './CardsListAllPage.css';

const CardsList = (props) => {
    return (        
        <div className="containerCardList wow fadeIn">
            <div className='container'>
              {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} oneRecipe={oneRecipe}/>) }
            </div>
        </div>
    )
}

export default CardsList;