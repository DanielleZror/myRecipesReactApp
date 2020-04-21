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
                <form class='bootstrap-form about'>
                  <input type='text' class='form-control mb-2 mr-sm-2' id='Name' placeholder="The recipe's name"
                    required/>
                  <label id="forName" class="note" for="Name"></label>
                  <textarea type='text' class='form-control mb-2 mr-sm-2' id='Description'
                    placeholder='Write a short description' required></textarea> 
                    <label id="forDescription" class="note" for="Description"></label>
                  <div class='form-row'>
                    <div class='form-group col-md-3'>
                      <input id='Hours' name='h' type='number' class='form-control mb-2 mr-sm-2' min='0' max='24'
                        placeholder='Hours' required/>
                        <label id="forHours" class="note" for="Hours"></label>
                    </div>
                    <div class='form-group col-md-3'>
                      <input id='Minutes' name='m' type='number' class='form-control mb-2 mr-sm-2' min='0' max='59'
                        placeholder='Minutes' required/>
                        <label id="forMinutes" class="note" for="Minutes"></label>
                    </div>
                  </div>
                  <div class='custom-file' id='myfile'>
                    <input type='file' class='form-control custom-file-input' accept='image/*' id='Img' required/>
                    <label class='custom-file-label' id='photo' for='Img' s>Choose a photo</label>
                    <label id="Img" class="note" for="Img"></label>
                  </div>
                </form>
                </div>
            </Card>
         </div>
    )
}

export default addCard;

