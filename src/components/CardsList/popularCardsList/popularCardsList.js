import React from 'react';
import Card from '../../Cards/popularCard/populaCard';
import './popularCardsList.css';

const CardsList = (props) => {
    return (        
            <div className={props.className}>
                <div className='container'>
                {props.recipes.map((oneRecipe) => <Card key={oneRecipe._id} oneRecipe={oneRecipe}/>) }
                </div>
            </div>
    )
}

export default CardsList;