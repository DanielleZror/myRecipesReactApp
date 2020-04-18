import React from 'react';
import Card from './Card.js';
import '../styles/CardsList.css';

const CardsList = (props) => {
  console.log('list',props.recipes)
    return (        
            <div className='container'>
              {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} oneRecipe={oneRecipe}/>) }
            </div>
    )
}

export default CardsList;