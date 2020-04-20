import React from 'react';
import CardAddPage from './addCard.js';
import './addRecipePage.css'

const CardsList = () => {
    return (        
        <div className="containerAddPage wow fadeIn">
            <div className='container'>
               <CardAddPage key={1} />
               <CardAddPage key={2} />
               <CardAddPage key={3} />
            </div>
        </div>
    )
}

export default CardsList;