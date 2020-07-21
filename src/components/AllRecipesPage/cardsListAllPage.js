import React from 'react';
import Card from '../Cards/card/Card';
import './CardsListAllPage.css';

const CardsList = (props) => {
    return (        
        <div className="list-all-page">
            <div className='container'>
              {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} oneRecipe={oneRecipe}/>) }
            </div>
        </div>
    )
}

export default CardsList;