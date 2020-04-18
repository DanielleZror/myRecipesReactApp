import React from 'react';
import Card from './Card.js';
import './CardsList.css';

const CardsList = (props) => {

    return (        
            <div className='container'>
              {props.robots.map((oneRobot) => <Card key={oneRobot.id} oneRobot={oneRobot}/>) }
            </div>
    )
}

export default CardsList;