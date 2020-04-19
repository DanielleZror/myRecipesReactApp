import React from 'react';
import img from '../food1.jpg'
import CardsList from './cardsList'


const addRecipePage = () => {
    const arr = [{Name:'danielle',
                _id:'121313', 
                Description:'heloooo',
                TimeHours: "1",
                TimeMinutes: "14",
                Preparation: "soooo yam",
                Img:img}]
    
    return (
        <div >
            <header >
            <CardsList recipes ={arr} />
            </header>
      </div>
    )
}

export default addRecipePage;

