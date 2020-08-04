import React from 'react';
import CardIngredients from './cardAddIngredients.js';
import './addRecipePage.css';

class AddCard extends React.Component {
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
    var file = event.target.files[0]
    this.setState({file: file})
  }

  onSubmit = (event) => {
    event.preventDefault()
    var formData = new FormData();
    formData.append('image', this.state.file, this.state.userID)
    delete this.state.file
    delete this.state.label
    formData.append('recipe', JSON.stringify(this.state))
    this.props.onSave(formData)
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
              onChange={this.onChange} name="Name" required/>
            <textarea type='text' className='form-control mb-2 mr-sm-2 add-input' id='Description' name="Description"
              placeholder='Write a short description' onChange={this.onChange} required></textarea>
            <div className='form-row'>
              <div className='form-group col-md-3'>
                <input id='TimeHours' name='TimeHours' type='number' className='form-control mb-2 mr-sm-2 add-input' min='0' max='24'
                  placeholder='Hours' onChange={this.onChange} required/>
              </div>
              <div className='form-group col-md-3'>
                <input id='TimeMinutes' name='TimeMinutes' type='number' className='form-control mb-2 mr-sm-2 add-input' min='0' max='59'
                  placeholder='Minutes' onChange={this.onChange} required/>
              </div>
            </div>
            <div className='custom-file' id='myfile' >
              <input type='file' name="photo" className='form-control custom-file-input add-input' onChange={this.onLoad} accept='image/*' id='Img' required/>
              <label className='custom-file-label' id='photo' htmlFor='Img' >{this.state.label}</label>
            </div>
            <div className="separator"></div>
            <CardIngredients saveData={this.saveIngredients} />
            <div className="separator"></div>
            <textarea type='text' className='form-control mb-2 mr-sm-2 add-input' id='Preparation' name="Preparation"
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

export default AddCard;