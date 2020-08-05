import React from 'react';
import CardIngredients from './cardAddIngredients.js';
import './addRecipePage.css';
import { MAX_FILES } from '../../constants'

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Choose a photo',
      userID: JSON.parse(sessionStorage.userData).userID,
      Ingredients: [],
      filesValidetion: true
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  onLoad = (event) => {
    let files = []
    if (event.target.files.length > MAX_FILES) {
      this.setState({ filesValidetion: false })
      this.setState({ label: `Please do not add more then ${MAX_FILES} photos` })
      document.getElementById("Img").value = ""
    } else {
      for (var f of event.target.files) {
        files.push(f)
      }
      this.setState({ filesValidetion: true })
      this.setState({ files: files })
      this.setState({ label: `${event.target.files.length} files` })
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (!this.state.filesValidetion) {
      alert("Please add at least one photo")
      document.getElementById("Img").focus()
    } else {
      var formData = new FormData();
      for (var f of this.state.files) {
        formData.append('image', f, `${this.state.userID}-${f.name}`)
      }
      delete this.state.files
      delete this.state.label
      formData.append('recipe', JSON.stringify(this.state))
      this.props.onSave(formData)
    }
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
            <input type='text' className='form-control add-input' id='Name' placeholder="The recipe's name"
              onChange={this.onChange} name="Name" required />
            <textarea type='text' className='form-control add-input' id='Description' name="Description"
              placeholder='Write a short description' onChange={this.onChange} required></textarea>
            <div className='form-row'>
              <div className='form-group col-md-3'>
                <input id='TimeHours' name='TimeHours' type='number' className='form-control add-input' min='0' max='24'
                  placeholder='Hours' onChange={this.onChange} required />
              </div>
              <div className='form-group col-md-3'>
                <input id='TimeMinutes' name='TimeMinutes' type='number' className='form-control add-input' min='0' max='59'
                  placeholder='Minutes' onChange={this.onChange} required />
              </div>
            </div>
            <div className='custom-file' id='myfile' >
              <input type='file' name="photo"
                className='form-control add-input' onChange={this.onLoad} accept='image/*' id='Img' required multiple />
              <label className={this.state.filesValidetion ? 'custom-file-label' : 'custom-file-label files-not-valid'}
                id='photo' htmlFor='Img' >{this.state.label}</label>
            </div>
            <div className="separator"></div>
            <CardIngredients saveData={this.saveIngredients} />
            <div className="separator"></div>
            <textarea type='text' className='form-control add-input' id='Preparation' name="Preparation"
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