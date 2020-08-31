import React from 'react';
import CardIngredients from './cardAddIngredients.js';
import CardPreparation from './cardAddPreparation'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/notFound'
import './addRecipePage.css';
import { MAX_FILES, EDIT_MODE, ADD_MODE } from '../../constants'
import { requestByIdRecipe, requestResetByIdRecipeState, requestParams } from '../../actions'
import { TextField, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = (state, ownProps) => {
  return {
    recipeToEdit: state.byid.recipe,
    isPending: state.byid.isPending,
    isSucess: state.byid.isSucess,
    params: state.params.params,
    idToEdit: ownProps.recipeID,
    mode: ownProps.mode,
    onSave: ownProps.onSave
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestByIdRecipe: (id, userID) => requestByIdRecipe(id, userID, dispatch),
    onRequestResetByIdRecipeState: () => requestResetByIdRecipeState(dispatch),
    onRequestParams: () => requestParams(dispatch)
  }
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#CB8EB2',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#CB8EB2',
    },
    '& .MuiTextField-root': {
      marginRight: '10px',
    },
    '& .MuiInputBase-input': {
      fontFamily: ['Quicksand', 'sans-serif'],
    },
    // '&:hover': {
    //   color: '#CB8EB2',
    //   borderBottomColor: '#CB8EB2',
    // },

  },
})(TextField);

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: JSON.parse(sessionStorage.userData).userID,
      filesValidetion: true
    };
  }

  componentDidMount() {
    if (this.props.mode === EDIT_MODE) {
      this.props.onRequestByIdRecipe(this.props.idToEdit, JSON.parse(sessionStorage.userData).userID)
    } else {
      this.props.onRequestResetByIdRecipeState()
    }
    if (!this.props.params.length) {
      this.props.onRequestParams()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.mode === EDIT_MODE && this.props.idToEdit !== prevProps.idToEdit) {
      this.props.onRequestByIdRecipe(this.props.idToEdit, JSON.parse(sessionStorage.userData).userID);
    } else if (this.props.mode === ADD_MODE && this.props.mode !== prevProps.mode) {
      this.props.onRequestResetByIdRecipeState()
    }
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
      if (this.state.files) {
        for (var f of this.state.files) {
          formData.append('image', f, `${this.state.userID}-${f.name}`)
        }
        formData.append('oldImages', JSON.stringify(this.props.recipeToEdit.Img))
        delete this.state.files
      }

      delete this.state.label
      delete this.state.filesValidetion

      let objToSave = this.state
      if (this.props.mode === EDIT_MODE) {
        let editObj = { recipeID: this.props.idToEdit }
        objToSave = { ...this.state, ...editObj }
      }
      formData.append('recipe', JSON.stringify(objToSave))
      this.props.onSave(formData)
    }
  }

  saveIngredients = (event) => {
    this.setState({ Ingredients: event })
  }

  savePreparation = (event) => {
    this.setState({ Preparation: event })
  }

  render() {
    return (
      <>
        {this.props.mode === EDIT_MODE && this.props.isPending ? <Loading /> : this.props.mode === EDIT_MODE && !this.props.isSucess ? <NotFound /> :
          <div className="add-page-card">
            <h1 className="title-add-page">{this.props.mode === ADD_MODE ? "Add new recipe" : `Edit - ${this.props.recipeToEdit.Name}`}</h1>
            <div className="separator"></div>
            <div className='container'>
              <form className="add-form" onSubmit={this.onSubmit}>
                <CssTextField id="Name" label="Recipe's name" fullWidth={true} className="add-input"
                  defaultValue={this.state.Name || this.state.Name === "" ? this.state.Name : this.props.recipeToEdit.Name || ""}
                  onChange={this.onChange} required />
                <CssTextField id="Description" label="Description" multiline={true} fullWidth={true} className="add-input"
                  defaultValue={this.state.Description || this.state.Description === "" ? this.state.Description : this.props.recipeToEdit.Description || ""}
                  onChange={this.onChange} required />
                <CssTextField id="NumberOfDishes" label="Number of dishes" type="number" min="1" max="1000" fullWidth={true} className="add-input"
                  defaultValue={this.state.NumberOfDishes || this.state.NumberOfDishes === "" ? this.state.NumberOfDishes : this.props.recipeToEdit.NumberOfDishes || ""}
                  onChange={this.onChange} required />
                {/* <div className="separator"></div> */}
                {/* <div className='form-row'>
                  <div className='form-group col-md-3'>
                  <label htmlFor='TimeHours'>Cooking time </label>
                    <input id='TimeHours' name='TimeHours' type='number' className='form-control add-input' min='0' max='24'
                      placeholder='Hours' onChange={this.onChange} value={this.state.TimeHours || this.props.recipeToEdit.TimeHours || ""} required />
                  </div>
                  <div className='form-group col-md-3'>
                    <input id='TimeMinutes' name='TimeMinutes' type='number' className='form-control add-input' min='0' max='59'
                      placeholder='Minutes' onChange={this.onChange} value={this.state.TimeMinutes || this.props.recipeToEdit.TimeMinutes || ""} required />
                  </div>
                </div> */}
                <div className='form-row'>
                  <CssTextField id="TimeHours" label="Hours" type="number" min='0' max='24' className="add-input times" 
                    defaultValue={this.state.TimeHours || this.state.TimeHours === "" ? this.state.TimeHours : this.props.recipeToEdit.TimeHours || ""}
                    onChange={this.onChange} w required />
                  <CssTextField id="TimeMinutes" label="Minutes" type="number" min='0' max='59' className="add-input times"
                    defaultValue={this.state.TimeMinutes || this.state.TimeMinutes === "" ? this.state.TimeMinutes : this.props.recipeToEdit.TimeMinutes || ""}
                    onChange={this.onChange} required />
                </div>
                {/* <div className="separator"></div> */}
                <div className='custom-file' id='myfile' >
                  <input type='file' name="photo"
                    className='form-control add-input' onChange={this.onLoad} accept='image/*' id='Img' required={this.props.mode === ADD_MODE ? true : false} multiple />
                  <label className={this.state.filesValidetion ? 'custom-file-label' : 'custom-file-label files-not-valid'}
                    id='photo' htmlFor='Img' >{this.state.label || (this.props.recipeToEdit.Img ? this.props.recipeToEdit.Img.length + " files" : null) || "Choose..."}</label>
                </div>
                {/* <div className="separator"></div> */}
                <CardIngredients saveData={this.saveIngredients} value={this.props.recipeToEdit.Ingredients} params={this.props.params} />
                {/* <div className="separator"></div> */}
                <CardPreparation saveData={this.savePreparation} value={this.props.recipeToEdit.Preparation} />
                <div className='save-div'>
                  <button id='saveBtn' type='submit' className='save-btn btn'>Save</button>
                </div>
              </form>

            </div>

          </div>
        }
      </>
    )
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);