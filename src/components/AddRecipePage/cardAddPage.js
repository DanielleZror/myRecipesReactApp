import React from 'react';
import CardIngredients from './cardAddIngredients.js';
import './addRecipePage.css';

class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Choose a photo',
      userID: JSON.parse(sessionStorage.userData).userID,
      Ingredients: []
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  onLoad = (event) => {
    var imgTo64;
    var id = event.target.id
    var file = event.target.files[0]
    var reader = new FileReader();
    reader.onload = (e) => {
      imgTo64 = (e.target.result).toString('base64')
      this.setState({ [id]: imgTo64 });
      this.setState({ label: file.name })
    }; reader.readAsDataURL(file);
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("on submit", this.state)
    this.props.onSave(this.state)
  }

  saveIngredients = (event) => {
    this.setState({ Ingredients: event })
  }

  render() {
    return (
      <div className="add-page-card">
        <h1 className="title-add-page">Add new recipe</h1>
        <div className="separator"></div>
        <div className='container'>
          <form className="add-form" onSubmit={this.onSubmit}>
            <input type='text' className='form-control mb-2 mr-sm-2 add-input' id='Name' placeholder="The recipe's name"
              onChange={this.onChange} required/>
            <textarea type='text' className='form-control mb-2 mr-sm-2 add-input' id='Description'
              placeholder='Write a short description' onChange={this.onChange} required></textarea>
            <div className='form-row'>
              <div className='form-group col-md-3'>
                <input id='TimeHours' name='h' type='number' className='form-control mb-2 mr-sm-2 add-input' min='0' max='24'
                  placeholder='Hours' onChange={this.onChange} required/>
              </div>
              <div className='form-group col-md-3'>
                <input id='TimeMinutes' name='m' type='number' className='form-control mb-2 mr-sm-2 add-input' min='0' max='59'
                  placeholder='Minutes' onChange={this.onChange} required/>
              </div>
            </div>
            <div className='custom-file' id='myfile'>
              <input type='file' className='form-control custom-file-input add-input' onChange={this.onLoad} accept='image/*' id='Img' required/>
              <label className='custom-file-label' id='photo' htmlFor='Img' >{this.state.label}</label>
            </div>
            <div className="separator"></div>
            <CardIngredients saveData={this.saveIngredients} />
            <div className="separator"></div>
            <textarea type='text' className='form-control mb-2 mr-sm-2 add-input' id='Preparation'
              placeholder='Write the preparation method' rows='6' onChange={this.onChange} required></textarea>
            <div className='save-div'>
              <button id='saveBtn' type='submit' className='save-btn btn'>Save</button>
            </div>
          </form>

        </div>

      </div>
    )
  }


}

export default CardsList;