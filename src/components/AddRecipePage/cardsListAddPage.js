import React from 'react';
import CardIngredients from './cardAddIngredients.js';
import './addRecipePage.css';

class CardsList extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Choose a photo',
      userID: JSON.parse(sessionStorage.userData).userID
    };
  }
  
   onChange = (event) => {     
    this.setState({[event.target.id]: event.target.value});
  }

  onLoad = (event) =>{
      var imgTo64;
      var id = event.target.id
      var file = event.target.files[0]
      console.log("file", file)
      var reader = new FileReader();
      reader.onload = (e)=>{
        imgTo64 = (e.target.result).toString('base64')
        this.setState({[id]: imgTo64});
        this.setState({label: file.name})
     }; reader.readAsDataURL(file);
  }

  onSubmit =(event) =>
  {
    event.preventDefault()
    console.log("on submit", this.state)
    this.props.onSave(this.state)
  }
  render(){

    return (        
        <div className="list-add-page wow fadeIn">
            <div className='container'>
            <form onSubmit={this.onSubmit}>
            <input type='text' className='form-control mb-2 mr-sm-2' id='Name' placeholder="The recipe's name"
              onChange={this.onChange}  />
                  <textarea type='text' className='form-control mb-2 mr-sm-2' id='Description'
                    placeholder='Write a short description' onChange={this.onChange}  ></textarea> 
                  <div className='form-row'>
                    <div className='form-group col-md-3'>
                      <input id='TimeHours' name='h' type='number' className='form-control mb-2 mr-sm-2' min='0' max='24'
                        placeholder='Hours' onChange={this.onChange} />
                    </div>
                    <div className='form-group col-md-3'>
                      <input id='TimeMinutes' name='m' type='number' className='form-control mb-2 mr-sm-2' min='0' max='59'
                        placeholder='Minutes' onChange={this.onChange}  />
                    </div>
                  </div>
                  <div className='custom-file' id='myfile'>
                    <input type='file'   className='form-control custom-file-input' onChange={this.onLoad}  accept='image/*' id='Img' />
                    <label className='custom-file-label' id='photo' htmlFor='Img' >{this.state.label}</label>
                  </div>
                  <CardIngredients ></CardIngredients>
                <textarea type='text' className='form-control mb-2 mr-sm-2' id='Preparation'
                    placeholder='Write the preparation method' rows='6' onChange={this.onChange} ></textarea>
                  <div className='save-btn'>
                    <button id='saveBtn' type='submit'  className='btn'>
                      <i className="far fa-save fa-lg mr-3"></i>Save</button>
                  </div>
            </form>
               
            </div>
            
        </div>
    )
  }


}

export default CardsList;