import React from 'react';
import Card from 'react-bootstrap/Card'
import './addRecipePage.css'

const addCard = () => {
    return (
        <div className='add-card'>
        <Card >
            <div className="add-card-one">
                <h1></h1>
            </div>
            <div className="details-add-card">
            <form>
                  <textarea type='text' class='form-control mb-2 mr-sm-2' id='Preparation'
                    placeholder='Write the preparation method' rows='11' required></textarea> 
                </form>
            </div>
        </Card>
     </div>
    )
}

export default addCard;

